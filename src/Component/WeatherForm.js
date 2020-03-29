import React from 'react';


function WeatherForm(props){
    return(

        <div>
          <form onSubmit={props.callWeather}>
           <input type='text' name='city'  placeholder='Enter City' />
         
           <button>Find Weather</button>
          </form>
        </div>
    )
}

export default WeatherForm;