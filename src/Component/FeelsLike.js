import React from 'react';




function FeelsLike(props){
    return(
        <div className='displayFeelsLike'>
        {props.feels_like && <p className='feel'> Feels Like {props.feels_like} <span className='feels-span'>°C</span> </p> }
        
        </div>
    )
}

export default FeelsLike;