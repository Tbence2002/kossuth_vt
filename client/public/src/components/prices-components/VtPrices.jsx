import React from 'react'
import "./Prices.css"
import { motion } from 'framer-motion'

function VtPrices() {
    return (
        <>
            <motion.div className='prices-ozbak-container'>
                <motion.div className='prices-ozbak'>
                    <h1>Őzbak árlista</h1>
                    <motion.div className='prices-ozbak-arlista'>
                        <div className='prices-ozbak-box'>
                            <h2>199gr-ig</h2>
                            <h3>80€</h3>
                        </div>
                        <div className='prices-ozbak-box'>
                            <h2>200-249gr-ig</h2>
                            <h3>120€</h3>
                        </div>
                        <div className='prices-ozbak-box'>
                            <h2>250-299gr-ig</h2>
                            <h3>120€</h3>
                            <h4>gr/Eu: 1,8€</h4>
                        </div>
                        <div className='prices-ozbak-box'>
                            <h2>300-349gr-ig</h2>
                            <h3>210€</h3>
                            <h4>gr/Eu: 3,2€</h4>
                        </div>
                        <div className='prices-ozbak-box'>
                            <h2>350-399gr-ig</h2>
                            <h3>370€</h3>
                            <h4>gr/Eu: 7,3€</h4>
                        </div>
                        <div className='prices-ozbak-box'>
                            <h2>400-449gr-ig</h2>
                            <h3>735€</h3>
                            <h4>gr/Eu: 9,5€</h4>
                        </div>
                        <div className='prices-ozbak-box'>
                            <h2>450-499gr-ig</h2>
                            <h3>1210€</h3>
                            <h4>gr/Eu: 23€</h4>
                        </div>
                        <div className='prices-ozbak-box'>
                            <h2>500-</h2>
                            <h3>2360€</h3>
                            <h4>gr/Eu: 28€</h4>
                        </div>
                    </motion.div>
                    <div className='prices-title'>
                        <p> Az elszámolás alapja: a vadászati hatóság trófea bírálaton mért 24 órás tömege. </p>
                        <p>Sebzés díja: A hivatásos vadász által becsült trófea súly 50%-a. </p>
                        <p>Költségek: Trófea bírálati díj 2.500,-Ft normál, érmes trófea esetén 5.000,-Ft melynek költségét kedvezmény formájában a Vadásztársaság vállalja.</p>
                        <p>Vadászatok szervezési- kisérési díja: 25,-EU/ alkalom ( Reggeli és az esti kimenetel külön számítandó.)</p>
                        <p>Érdeklődni Név Név vadászmesternél lehet. Tel.: +36303334444</p>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div className='prices-szarvas-container'>
                <motion.div className='prices-szarvas'>
                    <h1>Gímszarvas árlista</h1>
                    <div className='prices-szarvas-arlista'>
                        <div className='prices-szarvas-box'>
                            <h2>0-1,99 kg-ig</h2>
                            <h3>100€</h3>
                        </div>
                        <div className='prices-szarvas-box'>
                            <h2>2,00-2,99 kg-ig</h2>
                            <h3>100€</h3>
                            <h4>dkg/Eu: 1,0€</h4>
                        </div>
                        <div className='prices-szarvas-box'>
                            <h2>3,00-3,99 kg-ig</h2>
                            <h3>200€</h3>
                            <h4>dkg/Eu: 1,5€</h4>
                        </div>
                        <div className='prices-szarvas-box'>
                            <h2>4,00-4,99 kg-ig</h2>
                            <h3>350€</h3>
                            <h4>dkg/Eu: 2,0€</h4>
                        </div>
                        <div className='prices-szarvas-box'>
                            <h2>5,00-5,49 kg-ig</h2>
                            <h3>550€</h3>
                            <h4>dkg/Eu: 2,5€</h4>
                        </div>
                        <div className='prices-szarvas-box'>
                            <h2>5,50-5,99 kg-ig</h2>
                            <h3>675€</h3>
                            <h4>gr/Eu: 3,2€</h4>
                        </div>
                        <div className='prices-szarvas-box'>
                            <h2>6,00-6,49 kg-ig</h2>
                            <h3>835€</h3>
                            <h4>gr/Eu: 3,9€</h4>
                        </div>
                        <div className='prices-szarvas-box'>
                            <h2>6,50-6,99 kg-ig</h2>
                            <h3>1030€</h3>
                            <h4>gr/Eu: 4,6€</h4>
                        </div>
                        <div className='prices-szarvas-box'>
                            <h2>7,00-7,49 kg-ig</h2>
                            <h3>1260€</h3>
                            <h4>gr/Eu: 5,3€</h4>
                        </div>
                        <div className='prices-szarvas-box'>
                            <h2>7,50-7,99 kg-ig</h2>
                            <h3>1525€</h3>
                            <h4>gr/Eu: 6,0€</h4>
                        </div>
                        <div className='prices-szarvas-box'>
                            <h2>8,00-8,49 kg-ig</h2>
                            <h3>1825€</h3>
                            <h4>gr/Eu: 7,0€</h4>
                        </div>
                        <div className='prices-szarvas-box'>
                            <h2>8,50-8,99 kg-ig</h2>
                            <h3>2175€</h3>
                            <h4>gr/Eu: 8,5€</h4>
                        </div>
                        <div className='prices-szarvas-box'>
                            <h2>9,00-9,49 kg-ig</h2>
                            <h3>2600€</h3>
                            <h4>gr/Eu: 10,0€</h4>
                        </div>
                        <div className='prices-szarvas-box'>
                            <h2>9,50-9,99 kg-ig</h2>
                            <h3>3100€</h3>
                            <h4>gr/Eu: 12,0€</h4>
                        </div>
                        <div className='prices-szarvas-box'>
                            <h2>10,00-10,49 kg-ig</h2>
                            <h3>3700€</h3>
                            <h4>gr/Eu: 16,0€</h4>
                        </div>
                        <div className='prices-szarvas-box'>
                            <h2>10,50- kg-tól </h2>
                            <h3>4500€</h3>
                            <h4>gr/Eu: 21,0€</h4>
                        </div>
                    </div>
                    <div className='prices-title'>
                        <p>Az elszámolás alapja: a vadászati hatóság trófeabírálaton mért 24 órás tömege</p>
                        <p>Sebzés díja: A hivatásos vadász által becsült trófea súly 50%-a.</p>
                        <p>Költségek: Trófeabírálati díj 2.500,- Ft normál, érmes trófea esetén 5.000,- Ft melynek költségét</p>
                        <p>kedvezmény formájában a Vadásztársaság vállalja.</p>
                        <p>Vadászatok szervezési-kisérési díja: 25,- EU/alkalom (REGGELI ÉS AZ ESTI KIMENETEL KÜLÖN SZÁMÍTANDÓ)</p>
                        <p>Ünő 100 Euro</p>
                        <p>Sebzés 60Euro</p>
                    </div>
                </motion.div>
            </motion.div>
        </>
    )
}

export default VtPrices