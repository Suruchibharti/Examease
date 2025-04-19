import React from 'react';

const Detail = (props) => {
    const { experience } = props.location.state;

    return (
        <div>
            <h2>{experience.title}</h2>
            <p>Description: {experience.description}</p>
            <p>User: {experience.user.name}</p>
            <p>Date: {new Date(experience.date).toLocaleDateString()}</p>
        </div>
    );
};

export default Detail;

