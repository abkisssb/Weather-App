import React from 'react';


function Header(props){
    return(

        <div className='App-footer'>
            {props.city && props.country &&
            <p>You have just seearch for weather in <span className='city-footer'> {props.city} </span>,
             <span className='country-footer'> {props.country}</span></p>}

            {props.description && 
            <p>and current condition is a  <span className='desc-footer'> {props.description} </span> <br></br> <br></br>
             Remember to stay safe out there, Thank you! </p>}
             
           
           
        </div>
    )
}


export default Header;