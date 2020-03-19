import React from 'react';


function ErrorMsg(props){  
      
    return(

        <div className='displayDate'>
       
        {props.error &&   <p className='date'> {props.error}</p>}

        </div>
    )
}

export default ErrorMsg;