import React from 'react';
const Card = (props) => {

   const country = props.country;
   console.log(country);
   return (
      <li className='card'>
         <img src={country.flags.png} alt="flag" />
         <div className='data-container'>
            <ul>

               <li>pays : {country.name.common}</li>
               <li>capital : {country.capital}</li>
               <li>superficie : {country.area.toLocaleString()}</li>
               <li>population : {country.population.toLocaleString()}</li>
            </ul>
         </div>
      </li>
   );
};

export default Card;