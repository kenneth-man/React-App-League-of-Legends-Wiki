import React, { useContext } from 'react';
import '../../Base-Styling.css';
import './Champions.css';
import { DataContext } from '../../DataContext.js';
import ChampionsBox from './ChampionsBox.js';
import spinner from '../../res/spinner.gif';

const Champions = () => {
    const { champions } = useContext(DataContext);

    return (
        <div className='champions champions__row'>
            {
                champions ? 
                champions.map((curr, index) => 
                    <ChampionsBox 
                        key={Math.random() * 1000000}
                        img={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${curr[0]}_0.jpg`}
                        name={curr[0]}
                        title={curr[1].title}
                        desc={curr[1].blurb}
                        baseStats={Object.entries(curr[1].stats)}
                    />
                ) :
                <img src={spinner} alt='spinner' className='spinner'/>
            }
        </div>
    )
}

export default Champions;