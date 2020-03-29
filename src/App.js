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
import Welcome from './Component/Welcome';
import ErrorMsg from './Component/ErrorMsg';



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
         description:'',
         icon:""
     }
  
 
   callWeather = async (e) =>{
  

    e.preventDefault();
    const city=e.target.elements.city.value;
    //  const country=e.target.elements.country.value;
    const call_api = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=${KEY}`);
    const weather = await call_api.json();
       


      if(city){
        console.log(weather);
        this.setState({
           temp:Math.round(weather.list[0].main.temp),
          feels_like:Math.round(weather.list[0].main.feels_like),
           humidity:Math.round(weather.list[0].main.humidity),
          temp_min:Math.round(weather.list[0].main.temp_min),
          temp_max:Math.round(weather.list[0].main.temp_max),
           country:weather.list[0].sys.country,
           city:weather.list[0].name,
           description:weather.list[0].weather[0].description,
           error : '',
           icon:weather.list[0].weather[0].icon
        })
      } else{
        this.setState({
          temp:'',
          feels_like:'',
          humidity:'',
          temp_min:'',
          temp_max:'',
          country:'',
          city:'',
          description:'',
          error: 'Please Enter City or Country ',
          icon:''
       })
      }
    
      
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

      <div className={(this.state.weather !=='')
      ?((this.state.temp>16)
      ? 'app warm':'app')
      :'app '}>
         <main>

        <ErrorMsg error={this.state.error} />

       <WeatherForm callWeather={this.callWeather} />
     
       <Locations country={this.state.country}  city={this.state.city}/>
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
          
         <Welcome />
         </main>
      </div>
    );
  }
  
}
export default App;
