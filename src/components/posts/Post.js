import { Link } from 'react-router-dom'
import React from 'react'

const  Post = ({post , handleDelete})=> {

 
  return (
    <div style={{    width:"60%",
        border:"solid teal 5px",margin:"20px",
        textAlign:"center"
        }}>
   <h1> l'image du client</h1>
        <img  style={{    width:"60%",
        border:"solid teal 5px",margin:"20px",
        textAlign:"center"
        }}
        width='50%'
        height='30%' src={post.image} alt='imagee'/>
        <h3 >le nom de client est : <h1> {post.title}</h1></h3>
        <h3>la ville du clint est  : <h1> {post.body}</h1>

        </h3>
        <div>le Niveau scolaire du client est : <h2> {post.author ? post.author : "nul"} </h2></div>
        
        <button onClick={() => handleDelete (post.id)}> Delete</button>

       </div>
  )
}

export default Post