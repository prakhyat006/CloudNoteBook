var jwt = require('jsonwebtoken');
const JWT_SCRET="prakhyatisCoder";
const fetchuser=(req,res,next)=>{
    const token=req.header("auth-token");
    if(!token){
        res.status(401).send({error: "please authenticate using valid token"});
    }
    try {
        const data=jwt.verify(token,JWT_SCRET);
    req.user=data.user;
    next();
    } catch (error) {
        res.status(401).send({error: "please authenticate using valid token"});
    }
    
}
module.exports=fetchuser