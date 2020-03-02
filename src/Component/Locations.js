import React from 'react';




function Location(props){
    return(
        <div className='displayLocation'>
        {props.city && props.country &&   <p className='location'>{props.city}, {props.country} </p> }
        
        </div>
    )
}

export default Location;