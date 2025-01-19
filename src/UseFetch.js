 import { useState, useEffect } from "react";

 const useFetch = (url) =>{

      const [data,setData]= useState(null);
      const [isloading,setIsloading]= useState(false);
      
      useEffect (()=>{
        setIsloading(true)
        fetch(url )
        .then((res) =>{
          return res.json();
        }).then(data=> {
          //console.log(data);
          setData(data)
          setIsloading(false)
        });
      },[url]) ;
      return {data,isloading}
 }
 export default useFetch;