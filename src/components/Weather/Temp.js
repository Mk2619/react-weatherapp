
import './style.css'; 
import Weathercard from './weathercard';


import React,{useEffect, useState} from 'react';
const Temp = () => {

    const [searchValue, setSearchValue] = useState("Alappuzha");
    const [tempInfo, setTempInfo] = useState({});
   

    const getWeatherInfo = async () => {

        try {

            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=c61bbee2a9f190b5e7ac004d8f9383ab`;

           

            const res = await fetch(url);
            const data = await res.json();

            const {temp, humidity, pressure} = data.main;
            const {main: weathermood} = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country, sunset} = data.sys;
           

           
            const  myNewWeatherinfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
                
        
        
            };

            setTempInfo(myNewWeatherinfo);


            
            

            
        } catch (error) {
            console.log(error);
            
        }

    };

    useEffect(() => {
        getWeatherInfo();
        
    },[]); 

    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search"
                     placeholder="search..."
                      autoFocus id="search"
                       className="searchTerm" 
                       value={ searchValue }
                       onChange={(e) => setSearchValue(e.target.value) }


                    />
                    <button className='searchButton' type='button'
                     onClick={getWeatherInfo}>
                        Search
                    </button>
                </div>
            </div>

            <Weathercard tempInfo ={tempInfo}/>
            
        </>
    )

}

export  default Temp; 