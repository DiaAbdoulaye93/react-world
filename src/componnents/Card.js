import React from 'react';

const Card = (props) => {

    const country = props;
    console.log(country);
    return (
     <li className='card'>
        <img src={country.flag} alt="flag"></img>
     </li>
    );
};

export default Card;