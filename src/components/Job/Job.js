import React, { useState } from 'react';
import './Job.css';

const Job = ({id,Image,name}) => {
  
  return (
    <div className="container">
        <img src={Image} alt={name}/>
        <h2>{name}</h2>
    </div>
  );
};

export default Job;