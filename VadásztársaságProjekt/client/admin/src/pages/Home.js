import React, { useEffect, useState } from 'react'
import MyGallery from '../components/home-components/MyGallery'
import "../components/home-components/Home.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Header from "../components/navbar/Header";

function Home() {
  const [admin, setAdmin] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3002/admin").then((response) => {
      if (response.data.loggedIn === false) {
        navigate("/login");
      }
    })
  })

  useEffect(()=> {
    axios.get("http://localhost:3002/admin/getAdmins").then((response)=> {
      setAdmin(response.data.listOfAdmins);
    })
  },[])

  return (
    <div className='dp-flex'>
      <Header />
      <div className='home-container'>
        {admin.map((admins)=> {
          return <h1>Üdvözöllek, {admins.username}!</h1>
        })}
        <MyGallery />
      </div>
    </div>
  )
}

export default Home