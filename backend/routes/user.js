const express = require ('express');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');
const { authMiddleware } = require('../middleware');
const zod = require('zod');
const { User, Account } = require('../db');



//User sub-router (all logic inside-user)
const router = express.Router();



//  SIGNUP
//  ---------



// Creating an object will help in checking in one go
// Here you directly define how you going to pass data in postman under what parameter names 
const signupBodySchema = zod.object({
    username: zod.string().email(),
	firstname: zod.string(),
	lastname: zod.string(),
	password: zod.string()
});
router.post('/signup' , async(req,res)=>{
    // If any of the input goes wrong , this object will throw error 
    // No need to handle individually
    const { success ,error } = signupBodySchema.safeParse(req.body)
    if(!success){
        console.error(error); 
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    // Check if user already exists or not 
    const existingUser = await User.findOne({username : req.body.username});
    if(existingUser){
        console.error(error);
        return res.status(411).json({
            message: "Email already taken"
        })
    }

    
      const user =  await User.create({
            username : req.body.username,
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            password : req.body.password,
        })

       

        const userId = user._id;
        const token = jwt.sign({userId},JWT_SECRET);
        

        await Account.create({
            userId,
            balance : 1+Math.random()*10000
        })

             

        res.json(
            {
                message: "User created successfully",
                token: token 
            })
    
});








//  SIGNIN
// --------

const signinBodySchema = zod.object({
    username: zod.string().email(),
	password: zod.string()

});
router.post('/signin' , async(req,res)=>{
    
    const { success } = signinBodySchema.safeParse(req.body)
    if(!success){
        res.status(411).json({
            message: "Incorrect inputs"
        })
    }


    // Check if user already exists or not 
    const existingUser = await User.findOne({username : req.body.username , password : req.body.password});

    if(existingUser){
       
            const userId = existingUser._id;
            const token = jwt.sign({userId},JWT_SECRET);
            res.json({
                token: token,
            })
            return;
    }

        
    res.status(411).json({
         message: "Error while logging in"
    })

});






// UPDATE
// -------




const updateBodySchema = zod.object({
    password : zod.string().optional(),
    firstname : zod.string().optional(),
    lastname : zod.string().optional(),
});
router.put('/',authMiddleware,async(req,res)=>{
    const{success} = updateBodySchema.safeParse(req.body);
    if(!success){
        res.status(411).json({
            message: "Error while updating information"
        })

    }
    else{
        await User.updateOne({_id : req.userId} , req.body);
        res.json({
            message: "Updated successfully"
        })
    }
});







// BULK


// Not params its query FOR ? 
router.get('/bulk',async(req,res)=>{
    const filter = req.query.filter || '';
    const users = await User.find({
        $or:
        [{
            firstname: {'$regex':filter}
        },
          
        { 
            lastname :{'$regex':filter}
        }

    ]})

    res.json({
        user: users.map((it)=>({
            username : it.username,
            firstname : it.firstname,
            lastname : it.lastname,
            _id : it._id
        }))
    })

});
    



module.exports = router;