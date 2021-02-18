import React ,{useState,useEffect} from 'react';
import './App.css';

function App() {

  const [state, setstate] = useState();
  useEffect(() => {
   (async ()=>{
     let api =await fetch("/.netlify/functions/hello_world",{
       method:"post",
       body:JSON.stringify({name:"Hello Haseeb"})
     });
     let data=await api.json();
     console.log("CHECKER" , data)
      setstate(data.message);
           
   }


   )()
  }, [])
 
  return (
    <div className="App">
    
      <h1> {state} </h1>
       
      
   
      

    </div>
  );
}

export default App;
