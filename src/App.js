import './App.css';
import React from 'react'
import Info from './components/info';
import uniqid from 'uniqid'
import Header from './components/header'

function App() {

  const [name, setName] = React.useState({firstName: '', lastName : ''})
  const [edL, setEdL] = React.useState([])

  function $(x){
    return document.getElementById(x)
  }

  function handleChange(e){
      const {name, value, id} = e.target
      
      setName(prevState => ({...prevState, [name]:value}))

      setEdL(prevState => {
        const arr = []
        for(let i=0; i<prevState.length; i++) {
          const currentInput = prevState[i]
          if(currentInput.id === e.target.parentElement.id) {
            console.log('there is a match')
            const updatedInput = {
              ...currentInput,
              [name]:value
            }
            arr.push(updatedInput)
          } else {
            arr.push(currentInput)
          }
        }
        return arr
      })
  }

  function handleAdd(e){
    setEdL(prevState => [...prevState, {id: uniqid(), name:'-', year:'-'}])
  }

  function handleDelete(e){
    console.log('The id of this edit click is: ', e.target.id)
    console.log('previous list: ', edL)
    setEdL(prevState => prevState.filter(each => each.id != e.target.id))
    console.log('new list: ', edL)

  }

  return(
    <div className='main-container'>
      <div className='form'>
          <div className='container'>
              <input type='text' name='firstName' placeHolder='First name'onChange={handleChange} value={name.firstName}/>
              <input type='text' name='lastName' placeHolder='Last name'onChange={handleChange} value={name.lastName}/>
          </div>   
          <br/>
          <div className='container'>
              <button onClick={handleAdd}>Add</button>
              {edL.map(each=>
              <div key={each.id}
              id = {each.id}>
                <input type='text' name='name' placeHolder='Uni Name' onChange={handleChange} />
                <input type='date' name='year' placeHolder='Year' onChange={handleChange} />  
                <button id={each.id} onClick={handleDelete}>Delete</button>
              </div>
              )}
              
      </div>  
      </div>   

          <div className='cv-preview'>
            <Header />
            <Info user={name} />
            {edL.map(each=>
              <div key={each.id}>
                <div>{each.name}</div>  
                <div>{each.year}</div>  
              </div>
              )}
          </div>
       
    </div>
  )
}
export default App;
