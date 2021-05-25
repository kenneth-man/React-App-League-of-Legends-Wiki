import React, { useContext } from 'react';
import '../../Base-Styling.css';
import './Items.css';
import { DataContext } from '../../DataContext';
import spinner from '../../res/spinner.gif';

const Items = () => {
    const { items } = useContext(DataContext);

    //Line 20: 'curr[1].description' from the api has html tags in the value of the 'description' property; removing them to display only text
    return (
        <div className='items'>
            {
                items ?
                items.map(curr => 
                    <div className='items__box' key={Math.random() * 100000}>
                        <img src={`http://ddragon.leagueoflegends.com/cdn/11.10.1/img/item/${curr['0']}.png`} alt='item' className='items__img'/>
                        <h1 className='items__h1'>{curr[1].name}</h1>
                        <h2 className='items__h2'>{curr[1].gold.base}g</h2>
                        
                        <div className='items__desc'>
                            <h2 className='items__h2'>{(curr[1].description).replace( /(<([^>]+)>)/ig, '')}</h2>
                        </div>
                    </div>
                ) :
                <img src={spinner} alt='spinner' className='spinner'/>
            }
        </div>
    )
}

export default Items;