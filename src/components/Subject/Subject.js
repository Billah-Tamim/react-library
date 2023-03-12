import React from 'react';
import './Subject.css';

const Subject = ({subject}) => {
    const {name, picture, addition, about, time} = subject;
    return (
        <div className='subject-container'>
            <div className="details">
                <img src={picture} alt="" />
                <h3>{name}</h3>
                <small>{about}</small>
                <p>Books Addition: {addition}</p>
                <p>Time Required: {time} minutes</p>
            </div>
            <button>Add to List</button>
        </div>
    );
};

export default Subject;