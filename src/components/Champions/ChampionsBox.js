import React, { useState } from 'react';

const ChampionsBox = ({ img, name, title, desc, baseStats }) => {
    const [isInfoShown, setIsInfoShown] = useState(false);

    const toggleInfo = () => {
        setIsInfoShown(!isInfoShown);
        console.log(baseStats);
    }

    return (
        <div className='champions__box champions__center champions__transition'>
            <img src={img} alt='championImg' className='champions__img'/>

            <div className={isInfoShown ? 'champions__box--info champions__column' : 'champions__hidden'}>
                <h2 className='champions__h2'>{title}</h2>

                <h3 className='champions__h3'>{desc}</h3>

                <div className='champions__stats champions__column'>
                    {
                        baseStats ?
                        baseStats.map(curr => 
                            <h4 key={Math.random() * 100000} className='champions__h4'>{curr[0]}: {curr[1]}</h4>
                        ) : 
                        <h4 className='champions__h4'>loading stats...</h4>
                    }
                </div>
            </div>

            <div className='champions__box--panel champions__column'>
                <h1 className='champions__h1'>{name}</h1>

                <button className='champions__btn champions__center champions__transition' onClick={toggleInfo}>
                    {
                        isInfoShown ?
                        'Hide details' : 
                        'Show details'
                    }
                </button>
            </div>
        </div>
    )
}

export default ChampionsBox;