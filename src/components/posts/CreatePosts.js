import React from 'react'
import "./FormStyle.css"
import { useState } from 'react';

const CreatePosts = (props) => {
  const [title,setTitle] = useState("");
  const [body,setBody] = useState("");
  const [url,setUrl] = useState("");
  const [author,setAuthor] = useState("");
  const HandelForm=(e)=>{
    e.preventDefault();
    const post={
      title:title ,body,Image:url,author
    };
    fetch("http://localhost:5555/posts",{
      method: "POST",
      headers :{"Content-type":"application/json"},
      body: JSON.stringify(post),
    }).then(()=>{
     // console.log("post mrigla")
      props.history.push("/")
    })
  }
  return (
    <section    >
        <h2> AJOUTER Client </h2>
        <div  className="flex"  style={{flexDirection:"column"}}>
        <form  id="Formstyle" className="flex" style={{flexDirection:"column"}}  onSubmit={HandelForm}>
            <label> NOM :  : </label>
            <input type="text" required
             value={title} onChange={(e)=>
              setTitle(e.target.value)}/><br/>
            <label> PHoto De client  : Url : </label>
            <input type="url"  required
             value={url} onChange={(e)=>
              setUrl(e.target.value)}/><br/>
            <label>  vILLE  : </label>
            <input  required  rows="10"
             value={body} onChange={(e)=>
              setBody(e.target.value)}></input><br/>
            <label> Niveau Scolaire :  : </label>

            <select 
            value={author} onChange={(e)=>
              setAuthor(e.target.value)}
              >
              <option value="Bac"> Bac</option><hr/>
              <option value="Bac+1"> Bac+1</option><hr/>
              <option value="Bac+2"> Bac+2</option><hr/>
              <option value="Bac+3"> Bac+3</option>

            </select><hr/>
            <button className='btn' type='submit'> Ajouter Client</button>

        </form>
       </div>
    </section>
  )
}

export default CreatePosts