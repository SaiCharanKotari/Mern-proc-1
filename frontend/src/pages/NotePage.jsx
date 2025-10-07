import React,{useState,useEffect} from 'react';
import {useNavigate,useParams} from 'react-router';
import {toast} from 'react-hot-toast';


function NotePage(){
  const [note,setNote]=useState(null);
  const [loading,setLoading]=useState(true);
  const [saving,setSaving]=useState(false);

  const nav=useNavigate();
  const {id}=useParams();

  useEffect(()=>{
    const fetchNode=async()=>{
      try{
        const res=await api.get(`/notes/${id}`);
        setNote(res.data)
      }catch(error){
        toast.error("Failed to fetch");
      }finally{
        set
      }
    }
  })

  return(
    <div>
      <h1 className="flex h-screen justify-center items-center">Skipped this one cause i want to start my own</h1>
    </div>
  );
}
export default NotePage;