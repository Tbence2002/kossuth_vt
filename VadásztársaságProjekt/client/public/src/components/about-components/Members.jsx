import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'

function Members() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3002/members/getAllMembers").then((response) => {
            setMembers(response.data.listOfMembers);
        })
    }, [])

    return (
        <motion.div className='members-container'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 }
            }}>
            <h1>Tagjaink</h1>
            <div className='members-content'>
                {members.map((member) => {
                    return <div className='members-box'>
                        <div className='members-datas'>
                            <h2>{member.name}</h2>
                            <h3>{member.position}</h3>
                            <p>{member.phonenumber}</p>
                        </div>
                    </div>
                })}
            </div>
        </motion.div>
    )
}

export default Members