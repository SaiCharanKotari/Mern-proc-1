const mongoose=require('mongoose');

const connectDB=async()=>{
  try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGOODB Connected Successfully");
  }catch(error){
    console.log("Error Connrcting mongooDB",error);
    process.exit(1);
  }
};

module.exports=connectDB