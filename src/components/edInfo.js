import React from 'react'

function EdInfo(props){

    return(
        <div>
            <h3>Ed Info</h3>
            {props.user.map(each=> 
                      
            <div key={each.id}>
                <p>ID: {each.id}</p>
                <input type='text' value={each.name} />
                <input type='text' value={each.year}/>
                <button id={each.id} onClick={()=>props.handleEdit(each.id)}>Edit</button>
            </div>)}
        </div>
    )
}

export default EdInfo