import React from 'react'
import "./About.css"
import introterulet from '../../assets/introterulet.png'
import { motion } from 'framer-motion'

function Introduction() {
    return (
        <section className='all-intro'>
            <motion.div className='intro-first-container'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.3 }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}>
                <div className='intro-box'>
                    <h1>Bemutatkozás</h1>
                    <p>Vadászterületünk Budapesttől 250 km-re keletre a Zemplén hegység lábánál a Bodrog folyó mellett található. A vadászterület nagysága 13000 ha, főként mezőgazdasági valamint  Bodrog árterület</p>
                    <p>Apróvadas terület, jellemző vadfajok: mezei nyúl, fácán, vízi vad, őz, vaddisznó és váltóvadként a gímszarvas is. A fácánállomány szinten tartását félvad tenyésztéssel rendszeresen végezzük. A bakok minőségét tekintve közepes, de minden évben tartogat számunkra különleges  /rendellenes, parókás/  trófeákat is.</p>
                    <p>Vadászterületünk Budapesttől 250 km-re keletre a Zemplén hegység lábánál a Bodrog folyó mellett található. A vadászterület nagysága 13000 ha, főként mezőgazdasági valamint  Bodrog árterület</p>
                    <p>Apróvadas terület, jellemző vadfajok: mezei nyúl, fácán, vízi vad, őz, vaddisznó és váltóvadként a gímszarvas is. A fácánállomány szinten tartását félvad tenyésztéssel rendszeresen végezzük. A bakok minőségét tekintve közepes, de minden évben tartogat számunkra különleges  /rendellenes, parókás/  trófeákat is.</p>
                    <p>A vendégvadászok egyéni kíséréséről a megfelelő szakszemélyzet gondoskodik. Vadászterületünkön több vendéglátóhely is biztosítja a vadászok által elvárható szintű és minőségű elhelyezést,  vendéglátást. A vadászterület nem csak vadászati, hanem turisztikai szempontból is kiemelkedő. Kiváló lehetőségek vannak akár a nem vadászó barátok, családtagok számára is a térségben. /horgászat, lovaglás, Rákóczi vár látogatás, pincelátogatás, gyógyfűrdőzés, kerékpározás, védett madárfajok megfigyelése "parlagi sas, fekete gólya"/  stb.
                        Örömünkre szolgálna ha Ön érdeklődne a sárospataki Kossuth vadásztársaság területén folytatható vadászatok iránt, amihez előre is vadászszerencsét kívánok</p>
                </div>
                <div className='intro-box-image'>
                    <img src={introterulet} alt="terület"/>
                </div>
            </motion.div>
            <motion.div className='intro-second-container'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.3 }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}>
                <div className='intro-box'>
                    <p>A terület száma a megyei vadászati térképen: 05-659810-1-4-1. A vadászterület nagysága nettó 12911 ha, közepes vadeltartó képességű, a Bodrogköz területén található.</p>
                    <p>A vadászterület határleírása: Kiinduló pont a Bodrog folyó az Oroly-erdő sarkától a földút a Holt-Bodrog töltéséig, majd a töltés a gátőrházig. A gátőrháztól a Vajdácskára bevezető út, át Vajdácskán, tovább a Nyerges tanyai üzemi úton, át a Nyerges tanyán, déli irányba tovább a földúton a mázsaház után balra tartó földútig, ezen az úton a gyertyállói legelőig, jobbra a fasor a vajdácskai csatornáig tovább a csatorna a Tiszakarádi főcsatornáig, a főcsatorna a megyehatárig (nagy erdő D-i sarka), innen a megyehatáron futó csatorna a remetei feljáróútig, onnan a Györgytarló-Sárospatak közút a Kenézlő-Sárospatak közútig, onnan jobbra a közúton a Törökéri főcsatornáig. Innen a törökéri főcsatorna régi ága a szivattyútelepi töltésig. Jobbra a töltés a zsadányi járóig, a járótól balra a Bodrogig vezető földút, onnan a Bodrog folyó a kiindulási pontig.</p>
                </div>
            </motion.div>
        </section>
    )
}

export default Introduction