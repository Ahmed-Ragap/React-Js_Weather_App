import React from "react";

const Form = (props) => {
  
        return(
            <div >
                <h1>Weather app useing api</h1>

                <form onSubmit={props.GetWeather}>
                    <input id="city" type="text" name='city' placeholder='City...'/>
                    <input id="country"type="text" name='country' placeholder='Country...'/>
                    <button>get weather</button>
                </form>

            </div>
        )
    }

export default Form;