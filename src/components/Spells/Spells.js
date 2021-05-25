import React, { useContext } from 'react';
import '../../Base-Styling.css';
import './Spells.css';
import { DataContext } from '../../DataContext';
import spinner from '../../res/spinner.gif';

const Spells = () => {
    const { spells } = useContext(DataContext);

    return (
        <div className='spells'>
            {
                //'useState() is async, so need to check if state has been update yet, if not, show a loading spinner
                spells ? 
                spells.map(curr => 
                    <div key={Math.random() * 1000000} className='spells__cont'>
                        <div className='spells__cont--left'>
                            <img src={`http://ddragon.leagueoflegends.com/cdn/11.10.1/img/spell/${curr['0']}.png`} alt='full' className='spells__img'/>
                        </div>

                        <div className='spells__cont--right'>
                            <h1 className='spells__h1'>
                                <span>Name:</span> 
                                &nbsp; 
                                {curr['1'].name}
                            </h1>

                            <h1 className='spells__h1'>
                                <span>Description:</span> 
                                &nbsp; 
                                {curr['1'].description}
                            </h1>

                            <h1 className='spells__h1'>
                                <span>Cooldown:</span> 
                                &nbsp; 
                                {curr['1'].cooldown}
                            </h1>

                            <h1 className='spells__h1'>
                                <span>Range:</span> 
                                &nbsp; 
                                {curr['1'].range}
                            </h1>
                        </div>
                    </div>
                ) : 
                <img src={spinner} alt='spinner' className='spinner'/>
            }
        </div>
    )
}

export default Spells;


































// import React, { useState, useEffect } from 'react';
// import '../../Base-Styling.css';

// const Spells = () => {
//     const [spellsInit , setSpellsInit] = useState(false);
//     const [spells, setSpells] = useState('');

//     const fetchSpells = async () => {
//         if(!spellsInit){
//             try {
//                 const response = await fetch(`http://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/summoner.json`);
//                 const json = await response.json();
               
//                 console.log(json);
//                 setSpells(Object.entries(json.data));
//                 setSpellsInit(true);
//                 console.log(spells);
//             } catch(error){
//                 console.log(error);
//             }
//         }
//     }

//     useEffect(() => {
//         fetchSpells();
//     })

//     return (
//         <div>
//             {
//                 spells ? 
//                 spells.map(curr => <h1 key={Math.random() * 10000}>{curr['0']}</h1>) : 
//                 <h1 key='1'>searching for summoner spells...</h1>
//             }
//         </div>
//     )
// }

// export default Spells;