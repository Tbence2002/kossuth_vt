import React from 'react'
import {Link} from 'react-router-dom'
import "./Header.css"
import {AiOutlineHome} from 'react-icons/ai'
import {BiNews} from 'react-icons/bi'
import {BsPeople} from 'react-icons/bs'

function Header() {
  return (
    <div className='header-container'>
        <header>
            <nav>
                <ul>
                  <div className='tooltip home-tooltip'>
                    <li className='home'><Link to="/"><AiOutlineHome/></Link></li>
                    <span>Kezdőlap</span>
                  </div>
                  <div className='tooltip news-tooltip'>
                    <li className='news'><Link to="/News"><BiNews/></Link></li>
                    <span>Hírek</span>
                  </div>
                  <div className='tooltip members-tooltip'>
                    <li className='members'><Link to="/Members"><BsPeople/></Link></li>
                    <span>Tagok</span>
                  </div>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header