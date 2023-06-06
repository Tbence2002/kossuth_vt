import React, { useState, useEffect } from 'react'
import "./Home.css";
import imageNews from '../../assets/IMG_5493.JPG'
import axios from 'axios'
import moment from 'moment'
import {motion} from 'framer-motion'

function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3002/news/getAllNews").then((response) => {
            setNews(response.data.listOfNews);
        })
    }, [])
    
    return (
        <motion.div className='news-container'>
            <h1>Aktuális híreink</h1>
            {news.map((newTopic) => {
                return <div className='news-container'>
                    <div className='news-main-container'>
                        <div className='news-main-content'>
                            <div className='news-main-header'>
                                <h2>{newTopic.temacim}</h2>
                                <span>{moment(newTopic.temadatum).format('YYYY.MM.DD.')}</span>
                            </div>
                            <p>{newTopic.temaleiras}</p>
                        </div>
                        <div className='news-main-image'>
                            <img src={imageNews} alt="hírek"/>
                        </div>

                    </div>
                </div>
            })}
        </motion.div>
    )
}

export default News