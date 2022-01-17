import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'
import Navbar from './navbar'
import Icons from './icons'

function Landing() {
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
        <div ref={myRef} className='landing'>
            <Navbar />
            <div className='content'>
                <p>Hi, I'm Jesse Ren.</p>
                <p>An engineering student who loves coding, learning, and meeting new people!</p>
            </div>
            <Icons />
        </div>
    )
}

export default Landing