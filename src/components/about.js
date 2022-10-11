import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'
import Navbar from './navbar'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Icons from './icons'

function About() {
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
        <div ref={myRef} className='landing aboutLanding'>
            <Navbar />
            <div className='about'>
                <img src='me1.jpg' alt='Jesse Ren'/>
                <div className='aboutText'>
                    <p>I am currently enrolled in my 4th year of Environmental Engineering at the University of Waterloo.</p>
                    <p>While I am concerned about environmental issues and sustainability, I also have
                    a passion for software development and find coding to be an enjoyable application of the engineering
                    problem-solving skills I've obtained in university.</p>
                    <p>On my free time I enjoy learning new development tools, playing softball and listening to Bangtan Sonyeondan.</p> 
                    <p>Feel free to <a href = "mailto:jesse.ren@uwaterloo.ca" target="_top"><u>reach out</u></a> if you'd like to talk or get to know me better!</p>
                </div>
            </div>
            <Icons />
        </div>
    )
}

export default About