import React from 'react'
import './Card.css'
function Card({title,item}){
    return(
    <div className="card">
        <h2>{title}</h2>
        <p>Temperature:{item.main.temp}</p>
        <p>Temperature max:{item.main.temp_max}</p>
        <p>Temperature min:{item.main.temp_min}</p>
        <p>Humidity:{item.main.humidity}</p>
        <p>Type:{item.weather[0].main} </p>
    </div>)
}

export default Card