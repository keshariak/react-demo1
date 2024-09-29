
import  "./video.css"
function Vedio({title,views,likes,channel, verfied, id, children}){
  // let channelName;
  // if(verfied){
  //   channelName=<p>{channel}✅</p>
  // }else{
  //    channelName=<p>{channel}</p>
  // }
    return <div className="container">
       
      <img className="img"  src={`https://source.unsplash.com/random/200x200?sig=${id}`}/>
      <h3>{title} </h3>
      <p>{channel}{verfied ?"✅" :null}</p>
      <p>{views} views<span>{likes} likes</span></p>
      <div>{children}</div>

    </div>   
  
}
export default Vedio;
