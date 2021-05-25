import React from 'react';
import './Tutorials.css';

const TutorialsBox = ({ img, title, url }) => {
    return (
        <div className='tutorials__box'>
            <img src={img} alt='beginner tutorial' className='tutorials__img'/>

            <div className='tutorials__box--text tutorials__column'>
                <h3 className='tutorials__h3'>{title}</h3>
            
                <a href={url} className='tutorials__link'>Watch Now</a>
            </div>
        </div>
    )
}

export default TutorialsBox;