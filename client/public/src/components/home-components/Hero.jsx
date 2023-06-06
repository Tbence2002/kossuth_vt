import React from 'react'
import deerhero from '../../assets/deerhero.png'
import "./Home.css";
import { motion } from "framer-motion"

function Hero() {
    return (
        <>
            <div className='hero-container'>
                <motion.div className='hero-text'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.3 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    <h1>Kossuth <span>Vadásztársaság</span></h1>
                    <h2><span>Budapesttől</span> 250km-re</h2>
                    13000 hektár, főként mezőgazdasági valamint Tisza és Bodrog árterület.<br></br>
                    Apróvadas terület, jellemző vadfajok: mezei nyúl,<br></br> fácán, vizivad, őz, vaddisznó és váltóvadként a gímszarvas is.
                </motion.div>
                <motion.div className='hero-image'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.3 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    <img src={deerhero} alt="deer" />
                </motion.div>
            </div>
        </>
    )
}

export default Hero