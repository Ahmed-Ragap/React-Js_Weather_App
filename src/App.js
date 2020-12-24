import React, { Component } from 'react'
import Form from "./Components/Form";
import Weather from "./Components/Weather";
class App extends Component{
state={
  temperature:'',
  city:'',
  country:'',
  description:'',
  humidity:'',
  error:''

}
  GetWeather = async (e) => {
    e.preventDefault()
    const city=e.target.elements.city.value; 
    const country=e.target.elements.country.value; 
    const API_Key = "e36ed364400282e43250b6c4c0274d44";
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_Key}`);
    const data = await api.json();
    
    if (city && country) {
     
      this.setState({
        temperature:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error:''
  
      })
    } else {
      this.setState({
        temperature:'',
        city:'',
        country:'',
        description:'',
        humidity:'',
        error:'please enter data'
        
  
      })
     
    }
    if (city.length < 1 || country.length < 1) {
      alert(this.state.error)
   }
  }


  render(){
  return (
    <div className="App"> 
        <div className='form_container'>
       <Form GetWeather={this.GetWeather} Change={this.Change}/>

      <Weather 
        temperature ={this.state.temperature}
        city = {this.state.city}
        country = {this.state.country}
        description = {this.state.description} 
        humidity = {this.state.humidity}
        error = {this.state.error}
      />
     </div>
    </div>
  );
}
}
export default App;
