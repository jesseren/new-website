import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'
import Navbar from './navbar'
import InfoBox from './infoBox'
import {coopDescriptions} from './descriptions'
import Icons from './icons'

function Career() {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: myRef.current,
                mouseControls: false,
                touchControls: false,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x3f82ff
            }))
        }
        return () => {
        if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return (
        <div ref={myRef} className='landing careerLanding'>
            <Navbar />
            <div className='career'>
                <div className='first'>
                    <InfoBox className='meta' company='Meta' link='https://about.meta.com/' position='Frontend Engineer Intern' imgurl='meta-logo copy.jpg' date='May 2022 - August 2022' description={coopDescriptions[5]}/>
                    <InfoBox className='tulip' company='Tulip' link='https://www.tulip.com/about-us/' position='Software Developer' imgurl='tulip.png' date='September - December 2021' description={coopDescriptions[0]}/>
                </div>
                <div className='second'>
                    <InfoBox className='polar' company='Polar' link='https://www.createwithpolar.com/solutions' position='Software Developer' imgurl='k.png' date='January - April 2021' description={coopDescriptions[1]}/>
                    <InfoBox className='tritonwear' company='Tritonwear' link='https://www.tritonwear.com' position='Software Engineer' imgurl='tritonwear.png' date='May - August 2020' description={coopDescriptions[2]}/>
                </div>
                <div className='second'>
                    <InfoBox className='economical' company='Economical' link='https://www.economical.com/en/home' position='Access Analyst' imgurl='economical.png' date='September - December 2019' description={coopDescriptions[3]}/>
                    <InfoBox className='uoft' company='UofT' link='https://www.utsc.utoronto.ca/home/utsc' position='Engineering Assistant' imgurl='uoft.png' date='January - April 2019' description={coopDescriptions[4]}/>
                </div>
            </div>
            <Icons />
        </div>
    )
}

export default Career
