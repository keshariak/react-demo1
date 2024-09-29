import {useState} from "react"
function Counter(){
    const [num, setNum]= useState(0)
    
    function plus(){
       
        setNum(num+1)
        console.log(num)

    }
    return(
        <>
        <h1>{num}</h1>
        <button onClick={plus} >add</button>
        </>
    )

}
export default Counter