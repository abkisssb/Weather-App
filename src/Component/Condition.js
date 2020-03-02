import React from 'react';


function Condition(props){
    return(

        <div className='displayCondition'>
       
        {props.description &&   <p className='condition'> Condition : {props.description}</p>}

        </div>
    )
}

export default Condition;