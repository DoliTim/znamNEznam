import React, { useState } from 'react';
import './SearchContainer.css';

const SearchContainer = ({ title, expandDirection }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(true);
  };

  const handleCollapse = () => {
    setExpanded(false);
  };

  return (
    <div
      className={`search-container ${expanded ? 'expanded' : ''} ${expandDirection}`}
      onMouseEnter={handleExpand}
      onMouseLeave={handleCollapse}
    >
      {!expanded ? (
        <h3 className="short-title">
          {title}
          <span className="orange-dot">.</span>
        </h3>
      ) : (
        <div className="search-form">
          <h3>{title}</h3>
          {title === 'NEznam' ? (
            <>
              <p className="container-description">
                Potrebujete pomoč pri določenem predmetu? Kliknite, da vnesete svoje podatke in poiščete pomoč.
              </p>
              <div className="search-bar">
                <label htmlFor="neznam-subject">Predmet s katerim potrebujem pomoč:</label>
                <input type="text" id="neznam-subject" placeholder="Predmet" />
              </div>
              <div className="search-bar">
                <label htmlFor="neznam-region">Regija:</label>
                <select id="neznam-region">
                  <option value="">Izberite regijo</option>
                  <option value="Gorenjska">Gorenjska</option>
                  <option value="Goriška">Goriška</option>
                  <option value="Jugovzhodna Slovenija">Jugovzhodna Slovenija</option>
                  <option value="Koroška">Koroška</option>
                  <option value="Obalno-kraška">Obalno-kraška</option>
                  <option value="Osrednjeslovenska">Osrednjeslovenska</option>
                  <option value="Podravska">Podravska</option>
                  <option value="Pomurska">Pomurska</option>
                  <option value="Posavska">Posavska</option>
                  <option value="Primorsko-notranjska">Primorsko-notranjska</option>
                  <option value="Savinjska">Savinjska</option>
                  <option value="Zasavska">Zasavska</option>
                  <option value="Preko Spleta-Remote">Preko Spleta-Remote</option>
                </select>
              </div>
              <div className="search-bar">
                <label htmlFor="neznam-academic-level">Akademski nivo:</label>
                <select id="neznam-academic-level">
                  <option value="">Izberite akademski nivo</option>
                  <option value="elementary">Osnovna šola</option>
                  <option value="highschool">Srednja šola</option>
                  <option value="academia">Univerza</option>
                </select>
              </div>
              <button type="button">Išči</button>
            </>
          ) : (
            <>
              <p className="container-description">
                Ste strokovnjak v določenem predmetu? Kliknite, da vnesete svoje podatke in ponudite pomoč.
              </p>
              <div className="search-bar">
                <label htmlFor="znam-subject">Predmet, ki ga ponujam:</label>
                <input type="text" id="znam-subject" placeholder="Predmet" />
              </div>
              <div className="search-bar">
                <label htmlFor="znam-region">Regija:</label>
                <select id="znam-region">
                  <option value="">Izberite regijo</option>
                  <option value="Gorenjska">Gorenjska</option>
                  <option value="Goriška">Goriška</option>
                  <option value="Jugovzhodna Slovenija">Jugovzhodna Slovenija</option>
                  <option value="Koroška">Koroška</option>
                  <option value="Obalno-kraška">Obalno-kraška</option>
                  <option value="Osrednjeslovenska">Osrednjeslovenska</option>
                  <option value="Podravska">Podravska</option>
                  <option value="Pomurska">Pomurska</option>
                  <option value="Posavska">Posavska</option>
                  <option value="Primorsko-notranjska">Primorsko-notranjska</option>
                  <option value="Savinjska">Savinjska</option>
                  <option value="Zasavska">Zasavska</option>
                  <option value="Preko Spleta-Remote">Preko Spleta-Remote</option>
                </select>
              </div>
              <div className="search-bar">
                <label htmlFor="znam-academic-level">Akademski nivo:</label>
                <select id="znam-academic-level">
                  <option value="">Izberite akademski nivo</option>
                  <option value="elementary">Osnovna šola</option>
                  <option value="highschool">Srednja šola</option>
                  <option value="academia">Univerza</option>
                </select>
              </div>
              <div className="search-bar">
                <label htmlFor="znam-contact-email">Kontakt (Email):</label>
                <input type="email" id="znam-contact-email" placeholder="Vaš Email" />
              </div>
              <div className="search-bar">
                <label htmlFor="znam-contact-phone">Kontakt (Telefon):</label>
                <input type="tel" id="znam-contact-phone" placeholder="Vaša telefonska številka" />
              </div>
              <button type="button">Objavi</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchContainer;
