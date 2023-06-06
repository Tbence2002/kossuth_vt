import React, { useState } from 'react'
import "./Members.css"
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import {motion} from 'framer-motion'

function NewMembers({setLekert, lekert}) {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmit = () => {
        if(name === "" || position === "" || phoneNumber === "") {
            toast.error("Ne hagyjon üres mezőt!");
            return;
        }
        axios.post("http://localhost:3002/members/Members",
            { members: { name: name, position: position, phonenumber: phoneNumber } }).then((response) => {
                if (response.data.error) {
                    console.log("Hiba");
                } else {
                    console.log("Siker");
                    setLekert(!lekert)
                }
            })
        toast.success('Sikeres hozzáadás!');
    }

    return (
        <motion.div className='members-container'>
            <motion.div className='members-content'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 }
            }}>
                <div className='members-info'>
                    <h1>Megadhatja a vadásztársaság tagjait!</h1>
                    <div className='members-info-list'>
                    <AiOutlinePlus/>
                    <p>Személy hozzáadása.</p>
                    </div>
                    <div className='members-info-list'>
                    <AiOutlineMinus/>
                    <p>Tag törlése.</p>
                    </div>
                </div>
                <div className='add-members'>
                    <div className='boxes'>
                        <input type='text' onChange={(e) => setName(e.target.value)} name="name" required />
                        <label for="name">Név</label>
                    </div>
                    <div className='boxes'>
                        <input tpe="text" onChange={(e) => setPosition(e.target.value)} name="position" required />
                        <label for="position">Tisztség</label>
                    </div>
                    <div className='boxes'>
                        <input type="number" onChange={(e) => setPhoneNumber(e.target.value)} name="phonenumber" required />
                        <label for="phonenumber">Telefonszám</label>
                    </div>
                    <div className='btn'>
                        <button onClick={handleSubmit}>Hozzáadás</button>
                        <Toaster
                            position="top-center"
                            reverseOrder={false}
                        />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default NewMembers