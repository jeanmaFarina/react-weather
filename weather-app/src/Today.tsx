import React from 'react'
import {Link} from 'react-router-dom'
function Today({weather}){

    return(
    <React.Fragment>
        <Link to='/today'>Today</Link>
        <Link to='/forecast'>Forecast</Link>
        <div className="card">
                <p>Today's weather</p>
                {}
        </div>
    </React.Fragment>)

}

export default Today