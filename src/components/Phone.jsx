import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {
    const phone = useLoaderData();
    console.log(phone);
    return (
        <div>
            <h2>{phone.name}</h2>
            <img src={phone.img} alt="" />
            <p>{phone.description}</p>
        </div>
    );
};

export default Phone;