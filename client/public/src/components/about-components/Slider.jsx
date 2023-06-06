import React from 'react'
import { Carousel } from 'antd';
import introbodrog from '../../assets/introbodrog.JPG'
import { motion } from 'framer-motion'

function Slider() {
  return (
    <motion.div className='slider-container'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}>
      <Carousel autoplay>
        <div className='slider-elements'>
          <img src={introbodrog} alt="slider" />
          <h1>Hatalmas terület</h1>
        </div>
        <div className='slider-elements'>
          <img src={introbodrog} alt="slider" />
          <h1>Csodás látvány</h1>
        </div>
        <div className='slider-elements'>
          <img src={introbodrog} alt="slider" />
          <h1>Sokszínű vadállomány</h1>
        </div>
        <div className='slider-elements'>
          <img src={introbodrog} alt="slider" />
          <h1>Bodrog folyó szívében</h1>
        </div>
      </Carousel>
    </motion.div>
  )
}

export default Slider