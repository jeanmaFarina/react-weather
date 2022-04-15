import React,{Fragment, ReactElement,useEffect,useState} from 'react'
import { useNavigate } from "react-router-dom";
import './Search.css'

function Search({setWeather,setError}):ReactElement{
    const [search,setSearch] = useState("")
    const navigate = useNavigate()
    async function fetchWeather(e){
        try{
            console.log(process.env.REACT_APP_API_KEY)
                if(search != ""){
                    let res:Response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
                    if(res.ok){
                        let data = await res.json()
                        console.log(data)
                        setWeather(data)
                        navigate('/today')
                    }
                    else if(res.status == 401){
                        setError("Unauthorized")
                        //setWeather({})
                    }
                    else{
                        console.log("city not found")
                        setError("City not found")
                        //setWeather({})
                    }
                }else{
                    setWeather({})
                }
        }
        catch(err){
            console.log(err)
            
        }
        
    }

    return(<Fragment>
        <div className="column">
            <input type="text" onChange={(e:React.ChangeEvent<HTMLInputElement>) =>{
                setSearch((x)=>e.target.value)
            } }/>
            <button onClick={fetchWeather}>Submit</button>
        </div>
    </Fragment>);
}

export default Search