import React, { useState } from 'react';
import TutorialsBox from './TutorialsBox.js';
import '../../Base-Styling.css';
import './Tutorials.css';
import { imageUrls } from '../../TutorialsImages.js';

const Tutorials = () => {
    const [tutorials, setTutorials] = useState([
        {
            title: '\'ProGuides\' Absolute Beginner Tutorial',
            url: 'https://www.youtube.com/watch?v=0uyLRPmmYPk'
        },
        {
            title: '\'GameLeap\' Items Tutorial',
            url: 'https://www.youtube.com/watch?v=QfZt9yjg43Y'
        },
        {
            title: '\'LadderUp\' Team Roles Tutorial',
            url: 'https://www.youtube.com/watch?v=_06PxBjQr4Q'
        },
        {
            title: '\'SkillCapped\' Wave Management Tutorial',
            url: 'https://www.youtube.com/watch?v=HNTguXcpbcg'
        },
        {
            title: '\'SkillCapped\' Advanced Macro Tutorial',
            url: 'https://www.youtube.com/watch?v=3wNv6Obj3kw'
        },
        {
            title: '\'ProGuides\' Challenger Rank Tips',
            url: 'https://www.youtube.com/watch?v=z6lNQVpTBgI'
        }
    ]);

    return (
        <div className='tutorials tutorials__column'>
            <h1 className='tutorials__h1'>League of Legends Tutorials</h1>

            <h2 className='tutorials__h2'>Learn the basics or refine your knowledge with these in-depth video tutorials</h2>

            <div className='tutorials__box-cont tutorials__row'>
                {
                    //IF USING CURLY BRACKETS INSIDE ARROW FUNCTIONS NEED EXPLICIT 'RETURN' KEYWORD
                    tutorials.map((curr, index) => 
                        <TutorialsBox
                            key={index}
                            img={imageUrls[index]}
                            title={tutorials[index].title}
                            url={tutorials[index].url}
                        />
                    ) 
                }
            </div>
        </div>
    )
}

export default Tutorials;