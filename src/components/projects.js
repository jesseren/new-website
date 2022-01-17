import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'
import Navbar from './navbar'
import ProjectBox from './projectBox'
import {projectsDescriptions} from './descriptions'
import Icons from './icons'

function Projects(props) {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    const valineups = <p>The production build is located <a href='http://valineups.herokuapp.com/' target='_blank' rel='noopener noreferrer'>here</a>.</p>
    const spaceInvaders = <p>A video demo is located <a href='https://www.youtube.com/watch?v=ZdFEAYNoAao&ab_channel=JesseRen' target='_blank' rel='noopener noreferrer'>here</a>.</p>
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
        <div ref={myRef} className='landing projectLanding'>
            <Navbar />
            <div className='projects'>
                <div className='first'>
                    <ProjectBox description={projectsDescriptions[0]} imgurl='valineups.png' className='valineups' custom={valineups} github='https://github.com/billwang80/valineups-app'/>
                    <ProjectBox description={projectsDescriptions[1]} imgurl='feed_me.jpeg' className='feedme' github='https://github.com/stephhsu/feed-me'/>
                </div>
                <ProjectBox description={projectsDescriptions[2]} imgurl='spaceinvaders.png' className='spaceinvaders' custom={spaceInvaders} github='https://github.com/jesseren/SpaceInvaders'/>
            </div>
            <Icons />
        </div>
    )
}

export default Projects