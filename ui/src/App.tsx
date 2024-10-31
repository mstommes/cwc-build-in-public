import { useState } from 'react'
import axios from 'axios'
import { Button, Form } from 'react-bootstrap';


function App() {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')

  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:8080/user",
      {
        firstName,
        lastName
      })
    return response.data;
  }

  const handleFirstNameChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value)
  }

  const handleLastNameChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value)
  }

  return (
    <div>
      <div>Project Planner</div>
      <Form>
        <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="firstName" placeholder="Enter first name" onChange={handleFirstNameChange} />
        </Form.Group>
        <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="lastName" placeholder="Enter last name" onChange={handleLastNameChange} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>Click Me</Button>
      </Form>
    </div>
  );
}

export default App;
