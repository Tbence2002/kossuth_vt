import React from 'react'
import "./footer.css";
import { AiTwotonePhone } from 'react-icons/ai'

function Footer() {
    return (
        <section>
            <div className='contact-container'>
                <h1>Vegye fel velünk a kapcsolatot!</h1>
                <div className='contact-box-container'>
                    <div className='contact-box'>
                        <div className='contact-header'>
                            <h3>Vadásztársaság</h3>
                        </div>
                        <div className='contact-phone'>
                            <i><AiTwotonePhone /></i><span>+11111111111</span>
                        </div>
                    </div>
                    <div className='contact-box'>
                        <div className='contact-header'>
                            <h3>Vezetéknév Keresztnév, Elnök</h3>
                        </div>
                        <div className='contact-phone'>
                            <i><AiTwotonePhone /></i><span>+11111111111</span>
                        </div>
                    </div>
                    <div className='contact-box'>
                        <div className='contact-header'>
                            <h3>Vezetéknév Keresztnév, Titkár</h3>
                        </div>
                        <div className='contact-phone'>
                            <i><AiTwotonePhone /></i><span>+11111111111</span>
                        </div>
                    </div>
                </div>
                <p>A weboldal szövegei, illetve némely képe egy meglévő oldalról származnak, amelyeket ráncfelvarrtam gyakorlás projektként.</p>
                <p>Az oldal elérhetősége: <a href="http://kossuthvadasztarsasag.hu/" target="_blank">http://kossuthvadasztarsasag.hu/</a></p>
            </div>
        </section>
    )
}

export default Footer