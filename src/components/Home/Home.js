import React from 'react';
import '../../Base-Styling.css';
import './Home.css';
import homeBackground from '../../res/home-background.mp4';

const Home = () => {
    return (
        <div className='home center'>
            <video src={homeBackground} className='home__background' loop={true} muted={true} autoPlay={true} />

            <h1 className='home__h1'>League of Legends is a team-based game with over 140 champions and 115 Million Monthly Players. Play now for free.</h1>
            
            <a href='https://signup.na.leagueoflegends.com/en/signup/redownload?page_referrer=index' className='home__link transition'>Download Now</a>
        </div>
    )
}

export default Home;