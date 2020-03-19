import React from 'react';




function Temperature(props){
    return(
        <div className='displayTemperature'>
        {props.temp && <p className='temp'> 
        {props.temp} <span className='temp-span'>°C</span> </p> }
        
        </div>
    )
}

export default Temperature;