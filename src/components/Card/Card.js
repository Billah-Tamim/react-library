import React, { useState } from 'react';
import './Card.css';

const Card = ({work}) => {
    let time = 0;
    const [tBreak, setTBreak]= useState(0);
    for(const single of work){
        time = time + (single.time * single.quantity);
    }
    const getBreak = breakTime =>{
        setTBreak(tBreak+breakTime);
    }
    return (
        <div className='card-container'>
            <div className="parsonal-info">
                <img src="profile.jpg" alt="" />
                <div className="parsonal-text">
                    <h4>Billah Tamim</h4>
                    <p>Naria, Shariatpur</p>
                </div>
            </div>
            <div className="parsonal-details">
                <div className="weight">
                    <h4>65 kg</h4>
                    <p>Weight</p>
                </div>
                <div className="height">
                    <h4>5.6</h4>
                    <p>Height</p>
                </div>
                <div className="age">
                    <h4>23 years</h4>
                    <p>Age</p>
                </div>
            </div>
            <h3>Add a brake time</h3>
            <div className="time">
                <button onClick={()=>getBreak(5)}>5m</button>
                <button onClick={()=>getBreak(10)}>10m</button>
                <button onClick={()=>getBreak(15)}>15m</button>
                <button onClick={()=>getBreak(20)}>30m</button>
            </div>
            <h3>Reading Info</h3>
            <div className="reading">
                <p>Reading Time</p>
                <p>{time} minutes</p>
            </div>
            <div className="break">
                <p>Break Time</p>
                <p>{tBreak} minutes</p>
            </div>
            <button className='complete'>Reading Completed</button>
        </div>
    );
};

export default Card;