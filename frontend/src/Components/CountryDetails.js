import React, { useState } from 'react';
import styles from './CountryDetails.module.css'

function CountryDetails({ country }) {

  const languages = Object.keys(country.translations);

  const [language, setLanguage] = useState(
    languages[0]
  );

  return (
    <div className={styles.container}>
      <h2>{country.name.common}</h2>
      <div className={styles.grid}>
        <div className={styles.section}>

          <p><b>Official Name: </b>{country.name.official}</p>
          <p><b>Capital: </b>{country.capital[0]}</p>
          <p><b>Population: </b>{country.population}</p>

          <h4>Country Name Translated</h4>
          <select
            value={language}
            onChange={e => setLanguage(e.target.value)}
            className={styles.select}
          >
            {Object.keys(country.translations).map(lang => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>

          <p> <b>
            Official Name:</b> {country.translations[language].official}
          </p>

          <p> <b>
            Common Name:</b> {country.translations[language].common}
          </p>
        </div>

        <div className={styles.section}>
        {country.currencies && 
    <div>
      {Object.values(country.currencies).map(currency => (
        <div key={currency.name}>
          <p><b>Currency:</b> {currency.name}</p> 
          <p><b>Symbol:</b> {currency.symbol}</p>
        </div>
      ))}
    </div>
  }
          <p><b>Continents: </b>
            {country.continents.join(', ')}
          </p>
          <p><b>Region:</b> {country.region}</p>

          <p><b>Subregion:</b> {country.subregion}</p>
          <h4>Languages</h4>

          {Object.entries(country.languages).map(([code, name]) => (
            <li key={code}>
              {name}
            </li>
          ))}

        </div>

        <div className={styles.section}>

          <div>
            <img
              src={country.flags.png}
              alt={country.flags.alt}
              className={styles.flag}
            />

            <p style={{ fontStyle: 'italic' }}>{country.flags.alt}</p>

            <a href={country.flags.svg}
              target="_blank" rel="noreferrer"
            >
              View SVG Flag
            </a>
          </div>



          <div className={styles.links}>
            <h4>Map</h4>

            <a
              href={country.maps.googleMaps.replace('{countryName}', country.name.common)}
              target="_blank" rel="noreferrer"
            >
              View on Google Map
            </a>

            <a
              href={country.maps.openStreetMaps.replace('{latitude}', country.latlng[0]).replace('{longitude}', country.latlng[1])}
              target="_blank" rel="noreferrer"
            >
              View on OpenStreetMap
            </a>


          </div>
          {country.coatOfArms && country.coatOfArms.png && (
  <>
    <h4>Coat of Arms</h4>

    <img
      src={country.coatOfArms.png}
      alt=""
      className={styles.coatOfArms} 
    />

    {country.coatOfArms.svg && (
      <a
        href={country.coatOfArms.svg}
        target="_blank" 
        rel="noreferrer"
        className={styles.links}
      >
        View SVG Version
      </a>
    )}

  </>
)}
</div>
      </div>
    </div>
  )

}

export default CountryDetails;