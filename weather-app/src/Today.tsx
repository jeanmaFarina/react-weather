import React from 'react'
import {Link} from 'react-router-dom'
import Card from './Card.tsx'
function Today({weather}){

    return(
    <div>
    {weather && 
    <React.Fragment>

            <Link className="link" to='/today'>Today</Link>
            <Link className="link" to='/forecast'>Forecast</Link>
            <div className="center">
            <Card  title={"Today"} item={weather.list[0]}/>
            </div>
        
    </React.Fragment>}
    </div>)

}

export default Today