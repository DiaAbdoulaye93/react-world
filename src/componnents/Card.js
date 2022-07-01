import React from 'react';

const Card = (props) => {

   const country = props.country;
   console.log(country);
   return (
      <li className='card'>
         <img src={country.flags.png} alt="flag" />
         <div className='data-container'>
            <ul>

               <li>{country.name.common}</li>
               <li>{country.name.common}</li>
               <li>{country.area}</li>
            </ul>
         </div>
      </li>
   );
};

export default Card;