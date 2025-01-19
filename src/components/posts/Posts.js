import { useState, useEffect } from 'react';

import useFetch from '../../UseFetch';
import Post from './Post'
function Posts() {
 
let {data:posts, isloading}= useFetch("http://localhost:5555/posts")
  
  
  const handleDelete = (id)=>{
   let curPosts=[...posts];
   let newposts =curPosts.filter(post =>post.id !== id)
   //setPosts(newposts);
  }
  return (
    <section className='posts'>
    
    { posts ? posts.map((post) => (
   
      <Post key={post.id}  post={post} handleDelete={handleDelete}/> 
    )) : "no post hayati"}
    
    
     {/* 
     
     <Post/> 
       <Post/> 
         <Post/> */}
     </section>
  )

}

export default Posts