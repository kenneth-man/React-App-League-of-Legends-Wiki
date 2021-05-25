import React, { useState, useEffect, createContext } from 'react';

export const DataContext = createContext();

//fetching data from league api all into one context, then wrapping children components so they have access to what they need
const DataContextProvider = ({ children }) => {
    
    //SUMMONER SPELLS
    const [spellsInit , setSpellsInit] = useState(false);
    const [spells, setSpells] = useState('');

    //ITEMS
    const [itemsInit, setItemsInit] = useState(false);
    const [items, setItems] = useState('');

    //CHAMPIONS
    const [championsInit, setChampionsInit] = useState(false);
    const [champions, setChampions] = useState('');

    const fetchSpells = async () => {
        if(!spellsInit){
            try {
                const response = await fetch(`http://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/summoner.json`);
                const json = await response.json();
        
                //converting object to array, in order to map() array and generate components dynamically in Spells.js
                setSpells(Object.entries(json.data));

                //flag to show that 'spell' data has been fetched; prevent useEffect() infinite loop 
                setSpellsInit(true);
            } catch(error){
                console.log(error);
            }
        }
    }

    const fetchItems = async () => {
        if(!itemsInit){
            try{
                const response = await fetch('http://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/item.json');
                const json = await response.json();
                const onlyItemData = Object.entries(json)[3];

                setItems(Object.entries(onlyItemData[1]));
                setItemsInit(true);
            } catch (error){
                console.log(error);
            }
        }
    }

    const fetchChampions = async () => {
        if(!championsInit){
            const response = await fetch(`http://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/champion.json`);
            const json = await response.json();
            setChampions(Object.entries(json.data));
            console.log(champions);
            setChampionsInit(true);
        }
    }

    //called when component is rendered and whenever any state changes; can specify a specific state to watch for changes in 2nd parameter
    useEffect(() => {
        fetchSpells();
    })

    useEffect(() => {
        fetchItems();
    })

    useEffect(() => {
        fetchChampions();
    })

    return (
        <DataContext.Provider value={{ spells, items, champions }}>
            {children}
        </DataContext.Provider>
    )
}   

export default DataContextProvider;