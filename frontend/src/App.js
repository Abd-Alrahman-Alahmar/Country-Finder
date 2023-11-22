import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import CountryDetails from './Components/CountryDetails';
import SVG from './assets/World_Map.svg';
import Spinner from './Components/Spinner';


function App() {

  const apiUrl = process.env.REACT_APP_BACKEND_URL;

  const [country, setCountry] = useState('');
  const [countryData, setCountryData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    if(country.length  < 3) {
      alert('Country must be more than 2 character');
      return;
    }
    setIsLoading(true);

    try {
      const response = await axios.post(`${apiUrl}country`, { country });
      const data = response.data;     
      
        setCountryData(data);
      
    } catch (error) {
      setCountryData(null);
      setError('No country found - try something else!'); 
      console.log(error);
    }
    finally {
      setIsLoading(false)
    }
  }

  return (

    <><div className="container">

      <div className="map-wrapper">
        <img src={SVG} alt=""
          className='map' />
      </div>
      <h3>Country Finder </h3>
      <form onSubmit={handleSubmit}
        className="search-form">
        <input
          placeholder="Search..." type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="search-input" />
        <button type="submit"
          className="submit-button">Submit</button>
      </form>



    </div>
      <div>
        {isLoading ? (<div className="map-wrapper">
          <Spinner /> </div>
        ) : 
          
          countryData ? (countryData.map((country, index) => (
            <CountryDetails key={index} country={country}
              />
          ))) : (
            <p className='error'>{error}</p>  
          )}
          
      </div></>
  )
}

export default App;
