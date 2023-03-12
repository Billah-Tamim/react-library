import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Subject from '../Subject/Subject';
import './Details.css';

const Details = () => {
    const [subjects, setSubjects] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setSubjects(data))
    },[]);
    return (
        <div className='details-container'>
            <div className="subjects-details">
                <h2 className='details-title'>Select todays topics...</h2>
                <div className="subjects-container">
                    {subjects.map(data => <Subject 
                    key={data.id}
                    subject={data}
                    ></Subject>)}
                </div>
            </div>
            <div className="card-details">
                <Card></Card>
            </div>
        </div>
    );
};

export default Details;