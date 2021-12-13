import React from 'react'

function Edit(props){

    return(
        <div>
            {props.user.map(each=>            
            <div key={each.id}>
                <input>Ed # {each.id}</input>
                <input>{each.name}</input>
                <input>{each.year}</input>
            </div>)}
        </div>
    )
}

export default Edit