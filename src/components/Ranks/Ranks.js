import React from 'react';
import '../../Base-Styling.css';
import './Ranks.css';
import { rankEmblems } from '../../RanksImages.js';
import { rankEmblemNames } from '../../RanksImages.js';

const Ranks = () => {
    return (
        <div className='ranks'>
            {
                rankEmblems.map((curr,index) => 
                    <div className='ranks__item'>
                        <img src={rankEmblems[index]} alt='rank' className='ranks__emblem'/>

                        <h1 className='ranks__h1'>{rankEmblemNames[index]}</h1>
                    </div>
                )
            }
        </div>
    )
}

export default Ranks;