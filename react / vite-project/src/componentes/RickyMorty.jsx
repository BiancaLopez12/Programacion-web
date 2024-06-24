import { useEffect } from "react";

export default function RickyMorty(){
    const [data, setData] = useState({})
 
     useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
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
       Objeto name:{data.name}
       id: {data.id}
      </h2>
          <p>results:{data.results}</p>
        </>
     }
    </>
    );
 
 }
 

