import React from 'react'
import "./Members.css"
import {MdDelete} from 'react-icons/md'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

function ShowMembers({member, setLekert, lekert}) {

    const handleDelete = (id)=> {
        axios.delete(`http://localhost:3002/members/Members/${id}`).then((response)=> {
        setLekert(!lekert)
        toast.success("Sikeres törlés!")
        })
    }

  return (
        <div className='members-box'>
            <div className='members-datas'>
                <h2>{member.name}</h2>
                <h3>{member.position}</h3>
                <p>{member.phonenumber}</p>
            </div>
            <div className='members-options'>
                <div className='members-delete'>
                    <MdDelete/>
                    <p onClick={()=> handleDelete(member.id)}>Törlés</p>
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />
                </div>
            </div>
        </div>
  )
}

export default ShowMembers