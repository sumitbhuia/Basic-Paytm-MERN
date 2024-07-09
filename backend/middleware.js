const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");


const authMiddleware = (req, res ,next)=>{
    const authHeader = req.headers.authorization;
    
    const token = authHeader.split(' ')[1];
    
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        res.status(403).json({error : 'Please signin'})
    }

    try{
        const decoded = jwt.verify(token , JWT_SECRET);  
        req.userId = decoded.userId;
        next();

    } catch(err){
        return res.status(403).json({});
    }

 



}

module.exports={
    authMiddleware
}