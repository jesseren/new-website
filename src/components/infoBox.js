import {React, useState}  from 'react'
import ReactCardFlip from 'react-card-flip';

function InfoBox(props) {
    const [isFlipped, setIsFlipped] = useState(false)

    return (
        <div className='infoBox' onClick={() => setIsFlipped(!isFlipped)}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <div className={'front ' + props.className}>
                    <img src={props.imgurl} alt=''/>
                </div>
                <div className={'back ' + props.className}>
                    <h3>{props.position} <b><a href={props.link} target='_blank' rel='noopener noreferrer'>{' @' + props.company}</a></b></h3>
                    <p className='date'>{props.date}</p>
                    <ul>
                        {props.description.map((description) => 
                            <li>{description}</li>
                        )}
                    </ul>
                </div>
            </ReactCardFlip>
        </div>
    )
}

export default InfoBox