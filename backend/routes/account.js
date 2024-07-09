const {Router} = require('express');
const { Account } = require('../db');
const mongoose = require('mongoose');
const { authMiddleware } = require('../middleware');



const router = Router();





// BALANCE

router.get('/balance',authMiddleware,async(req,res)=>{
    const userId = req.userId;
    const account = await Account.findOne({userId:userId});
    if(!account){
        res.json({
            msg : 'Error finding balance',
        })
    }
    res.json({
        balance : account.balance
    })
})





// TRANSFER



router.post('/transfer', authMiddleware , async(req,res)=>{
    // Sessions are important to commit transactions
    // Everything should happen inside session
    const session = await mongoose.startSession();

    // A transaction helps group task together , if any task atttacted to session fails 
    // All task are reverted to original state and value 
    // If all tasks pass , transaction is commited  i.e. made permanent 
    // Transaction is like a checklist , if all pass then execute else abort
   await session.startTransaction();
   const {to , amount} = req.body;

    const currentAcc = await Account.findOne({userId : req.userId}).session(session);

    if(!currentAcc  ||  currentAcc.balance < amount ){
        await session.abortTransaction() ; 

        return res.status(400).json({
            message: "Insufficient balance"
        });

    }

    const toAccount = await Account.findOne({ userId: to}).session(session);

    if (!toAccount) {
        await session.abortTransaction() ; 

        return res.status(400).json({
            message: "Invalid account "
        });
    }

        
    await Account.updateOne({userId : req.userId} ,{$inc : { balance : -amount}}).session(session);
    await Account.updateOne({userId : req.body.to} ,{$inc : { balance : +amount}}).session(session);
    await session.commitTransaction();
     res.json({
        message : 'Transfer successful',
    }) 
})


module.exports=router;