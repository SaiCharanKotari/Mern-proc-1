const ratelimit= require('../config/upstash.js')


const rateLimiter =async(req,res,next)=>{
  try{
    const {success} =await ratelimit.limit("my rate limit");

    if(!success){
      return res.status(429).json({message:"to many requests ,try again later"})
    }
    next()
  }catch(error){
    console.log("rate limit error",error)
    next(error);
  }
}

module.exports=rateLimiter;