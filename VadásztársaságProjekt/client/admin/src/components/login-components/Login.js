import React, {useState, useEffect} from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom"
import "./Login.css"
import deerimage from '../../assets/deer.jpeg'

function Login() {
    axios.defaults.withCredentials = true
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const[lekert, setLekert] = useState(false);
    
    useEffect(() => {
        axios.get("http://localhost:3002/admin").then((response) => {
            if(response.data.loggedIn === true) { 
                navigate("/");
            }
        })
    })

    const handleLogin = () => {
        const data = {username: username, password: password};
        console.log(data)
        axios.post("http://localhost:3002/admin/login", data).then((response) => {
            if(response.data.error) {
                console.log("hiba")
            } else {
                navigate("/");
                setLekert(!lekert);
            }
        })

    }

  return (
    <div className='login-wrapper'>
    <div className='login-container'>
        <h1>Bejelentkezés</h1>
        <div className='login-boxes'>
        <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} required/>
        <label for="username">Felhasználónév</label>
        </div>
        <div className='login-boxes'>
        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} required/>
        <label for="password">Jelszó</label>
        </div>
        <div className='login-button'>
        <button onClick={handleLogin}>Bejelentkezés</button>
        </div>
    </div>
    <div className='login-image'>
        <img src={deerimage} alt="loginkép"/>
    </div>
    </div>
  )
}

export default Login