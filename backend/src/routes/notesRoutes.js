const express=require('express');
const router=express.Router();
const { getNotes,
  postNotes,
  getNoteById,
  putNotes,
  deleteNotes,}=require('../controllers/notesController')


router.get("/",getNotes)

router.get("/:id",getNoteById)

router.post("/",postNotes)

router.put("/:id",putNotes)

router.delete("/:id",deleteNotes)


module.exports=router

