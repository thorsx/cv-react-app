import './App.css';
import React from 'react'
import Info from './components/info';
import uniqid from 'uniqid'
import Header from './components/header'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form';


function App() {

  const [info, setInfo] = React.useState({firstName: '', lastName : '', email : '', areaCode: '', areaCode: '', phoneNumber : '', description: ''})
  const [edL, setEdL] = React.useState([])

  function $(x){
    return document.getElementById(x)
  }

  function handleChange(e){
      const {name, value, id} = e.target
      
      setInfo(prevState => ({...prevState, [name]:value}))

      setEdL(prevState => {
        const arr = []
        for(let i=0; i<prevState.length; i++) {
          const currentInput = prevState[i]
          if(currentInput.id === e.target.parentElement.id) {
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
    setEdL(prevState => prevState.filter(each => each.id != e.target.id))
  }

  return(
    <div className='main-container'>
      
      <div className='form'>
        <Header />
          <Form>
            <Form.Control as='input' type='text' name='firstName' placeHolder='First name'onChange={handleChange} value={info.firstName}/>  
            <Form.Control as='input' type='text' name='lastName' placeHolder='Last name'onChange={handleChange} value={info.lastName}/>
            <Form.Control as='input' type='email' name='email' placeHolder='Email'onChange={handleChange} value={info.email}/>
            <Container fluid>
                <Row>
                  <Col><Form.Control as='input' type='tel' name='areaCode' placeHolder='Area Code'onChange={handleChange} value={info.areaCode} maxlength='3'/></Col>
                  <Col xs={8}><Form.Control as='input' type='tel' name='phoneNumber' placeHolder='Phone Number'onChange={handleChange} value={info.phoneNumber} maxlength='7' ></Form.Control></Col>
                </Row>
              </Container>
            <Form.Control as='textarea' name='description' onChange={handleChange} value={info.description} rows={5}/>

          </Form>

              


          <br/>
          <div className='container'>
              <button onClick={handleAdd}>Add</button>
              <h3>Education</h3>
              {edL.map(each=>
              <div key={each.id} className="education-card"
              id = {each.id}>
                <input type='text' name='universityName' placeHolder='University Name' onChange={handleChange} />
                <input type='date' name='year' placeHolder='Year' onChange={handleChange} />  
                <button id={each.id} onClick={handleDelete}>Delete</button>
              </div>
              )}
              
          </div>  
      </div>   

          <div className='cv-preview'>
            
            <Info user={info} />
            {edL.map(each=>
              <div key={each.id}>
                <div>{each.universityName}</div>  
                <div>{each.year}</div>  
              </div>
              )}
          </div>
       
    </div>
  )
}
export default App;
