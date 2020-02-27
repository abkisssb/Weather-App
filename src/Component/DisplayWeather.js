import React from 'react';


function DisplayWeather(props){
    return(

        <div className='displayWeather'>
           <p>Temperature : {props.temp}</p>
           <p>Feels Like : {props.feels_like}</p>
           <p>Humidity : {props.humidity}</p>
           <p>Min Temperature : {props.temp_min}</p>
           <p>Max Temperature : {props.temp_max}</p>
           <p>Loction : {props.city}, {props.country} </p>
           <p>Condition : {props.description}</p>
           
        </div>
    )
}


export default DisplayWeather;