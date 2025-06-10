const exxpress=require('express');
const router=exxpress.Router();
const { check, validationResult, body } = require('express-validator/check');
const Note = require('../models/Notes');
var fetchuser = require('../middleware/fetchuser');
//Route 1:  Used to fetch all the details of the logined user :GET "/api/notes/fetchallnotes"
router.get('/fetchallnotes',fetchuser,async (req,res)=>{
    try {
    const notes = await Note.find({user:req.user.id})
    res.json(notes)
    } catch (error) {
        console.error("Error in login route:", error);
    res.status(500).send("Internal Server Error occurred");
    }
})
//Route 2:Add new notes for the use   :POST "/api/notes/addnote"
router.post('/addnote',fetchuser,[
    body('title',"Enter a valid title").isLength({min:3}),
    body('description',"Description must be atleast 5 character").isLength({min:5}),
],async (req,res)=>{
    try {
    const errors =validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({ errors:errors.array() });
    }
    const {title,description,tag}=req.body;
    const note=new Note({
title,description,tag,user:req.user.id
    })
    const savedNote = await note.save();
    res.json(savedNote)
    } catch (error) {
        console.error("Error in login route:", error);
    res.status(500).send("Internal Server Error occurred");
    }
}) 
//Route 3:Updating a note   :PUT "/api/notes/updatenote"
router.put('/updatenote/:id',fetchuser,async (req,res)=>{
    try {
    const {title,description,tag}=req.body;
    const newNote= {};
    if(title){newNote.title=title};
    if(description){newNote.description=description};
    if(tag){newNote.tag=tag};
    //find the nore to be updated
    let note=await Note.findById(req.params.id)
    if(!note){
        return res.status(400).send("Not found");
    }
    if(note.user.toString() !==req.user.id){
return res.status(401).send("unathorised : Not allowed");
    }
    note=await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true});
    res.json({note});
    } catch (error) {
        console.error("Error in login route:", error);
    res.status(500).send("Internal Server Error occurred");
    }
})
//Route 4:Deleting a note   :Delete "/api/notes/updatenote"
router.delete('/deletenote/:id',fetchuser,async (req,res)=>{
    try {
    
    //find the nore to be updated
    let note=await Note.findById(req.params.id)
    if(!note){
        return res.status(400).send("Not found");
    }
    if(note.user.toString() !==req.user.id){
return res.status(401).send("unathorised : Not allowed");
    }
    note=await Note.findByIdAndDelete(req.params.id);
    res.json({"Sucess ":"Note has been deleted",note:note});
    } catch (error) {
        console.error("Error in login route:", error);
    res.status(500).send("Internal Server Error occurred");
    }
})
module.exports=router