import React,{useEffect, useState} from 'react'
import NewMembers from '../components/members-components/NewMembers'
import axios from 'axios'
import ShowMembers from '../components/members-components/ShowMembers';
import Header from '../components/navbar/Header';

function Members() {
  const [members, setMembers] = useState([]);
  const [lekert, setLekert] = useState(false);

  useEffect(()=> {
    axios.get("http://localhost:3002/members/getAllMembers").then((response)=> {
      setMembers(response.data.listOfMembers);
    })
  },[!lekert])

  return (
    <div className='dp-flex'>
      <Header/>
    <div className='members-container'>
      <NewMembers lekert={lekert} setLekert={setLekert}/>
    </div>
    <div className='show-members-container'>
    <div className='members-content-box'>
    {members.map((member)=> {
      return <ShowMembers member={member} lekert={lekert} setLekert={setLekert}/>
    })}
    </div>
    </div>
    </div>
  )
}

export default Members