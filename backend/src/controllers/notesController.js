const Note= require('../models/note')


const getNotes= async (req,res)=>{
  try{
    const notes= await Note.find().sort({createdAt:-1})
    res.status(200).json(notes)
  }catch(error){
    console.log("error in getAllNotes")
    res.status(500).json("internal server error",error);
  }
}

const getNoteById=async(req,res)=>{
  try{
    const note =await Note.findById(req.params.id)
    if(!note) return res.status(404).json({message:"Note Not Found"})
    res.status(200).json(note);
  }catch(error){
    res.status(500).send("internal server error",error);
  } 
}

const postNotes= async (req,res)=>{
  try{
    const {title,content}=req.body
    const newNote=new Note({title,content})
    await newNote.save()
    res.status(201).json({message:"note creates successfully"})
  }catch(error){
    console.log(error)
    res.status(500).json({message:"internal server error cant post"});
  }
}

const putNotes= async (req,res)=>{
  try{
    const {title,content}=req.body
    const updatedNote= await Note.findByIdAndUpdate(req.params.id,{title,content},{
      new:true,
    })
    if(!updatedNote) return res.status(404).json({message:"note is not found"});
    res.status(200).json(updatedNote)
  }catch(error){
    console.log(error)
    res.status(500).json({message:"Internal server error cant update"});
  }
}

const deleteNotes=async(req,res)=>{
  try{
    const id=req.params.id;
    const DeletedNode=await Note.findByIdAndDelete(id);
    if(!DeletedNode) return res.status(404).json({message:"note is not there to delete"})
    res.status(200).json(DeletedNode)
  }catch(error){
    console.log(error)
    res.status(500).json({message:"Internal server error cant update"});
  }
}

module.exports={
  getNotes,
  getNoteById,
  postNotes,
  putNotes,
  deleteNotes,
}