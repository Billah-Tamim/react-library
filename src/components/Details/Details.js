import React, { useEffect, useState } from 'react';
import { addToLocal, getFromLocal } from '../../utilities/store-data';
import Card from '../Card/Card';
import Subject from '../Subject/Subject';
import './Details.css';

const Details = () => {
    const [subjects, setSubjects] = useState([]);
    const [work, setWork] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setSubjects(data))
    },[]);
    useEffect(()=>{
        let collectObject = [];
        const localStoredData = getFromLocal();
        for(const local in localStoredData){
            const searcingObject = subjects.find(subject => subject.id === local)
            if(searcingObject){
                searcingObject.quantity = localStoredData[local];
                collectObject.push(searcingObject);
            }
            
        }
        setWork(collectObject);
    },[subjects]);
    const getSubject = subject =>{
        let newWork = [...work, subject];
        setWork(newWork);
        addToLocal(subject.id);
    }
    return (
        <div className='details-container'>
            <div className="subjects-details">
                <h2 className='details-title'>Select todays topics...</h2>
                <div className="subjects-container">
                    {subjects.map(data => <Subject 
                    key={data.id}
                    subject={data}
                    getSubject={getSubject}
                    ></Subject>)}
                </div>
            </div>
            <div className="card-details">
                <Card 
                work={work}
                ></Card>
            </div>
        </div>
    );
};

export default Details;