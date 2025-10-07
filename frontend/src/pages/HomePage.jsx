import React,{useState,useEffect} from 'react';
import Navbar from '../components/Navbar.jsx';
import RateLimited from '../components/RateLimted.jsx';
import NoteCard from '../components/NoteCard.jsx';
import api from '../lib/axios.js';
import toast from 'react-hot-toast';

function HomePage(){
  const [rateLimited,setRateLimited] =useState(false)
  const [notes,setNotes]=useState([])
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    const fetchNotes=async()=>{
      try{
        const res=await api.get("/notes")
        console.log(res.data)
        setNotes(res.data)
        setRateLimited(false)
      }catch(error){
        console.log("error");
        if(error.response.status===429){
          setRateLimited(true)
        }else{
          toast.error('Failes to Load Notes');
        }
      }finally{
        setLoading(false)
      }
    }
    fetchNotes()
  },[])

  return(
    <div className="min-h-screen">
      <Navbar />

      {rateLimited && <RateLimited />}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && <div className="text-center text-primary py-10">Loading notes...</div>}
        {notes.length===0 && <p className="flex justify-center" >No notes are Available</p>}
        {notes.length > 0 && !rateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note)=>(
              <NoteCard key={note._id} note={note} setNotes={setNotes}/>
            ))}
        </div>
        )}
      </div>
    </div>
  );
}
export default HomePage; 