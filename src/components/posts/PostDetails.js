import React from 'react'
import useFetch from '../../UseFetch';

 
 

const  PostDetails = (props) => {
  let {data: post, isloading}= useFetch(
    "http://localhost:5555/posts")

  return (
    <article style={{    width:"80%",
        border:"solid teal 5px",margin:"20px",
        textAlign:"center"
        }}>
        <div   >
             <h1>  h1 pour Poste Details </h1>
           
        </div>
        <img   width='50%'
        height='30%' alt='' src="zaza3.jpg"></img>
        <p> ...... </p>
          <button> delete</button>



     </article>
  )
}

export default PostDetails