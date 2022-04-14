import React,{useState,useEffect} from 'react';
import './App.css';
import Search from './Search.tsx'
import Menu from './Menu.tsx'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import {BroswerRouter as Router, Routes, Route} from 'react-router-dom'

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
  const dataTemp= []
  const [options,setOptions ]= useState<Highcharts.Options>({
    title: {
        text: 'Temperature for the 5 next days'
    },
    xAxis: {
      type: 'datetime'
    },
    yAxis: {
      title: {
          text: 'temperature'
      }
    },
    series: [{type:'line',data:[]}]
  })
  useEffect(()=>{
    if(weather !== undefined){
      weather.list.forEach(element => {
        dataTemp.push([element.dt*1000,element.main.temp])
      })
      setOptions((x):Highcharts.Options=>({...x,series:{data : dataTemp}}))
      console.log(options)
    }
  },[weather])
  return (
    <div className="App">
      <h1>Weather app</h1>
      <Search setWeather={setWeather} setError={setError}/>
      {
        error
      }
      <Router>
        <Routes>
          <Route path='/today' element={<Today/>}/>
          <Route path='/forecast' element={<Forecast/>}/>
        </Routes>
      </Router>
      
      {weather && <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />}
    </div>
  );
}

export default App;
