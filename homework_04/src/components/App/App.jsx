import { useState } from 'react';

import CitySelector from '../CitySelector/CitySelector';
import CityCard from '../CityCard/CityCard';
import MathQuiz from '../MathQuiz/MathQuiz';

import { initialState } from '../CitySelector/citiesData';

import './App.css';

function App() {

  const [stateCity, setStateCity] = useState(initialState);

  const updateCity = (newCity) => {
    setStateCity(newCity)
  };

  return (
    <>
      <section className='citySection'>
        <div className='cityContainer'>
          <CitySelector updateCity={updateCity} />
          <CityCard cityItem={stateCity} />
        </div>
      </section>
      <MathQuiz />
    </>
  )
}

export default App
