import React from "react";
const Weather = (props) => { 
        return(

            <div className='Weather'>
               { 
                   props.temperature && <p><p>temperature : </p>{props.temperature} </p>
               }
            
               {
                    props.city && <p><p>city : </p>{props.city} </p>
               }
            
               {
                props.country && <p><p>country : </p>{props.country} </p>
               }

               {
                props.description && <p><p>description : </p>{props.description} </p>
               }

               {
                props.humidity && <p><p>humidity : </p>{props.humidity} </p>
               }
            
               {
                props.error && <p><p>error : </p>{props.error} </p>
               }

                </div>
        )
    
}
export default Weather;