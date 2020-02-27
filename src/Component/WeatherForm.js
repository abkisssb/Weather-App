import React from 'react';


function WeatherForm(props){
    return(

        <div>
          <form onSubmit={props.callWeather}>
           <input type='text' name='city' placeholder='Enter City' />
           <input type='text' name='country' placeholder='Enter Country' />
           <button>Find Weather</button>
          </form>
        </div>
    )
}

export default WeatherForm;