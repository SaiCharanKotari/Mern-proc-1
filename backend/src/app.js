const express=require('express')
const app=express();

const rateLimiter=require('./middleware/rateLimiter')
const routerNotes=require('./routes/notesRoutes');
const mongooDB=require('./config/db') //Mongoo
const cors =require("cors");

const dotenv=require('dotenv'); //Mongoo
dotenv.config(); //Mongoo

const PORT =process.env.PORT || 5000 



app.use(
  cors({
    origin:"http://localhost:5173",
  })
);
app.use(express.json()) //middleware
app.use(rateLimiter)
app.use("/api/notes",routerNotes)


mongooDB().then(()=>{
  app.listen(PORT,()=>{
    console.log(`server is started listining`,PORT)
  })
}) //Mongoo

