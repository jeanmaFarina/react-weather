import React,{useEffect,useState} from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import {Link} from 'react-router-dom'
import Card from './Card.tsx'
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
    series: [],
    chart:{
        backgroundColor: 'transparent'
       
    }
    })
    useEffect(()=>{
        if(weather !== undefined){
          
          weather.list.forEach(element => {
            dataTemp.push([element.dt*1000,element.main.temp])
          })
          setOptions((x):Highcharts.Options=>({...x,series:{name:'temperature',type:"bar",data : dataTemp}}))
          console.log(options)
        }
      },[])
    const getCards= () => {
        let content:Array<String> = []
        console.log(weather)
        if(weather){
          for (let i = 0; i < weather.list.length; i+=8) {
            const item = weather.list[i]
            const s: String = (i/8).toString()
            content.push(
              <Card key={i} title={"Day " + s} item={item}/>
            )
          }
        }
        return content
    }
    
     
    return(
      <div>
      {weather && 
        <React.Fragment>
            <Link className="link" to='/today'>Today</Link>
            <Link className="link" to='/forecast'>Forecast</Link>
            <div class="row">
            {
             getCards()
            }
            </div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />

        </React.Fragment>}
      </div>
    )
}

export default Forecast