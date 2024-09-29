function Button({name}){
    var a=true;
    function print(){
        if(a){
            console.log("playing", name)
        } else
            console.log("pause", name)
    a=!a 
    }
    return (
        <button onClick={print} >{name}</button>
    )
}
export default Button;