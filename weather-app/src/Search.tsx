import React,{Fragment, ReactElement,useEffect,useState} from 'react'



function Search({setWeather}):ReactElement{
    const [search,setSearch] = useState("")

    async function fetchWeather(e){
        try{
            console.log(process.env.REACT_APP_API_KEY)
                if(search != ""){
                    let res:Response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
                    let data = await res.json()
                    console.log(data)
                    setWeather(data)
                }else{
                    setWeather({})
                }
        }
        catch(err){
            console.log(err)
            
        }
        
    }

    return(<Fragment>
        <input type="text" onChange={(e:React.ChangeEvent<HTMLInputElement>) =>{
            setSearch((x)=>e.target.value)
        } }/>
        <button onClick={fetchWeather}>Submit</button>
    </Fragment>);
}

export default Search