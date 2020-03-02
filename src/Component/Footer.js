import React from 'react';


function Footer(props){
    return(

        <div className='App-footer'>
         <footer className='footer'>
            {props.city && props.country &&
            <p>You have just seearch for weather in <span className='city-footer'> {props.city} </span>,
             <span className='country-footer'> {props.country}</span></p>}

            {props.description && 
            <p>and current condition is a  <span className='desc-footer'> {props.description} </span> <br></br> <br></br>
             Remember to stay safe out there, Thank you! </p>}
             </footer>
           
           
        </div>
    )
}


export default Footer;