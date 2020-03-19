import React from 'react';


function Footer(props){
    return(

        <div className='App-footer'>
         <footer className='footer'>
            {props.city && props.country &&
            <p> <a href="https://www.google.com/">Learn more </a><span className='city-footer'> {props.city},</span>
             <span className='country-footer'> {props.country}</span></p>}

            {props.description && 
            <p>and current condition is a  <span className='desc-footer'> {props.description} </span> <br/>
             Remember to stay safe out there, Thank you! </p>}
             
             </footer>
           
           
        </div>
    )
}


export default Footer;