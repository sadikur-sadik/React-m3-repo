import React, { useState } from 'react';
import './Country.css'

const Country = ({handleVisitedCountries,country}) => {
   const [visited , setVisited] = useState(false);
    const handleVisit = () => {
        // visited ? setVisited(false) : setVisited(true)
        // setVisited(visited ? false : true)
        setVisited(!visited);
        handleVisitedCountries(country,visited);

    } ;
    return (
        <div className={`main ${visited ? 'country-visited' : 'main'}`}>
        {/* <div className={`main ${visited && 'country-visited' }`}> */}
          <img className='flag' src={country.flags.flags.png} alt="country.flags.alt" /> 
           <span className='name'>{country.name.common}</span>
           <p>Population: {country.population.population}</p>
           <p>Area: {country.area.area}
                <span className='area'>
                    {country.area.area > 300000 ? 'Big Country' : 'Small Country'}
                </span> 
            </p>
            <button className={`btn ${ visited && 'btn-visited'}`} onClick={handleVisit}>{visited ? 'Visited' : 'Not Visited'}</button>
        </div>
    );
};

export default Country;