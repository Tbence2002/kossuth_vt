import React, { useState } from 'react'
import "./News.css"
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { DatePicker} from 'antd'
import {motion} from 'framer-motion'

function CreateNews({lekert, setLekert, imageList, setImageList}) {
    const [topicTitle, setTopicTitle] = useState("");
    const [topicDate, setTopicDate] = useState("");
    const [topicDescription, setTopicDescription] = useState("");

    const handleSUbmit = (event) => {
        event.preventDefault();
        if (!topicDate || !topicTitle || !topicDescription) {
            toast.error("Ne hagyjon üres mezőket!")
            return;
        }
        axios.post("http://localhost:3002/news/News",
            { news: { temacim: topicTitle, temadatum: topicDate, temaleiras: topicDescription } }).then((response) => {
                if (response.data.error) {
                    console.log("Sikertelen")
                } else {
                    console.log("Siker")
                    setLekert(!lekert)
                }
            })
            toast.success("Sikeres közzététel!")
            
    }
    const onChange = (date, dateString) => {
        setTopicDate(date, dateString);
      };

    return (
        <motion.div className='create-news-container'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.3 }}
        variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
        }}>
            <div className='create-news'>
                <div className='create-box-infos'>
                    <h1>Megoszthat híreket, információkat a felhasználókkal!</h1>
                    <p><a href="#news">Ide</a> kattintva megtekintheti a már hozzáadott híreket. </p>
                    <div className='arrow-down'>
                        <i>↓</i>
                        <p>Hírek megtekintése</p>
                    </div>
                </div>
                <div className='create-box-wrapper'>
                    <form>
                        <div className='create-box'>
                            <div className='boxes'>
                                <input type="text" onChange={(e) => setTopicTitle(e.target.value)} name="TopicTitle" required></input>
                                <label for="TopicTitle">Téma címe:</label>
                            </div>
                            <div className='boxes'>
                                <DatePicker placeholder='Dátum kiválasztása' onChange={onChange}/>
                            </div>
                            <div className='boxes topicdescription'>
                                <textarea rows="8" cols="60" maxlength='1000' onChange={(e) => setTopicDescription(e.target.value)} required>
                                </textarea>
                                <label for="TopicDescription">Részletes leírás:</label>
                            </div>
                            <div className='btn'>
                                <button onClick={handleSUbmit}>Közzététel</button>
                            </div>
                            <Toaster
                                    position="top-center"
                                    reverseOrder={false}
                                />
                        </div>
                    </form>
                </div>

            </div>
        </motion.div>
    )
}

export default CreateNews