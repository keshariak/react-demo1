import Vedio from "./Components/video"
import Button from "./Components/button"
import Counter from "./Components/counter"
import "./App.css"

import vedioDB from "./data/vedio"
import { useState } from "react"

function App(){
  const [vedios, setVedios]= useState(vedioDB)
  return(
    <>
    <button onClick={()=>{

      setVedios(
        [ ...vedios,{ 
           verfied:false, 
           title:"JS Tutorial" ,
           likes:"12k" ,
           views:"25k" ,
           channel:"Coder Dost",
           id:vedios.length+1
         
         }])
    }}>add vedio</button>
    <div className="App">{
      
      vedios.map(vedio=><Vedio
        title={vedio.title} 
        likes={vedio.likes}
        views={vedio.views} 
        channel={vedio.channel} 
        verfied={vedio.verfied} id={vedio.id}>
          <Button name={vedio.title}></Button>
        </Vedio>
      )
      
     
      
    }  
    <Counter></Counter>
     
   
    </div>
  
    </>
  )
  
};
export default App;

