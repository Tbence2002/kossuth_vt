import React from 'react'
import axios from 'axios'
import moment from 'moment';
import { BsTrash } from 'react-icons/bs'
import toast, { Toaster } from 'react-hot-toast';
import imageNews from '../../assets/IMG_5493.JPG'

function ShowNews({ newData, lekert, setLekert, image}) {
    
    const handleDelete = (id) => {
        axios.delete(`http://localhost:3002/news/News/${id}`).then((response) => {
            setLekert(!lekert)
            toast.success("Sikeres törlés!")
        })
    }
    
    return (
        <div className='news-container'>
            <div className='news-main-container'>
                <div className='news-main-content'>
                    <div className='news-main-header'>
                        <h2>{newData.temacim}</h2>
                        <span>{moment(newData.temadatum).format('YYYY.MM.DD.')}</span>
                        <span onClick={() => handleDelete(newData.id)}>{<BsTrash />}</span>
                        <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />
                    </div>
                    <p>{newData.temaleiras}</p>
                </div>
                <div className='news-main-image'>
                    <img src={imageNews} alt="kép"/>
                </div>
            </div>
        </div>

    )
}

export default ShowNews