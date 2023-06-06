import React, { useEffect, useState } from 'react'
import CreateNews from '../components/news-components/CreateNews'
import axios from 'axios';
import ShowNews from '../components/news-components/ShowNews';
import Header from '../components/navbar/Header';

function News() {
    const [news, setNews] = useState([]);
    const [lekert, setLekert] = useState(false);
    
    useEffect(() => {
        axios.get("http://localhost:3002/news/getAllNews").then((response) => {
            setNews(response.data.listOfNews);
        })
    }, [!lekert])
    
    return (
        <div className='dp-flex'>
            <Header/>
            <div className='news-create-container'>
                <CreateNews lekert={lekert} setLekert={setLekert} />
                <div className='show-news-container'>
                    <div className='show-news'>
                        <div className='news-container'>
                            <h1><a id="news">Aktuális híreink</a></h1>
                            {news.map((newData, index)=> {
                                return  <ShowNews
                                key={index}
                                lekert={lekert}
                                setLekert={setLekert}
                                newData={newData}
                              />
                                
                            })}
                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News