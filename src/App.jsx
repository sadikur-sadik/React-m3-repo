import './App.css'
import Countries from './Components/Countries/Countries';
import { Suspense } from 'react';

const fetchCountry = async() => {

  const url = 'https://openapi.programming-hero.com/api/all';
  const res = await fetch(url);
  const data = res.json();
  
  return data;

}

function App() {
  const countryPromise = fetchCountry();
 
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Countries countryPromise={countryPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
