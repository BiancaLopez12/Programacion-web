import { useEffect } from "react";
import { useState } from "react";

export default function GetPosts(){
   const [data, setData] = useState({})

    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/posts/1')
       .then((response) => response.json())
       .then((responsedata)  => setData(responsedata));

    }, []);
    
   
   
    
   return (
   <> 
     {
       !data ? (
         <> 
         <p>Loaging... </p>
         </>
       ) : <>

      <h2>
       Objeto title:{data.title}
       id: {data.id}
      </h2>
          <p>Body:{data.body}</p>
        </>
     }
   
   </>
   );

}
