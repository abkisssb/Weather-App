import React from 'react';


function Datas(props){  
      
    return(

        <div className='displayDate'>
       
        {props.dataData &&   <p className='date'> {props.dataData}</p>}

        </div>
    )
}

export default Datas;