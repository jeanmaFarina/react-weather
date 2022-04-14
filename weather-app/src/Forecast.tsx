import React,{useEffect,useState} from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import {Link} from 'react-router-dom'

function Forecast({weather}){

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
    series: []
    })
    useEffect(()=>{
        if(weather !== undefined){
          weather.list.forEach(element => {
            dataTemp.push([element.dt*1000,element.main.temp])
          })
          setOptions((x):Highcharts.Options=>({...x,series:{data : dataTemp}}))
          console.log(options)
        }
      },[])
    return(
        <React.Fragment>
            <Link to='/today'>Today</Link>
            <Link to='/forecast'>Forecast</Link>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />

        </React.Fragment>
    )
}

export default Forecast