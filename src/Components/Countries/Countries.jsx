import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countryPromise}) => {

    const [visitedCountries , setVisitedCountries] = useState([])

    const handleVisitedCountries = (country,visited) => {
    
    if(!visited){
        let newVisitedCountries = [...visitedCountries , country];
        setVisitedCountries(newVisitedCountries);
    }
    else{
        let newVisitedCountries = visitedCountries.filter(vc => vc !== country);
        setVisitedCountries(newVisitedCountries);
    }

    };

    const countriesData = use(countryPromise);
    
    const countries = countriesData.countries;

    return (
        
        <div class="container">
            <h1>Total Country Visited: {visitedCountries.length}</h1>
            <ol className='ol-list'>
                {visitedCountries.map(vc => <li key={vc.cca3.cca3}>{vc.name.common}</li>)}
            </ol>
            <div className='parentName'>
                {countries.map(country => <Country handleVisitedCountries={handleVisitedCountries} key={country.cca3.cca3} country={country}></Country> )}
            </div>
        </div>
    );
};

export default Countries;