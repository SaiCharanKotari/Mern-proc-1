import { ArrowLeftIcon } from 'lucide-react';
import React,{useState,useEffect} from 'react';
import {Link,useNavigate} from 'react-router';
import toast from 'react-hot-toast';
import api from '../lib/axios.js';

function CreatePage(){
  const [title,setTitle]=useState("");
  const [content,setContent]=useState("");
  const [loading,setLoading]=useState(false);
  const nav=useNavigate();

  async function handleSubmit(event){
    event.preventDefault();

    if(!title.trim() || !content.trim()){
      toast.error("All fields are required");
      return
    }
    setLoading(true);
    try{
      await api.post(`/notes`,{title,content})
      toast.success("Note Created Successfully");
      nav("/");
    }catch(error){
      if(error.response.status===429){
        toast.error("Slow down! you're creating notes too fast",{
          duration:4000,
          icon:"💀",
        })
      }else{
        toast.error("Failed to create Note")
      }
    }
    finally{
      setLoading(false)
    }
  }
  function textInput(){
    setTitle(event.target.value);
  }
  function contentInput(){
    setContent(event.target.value);
  }

  return(
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
          <ArrowLeftIcon className="size-5" />
          Back to Notes
          </Link>
          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Create new Note</h2>
              <form onSubmit={()=>handleSubmit(event)} >
                <div className="form-control mb-4">
                  <label className="label mr-5">
                    <span className="label-text">Title</span>
                  </label>
                  <input type="text" className="input input-bordered" placeholder="add your Title"
                  onChange={textInput} />
                </div>
                <div className="form-control mb-4">
                  <label className="label mr-5">
                    <span className="label-text">Content</span>
                  </label>
                  <textarea type="text" className="textarea textarea-borderd" placeholder="add your Content"
                  onChange={contentInput} />
                </div>
                <div className="card-actions justify-end">
                  <button type="submit" className="btn btn-primary" disabled={loading} >
                    {loading ? "Creating...":"Create Note"}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePage;