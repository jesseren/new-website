import {React, useState}  from 'react'
import ReactCardFlip from 'react-card-flip';

function ProjectBox(props) {
    const [isFlipped, setIsFlipped] = useState(false)

    return (
        <div className='infoBox' onClick={() => setIsFlipped(!isFlipped)}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <img src={props.imgurl} alt=''/>
                <div className={'back ' + props.className}>
                    {props.description.map((description) => 
                        <p>{description}</p>
                    )}
                    {props.custom}
                    <div className='git'>
                        <a href={props.github} target='_blank' rel='noopener noreferrer'>Github</a>
                    </div>
                </div>
            </ReactCardFlip>
        </div>
    )
}

export default ProjectBox