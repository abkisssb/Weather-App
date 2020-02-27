import React from 'react';
import './App.css';
import WeatherForm from './Component/WeatherForm';
import DisplayWeather from './Component/DisplayWeather';
import Header from './Component/Header';

const KEY ="557c377d903b3be447598a9442a1cbd0"


class App extends React.Component {
     
     state={
         temp:'',
         feels_like:'',
         humidity:'',
         temp_min:'',
         temp_max:'',
         country:'',
         city:'',
         description:''
     }
 
   callWeather = async (e) =>{

    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const call_api = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${city},${country}&units=metric&appid=${KEY}`);
    const weather = await call_api.json();
    console.log(weather);
      this.setState({

      temp:weather.list[0].main.temp,
        feels_like:weather.list[0].main.feels_like,
         humidity:weather.list[0].main.humidity,
      temp_min:weather.list[0].main.temp_min,
      temp_max:weather.list[0].main.temp_max,
        country:weather.list[0].sys.country,
        city:weather.list[0].name,
         description:weather.list[0].weather[0].description
      })

 }


  render(){
    return (
      <div className="App">
      
       <WeatherForm callWeather={this.callWeather} />
       
       <DisplayWeather
        temp={this.state.temp}
        //feels_like={this.state.feels_like}
        humidity={this.state.humidity}
        temp_min={this.state.temp_min}
        temp_max={this.state.temp_max}
         country={this.state.country}
         city={this.state.city}
         description={this.state.description}/>
         <Header city={this.state.city}
         country={this.state.country}
         description={this.state.description}/>
          

        

      </div>
    );
  }
  
}
export default App;
