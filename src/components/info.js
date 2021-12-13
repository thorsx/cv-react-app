import React from 'react'

function Info(props){

    return(
        <div>   
            <h3>Info</h3>
            <p>{props.user.firstName}</p>
            <p>{props.user.lastName} </p>
        </div>
    )
}

export default Info