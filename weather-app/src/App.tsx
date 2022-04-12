import React,{useState} from 'react';
import './App.css';
import Search from './Search.tsx'

function App() {
  const [weather,setWeather] = useState({})
  return (
    <div className="App">
      <h1>Weather app</h1>
      <Search setWeather={setWeather}/>
    </div>
  );
}

export default App;
