import { Posts } from './componets/Posts';
import React, { SetStateAction, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
//import React from 'react'
import Select from 'react-select'
import {Routes, Route, useNavigate} from 'react-router-dom';


export default function App() {
  // const navigate = useNavigate();

 
  // const navigateHome = () => {
  //   // 👇️ navigate to /
  //   navigate('/');
  // };

const options = [
  { value: 'Male', label: 'Male' },
  { value: 'Famle', label: 'Famle' }
]


  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
    const [error, setError] = useState('');

  const [password, setPassword] = useState('');



  function validateForm() {

    return email.length > 0 && password.length > 0;

  }
  function isValidEmail(email: SetStateAction<any>) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const handleChange = (event: { target: { value: SetStateAction<any>; }; }) => {
        if (!isValidEmail(event.target.value)) {
          setError('Email is invalid');
        } else {
          setError('');
        }
    
        setMessage(event.target.value);
      };
  function handleSubmit(event: { preventDefault: () => void; }) {

    event.preventDefault();

  }

  return (

    <div className="Login">

      <Form onSubmit={handleSubmit}>

      <Form.Group  controlId="name">

<Form.Label>Name</Form.Label>

<Form.Control size="lg"

  autoFocus

  type="text"
name="name"
  value={name}

  onChange={(e) => setName(e.target.value)}

/>
{/* ////////////////////////////////////////////////////// */}
</Form.Group>

        <Form.Group  controlId="email">

          <Form.Label>Email</Form.Label>

          <Form.Control size="lg"

            autoFocus

            type="email"
            name="message"
            value={message}

            onChange={handleChange}
            onSubmit={handleSubmit}

          />

        </Form.Group>

        <Form.Group  controlId="password">

          <Form.Label>Password</Form.Label>

          <Form.Control size="lg"

            type="password"

            value={password}

            onChange={(e) => setPassword(e.target.value)}

          />

        </Form.Group>
        <Select options={options} />

        <Button  size="lg" type="submit" disabled={validateForm()}>

          Login

        </Button>
        {/* <Routes>
          <Route path="/" element={<Home />} />
        </Routes> */}
        {name.length ===0 ? <h2 style={{color: 'red'}}>the name is required</h2> :<h2></h2>}
        {error && <h2 style={{color: 'red'}}>{error}</h2>}
      {password.length > 6  ? <h2 style={{color: 'green'}}>Password is ok</h2> : <h2 style={{color: 'red'}}>Password is short or empty</h2>}

      </Form>
      
    </div>

  );
  // function Home() {
  //   return (<h2>`Home ${name}`</h2>);
  // }
}

