import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";

export function Register() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone] =useState("")
    const headingText = "Sign In";
    const description = "Enter your credentials to access your account"

    return (
        <div>
            <SigninCard heading={headingText} desc={description} 
            username={username} setUsername={setUsername} 
            password={password} setPassword={setPassword}
            email={email} setEmail={setEmail}
            phone={phone} setPhone={setPhone}
             />
        </div>
    )
}

const SigninCard = ({ heading, desc, username, password, setUsername, setPassword, email, setEmail, phone, setPhone }) => {
  const navigate = useNavigate()

    const handleSignIn = () => {
        if (username=="" || password=="" || email=="" || phone==""){
            alert("email or password cannot be empty")
            return
        }

        axios.post("/signup", {
            username: username,
            password: password,
            email:email,
            phone:phone
        })
        .then(response => {
            if(response){
                const token = response.data.token;
                const userId = response.data.userId;
                localStorage.setItem("token",token);
                localStorage.setItem("userId",userId);
                alert("Login")
                navigate("/dashboard")
            }
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("There was an error signing up!", error);
            }
        });
    };
    return ( <div>
     <div className="bg-slate-300 flex flex-col justify-center items-center h-screen">
        <div className="bg-white p-4 w-80 rounded-lg border-black">
        <div className="text-3xl font-bold text-center p-4">{heading}</div>
        <div className="text-center" >{desc}</div>
        <div className="p-4 rounded-lg font-bold" >
           
        <div>username</div>
            <div className="mt-2 mb-2" > <input type="text" value={username} placeholder="username" onChange={(e)=>setUsername(e.target.value)} /> </div>
            <div>Password</div>
            <div className="mt-2 mb-2" > <input type="password" value={password} placeholder="password" onChange={(e)=>setPassword(e.target.value)} /> </div>
            <div>Email</div>
            <div className="mt-2 mb-2" > <input type="text" value={email} placeholder="johndoe@example.com" onChange={(e)=>setEmail(e.target.value)} /> </div>
            <div>Phone no</div>
            <div className="mt-2 mb-2" > <input type="password" value={phone} placeholder="phone no" onChange={(e)=>setPhone(e.target.value)} /> </div>

        </div>
        <button className="rounded-lg bg-green-500 text-white font-bold text-center cursor-pointer p-2" onClick={handleSignIn} >Sign In</button>
        <div className="m-2"> Don't have an account? <span className="underline m-2 cursor-pointer" onClick={()=>{
            navigate("/signup")
        }} >Sign Up</span></div>
    </div>
    </div>
    </div>
)}