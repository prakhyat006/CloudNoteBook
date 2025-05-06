const exxpress=require('express');
const router=exxpress.Router();
router.get('/',(req,res)=>{
    res.json([])
})
module.exports=router