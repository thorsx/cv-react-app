import React from 'react'

function Info(props){

    return(
        <header>   
            <div>{props.user.firstName} {props.user.lastName}</div>
            <div>({props.user.areaCode}) {props.user.phoneNumber}</div>
            <div>{props.user.email}</div>
            <h2>Description</h2><hr/>
            <div>{props.user.description}</div>
        </header>
    )
}

export default Info