import React from 'react';
import './App.css';
import WeatherForm from './Component/WeatherForm';
import OtherWeather from './Component/OtherWeather';
import Temperature from './Component/Temperature';
import Locations from './Component/Locations';
import FeelsLike from './Component/FeelsLike';
import MinMax from './Component/MinMax';
import Condition from './Component/Condition';
import Footer from './Component/Footer';
import Datas from './Component/Datas';



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

      temp:weather.list[0].main.temp.toFixed(0),
        feels_like:weather.list[0].main.feels_like.toFixed(0),
         humidity:weather.list[0].main.humidity.toFixed(0),
      temp_min:weather.list[0].main.temp_min.toFixed(0),
      temp_max:weather.list[0].main.temp_max.toFixed(0),
        country:weather.list[0].sys.country,
        city:weather.list[0].name,
         description:weather.list[0].weather[0].description
      })
      
 }

     dataData = (x) => {
  let months = ['January','February','March','April',
                'May','June','July','August','September',
                'October','November','December'];
    let days =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday'];
    let day= days[x.getDay()];
    let date = x.getDate();
    let month=months[x.getMonth()];
    let year = x.getFullYear();

     return `${day} ${date} ${month} ${year}`
 }


  render(){
    return (
      <div className="App">
      
       <WeatherForm callWeather={this.callWeather} />
       <Locations  country={this.state.country}city={this.state.city}/>
       <Datas dataData={this.dataData(new Date())} />
        <Temperature  temp={this.state.temp} />
        <FeelsLike  feels_like={this.state.feels_like} />
        <MinMax    temp_min={this.state.temp_min}
        temp_max={this.state.temp_max}/>
        <Condition description={this.state.description} />
       
       <OtherWeather
       
        humidity={this.state.humidity}
         description={this.state.description}/>
         <Footer city={this.state.city}
         country={this.state.country}
         />
          
      

      </div>
    );
  }
  
}
export default App;
