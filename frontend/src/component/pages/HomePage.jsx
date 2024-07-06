import axios from "../axios";

export function HomePage(){
  function attendance(){
    const username = "danish"
    const date = new Date();
    axios.post("/attendance",{
      username,
      date
    })
   console.log(username,date)
  }
   return (
    <div>
<button onClick={attendance}>signin </button >
    </div>
  ) 
}
