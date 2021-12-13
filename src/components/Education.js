import React from 'react'
import uniqid  from 'uniqid'

function Education(){
    const [education, setEducation] = React.useState({id: uniqid(), name: '', last: ''})

    function handleChange(e){
        const {name, value} = e.target
        console.log('the unique id: ', education.id)
        setEducation(prevState => {
            return {
                ...prevState,
                [name]: value
            }
            
        })
    }


    return(
        <div className='form-container' className={education.id}>
            <input type='text' onChange={handleChange}placeholder='Name' name='name' value={education.name} className={education.id}/>
            <input type='text' onChange={handleChange}placeholder='Last' name='last' value={education.last} className={education.id}/>
            <p>ID of this sucka is: {education.id}</p>
        </div>
        
    )
}

export default Education