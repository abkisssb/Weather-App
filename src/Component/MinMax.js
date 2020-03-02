import React from 'react';




function MinMax(props){
    return(
        <div className='displayMinMax'>
        {props.temp_min && props.temp_max && 
              <p className='min-max'>
              Min {props.temp_max} <span className='temp-span'>°C</span>,
               Max {props.temp_max} <span className='temp-span'>°C</span> </p> }
        
        </div>
    )
}

export default MinMax;