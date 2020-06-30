import React from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './components/weather.component'
import "bootstrap/dist/css/bootstrap.min.css"
import 'weather-icons/css/weather-icons.css'
import Form from './components/form.component'
const API_key = '024cc63f5397c4eeaeedb5582456d428'



class App extends React.Component {
  constructor(){
    super()
    this.state = {
    city : undefined,
    country : undefined,
    temp : undefined,
    desc : undefined,
    minTemp : undefined,
    maxTemp : undefined,
    icon : undefined,
    error : false,
    invalid : false
    }
    this.weatherIcon={
      thunderstorm : "wi-thunderstorm",
      snow : "wi-snow",
      rain : "wi-storm-showers",
      drizzle : "wi-sleet",
      clear : "wi-day-sunny",
      clouds : "wi-day-fog",
      atmosphere : "wi-fog" 
    }
  }
  getWeatherIcon(weatherIcons,id){  
    switch(true){
      case id>=200&&id<=232:
        this.setState({ icon:weatherIcons.thunderstorm  });
        break;
      case id>=300&&id<=321: 
        this.setState({ icon:weatherIcons.drizzle  });
        break;
      case id>=500&&id<=531:
        this.setState({ icon:weatherIcons.rain  });
        break;
      case id>=600&&id<=622:     
        this.setState({ icon:weatherIcons.snow  });
        break;
      case id>=700&&id<=781:     
        this.setState({ icon:weatherIcons.atmosphere  });
        break;
      case id==800:     
        this.setState({ icon:weatherIcons.clear  });
        break;    
      case id>=800&&id<=804:     
        this.setState({ icon:weatherIcons.clouds  });
        break;  
    }
    
  }
  getWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value
    if(city){
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=024cc63f5397c4eeaeedb5582456d428`);
    const response = await api_call.json();
    console.log(response.cod)
    if(response.cod==200){
    this.setState({
      city:response.name,
      country:response.sys.country,
      temp:this.convertToCelsius(response.main.temp),
      minTemp:this.convertToCelsius(response.main.temp_min),
      maxTemp:this.convertToCelsius(response.main.temp_max),
      desc:response.weather[0].description,
      error:false,
      invalid:false
    })
    this.getWeatherIcon(this.weatherIcon,response.weather[0].id)
    }else{
      this.setState({ invalid:true  }); 
      this.setState({ error:false  }); 
    }
    }else{
      this.setState({ error:true  });
      this.setState({ invalid:false  });
    }
  }
  
  convertToCelsius(temp){
  return   Math.floor(temp-273.15)
  }
render(){
  return(
    <div className="App">
      <Form getWeather={this.getWeather} error={this.state.error} invalid={this.state.invalid}></Form>
      <Weather 
      city={this.state.city}
      country={this.state.country}
      temp={this.state.temp}
      minTemp={this.state.minTemp}
      maxTemp={this.state.maxTemp}
      desc={this.state.desc}
      icon={this.state.icon}
      ></Weather>
    </div>
  )
}
}

export default App;
