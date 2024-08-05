import React from 'react';

const Experience = ({ title, description, date }) => {
    return (
        <div className="experience">
            <h3>{title}</h3>
            <p><strong>Descripción:</strong> {description}</p>
            <p><strong>Fecha:</strong> {date}</p>
        </div>
    );
};

export default Experience;