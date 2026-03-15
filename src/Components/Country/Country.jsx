import React from 'react';
import './Country.css'

const Country = ({country}) => {
    // console.log(country);
    return (
        <div className='main'>
          <img className='flag' src={country.flags.flags.png} alt="country.flags.alt" /> 
           <span className='name'>{country.name.common}</span>
           <p>Population: {country.population.population}</p>
        </div>
    );
};

export default Country;