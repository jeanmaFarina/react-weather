import React,{useState,useEffect} from 'react';
import './App.css';
import Search from './Search.tsx'
import Today from './Today.tsx'
import Forecast from './Forecast.tsx'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

interface DataWeather{
  list: {
    dt: number
      main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
        sea_level: number
        grnd_level: number
        humidity: number
        temp_kf: number
      }
  }[]

}

function App() {
  const [weather,setWeather] = useState<DataWeather>()
  const [error,setError] = useState<string>("")
  
  return (
    <div className="App">
      <Router>
        <h1>Weather app</h1>
        <Search setWeather={setWeather} setError={setError}/>
        {
          error
        }
        {weather &&
        
          <Routes>
            <Route path='/today' element={<Today weather={weather}/>}/>
            <Route path='/forecast' element={<Forecast weather={weather}/>}/>
          </Routes>
        
        }
      </Router>
    </div>
  );
}

export default App;
