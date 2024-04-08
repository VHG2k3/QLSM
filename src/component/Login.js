import React,{useEffect, useState} from 'react'
import '../App.css';
import axios from '../api/apixm'
import { useNavigate } from 'react-router-dom';



function Login() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
  
    const [listAccounts, setListAccounts] = useState([]);
    const getAllUser =async () =>{
      let response = await axios.get("accounts")
      setListAccounts(response.data)
      console.log("Object api categories:", listAccounts);
    }
    useEffect(()=>{
        getAllUser();
    },[userName,password])
    const navigate = useNavigate()
    const handleLogin=  (event)=>{
        event.preventDefault();
        console.log("username:",userName)
        console.log("Password:",password)
        if(userName==="" || password===""){
          alert("Tên đăng nhập hoặc mặt khẩu không được để trống!")
        }
        else{
            let checkLogin = false
            for(let i=0; i<listAccounts.length; i++){
                if(listAccounts[i].userName===userName && listAccounts[i].password===password){
                    console.log("true")
                    checkLogin = true
                    break
                }
            }
            if(checkLogin===false){
                alert("Tên đăng nhập hoặc mật khẩu sai, vui lòng nhập lại")
            }
            else{
                alert("Đăng nhập thành công!");
                navigate("/home");
            }
        }
    }
    return (
      <div className="Login-Form">
        <div className="body" />
        <div className="grad" />
        <div className="bg-color">
        <div className="header">
          <div>
            Nội Thất<span> GTL</span>
          </div>
        </div>
        <br />
        <div className="login">
          <input type="text" placeholder="Tên đăng nhập" name="username" value={userName} onChange={(ev)=>setUserName(ev.target.value)}/>
          <br />
          <input type="password" placeholder="Mật khẩu" name="password" value={password} onChange={(ev)=>setPassword(ev.target.value)}/>
          <br />
          <input type="button" defaultValue="Đăng Nhập" onClick={handleLogin}/>
        </div>
        </div>
       
      </div>
    );
}

export default Login