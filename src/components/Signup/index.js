import React, { useState } from 'react';
import axios from 'axios';
import {
  Button,  
  Form,  
  FormGroup,
  Label,  
  Input,
} from 'reactstrap';

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [generation, setGenetation] = useState("");
  const [filenumber, setFileNumber] = useState("");
  const [ocupation, setOcupation] = useState("");
  const [companyname, setCompanyName] = useState("");
  const [currentposition, setCurrentPosition] = useState("");
  const [telephon, setTelephon] = useState("");
  const [placewherelive, setPlaceWhereLive] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    const jsonSend = {
      first_name: firstName,
      last_name: lastName,
      email,
      generation,
      filenumber,
      ocupation,
      companyname,
      currentposition,
      telephon,
      placewherelive,
      password,

    };
    const SIGNUP_URI = `${process.env.REACT_APP_BACKEND_BASE_URL}/signup`;
    try {
      await axios.post(SIGNUP_URI, jsonSend);
      setFirstName('');
      setLastName('');
      setEmail('');
      setGenetation('');
      setFileNumber('');
      setOcupation('');
      setCompanyName('');
      setCurrentPosition('');
      setTelephon('');
      setPlaceWhereLive('');
      setPassword('');
      alert('Successful signup!');
    } catch (error) {
      alert('Error on signup');
    }
  };

  return (
    <React.Fragment>
      <h1 className="mb-4">Registrate</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <Label>First Name</Label>
          <Input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            id="firstName"
            name="inputFirstName" 
            placeholder="type your first name" />
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text" 
            name="lastName" 
            id="inputLastname" 
            placeholder="type your last name" />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="type your email" />
        </FormGroup>
        <FormGroup>
          <Label>Generation</Label>
          <Input
            value={generation}
            onChange={(e) => setGenetation(e.target.value)}
            type="generation"
            name="generation"
            id="inputgeneration"
            placeholder="type your generation" />
        </FormGroup>
        <FormGroup>
          <Label>File number*</Label>
          <Input
            value={filenumber}
            onChange={(e) => setFileNumber(e.target.value)}
            type="filenumber"
            name="filenumber"
            id="filenumber"
            placeholder=" filenumber " />
        </FormGroup>
        <FormGroup>
          <Label>Ocupation</Label>
          <Input
            value={ocupation}
            onChange={(e) =>  setOcupation(e.target.value)}
            type="ocupation"
            name="ocupation"
            id="ocupation"
            placeholder="type your ocupation" />
        </FormGroup>
        <FormGroup>
          <Label>Company Name</Label>
          <Input
            value={companyname}
            onChange={(e) => setCompanyName(e.target.value)}
            type="companyname"
            name="companyname"
            id="companyname"
            placeholder="type your nomber of your company" />
        </FormGroup>
        <FormGroup>
          <Label>Current Position</Label>
          <Input
            value={currentposition}
            onChange={(e) => setCurrentPosition(e.target.value)}
            type="currentposition"
            name="currentposition"
            id="currentposition"
            placeholder="what is your current position" />
        </FormGroup>
        <FormGroup>
          <Label>Telephon</Label>
          <Input
            value={telephon}
            onChange={(e) => setTelephon(e.target.value)}
            type="telephon"
            name="telephon"
            id="telephon"
            placeholder="type your telephon number" />
        </FormGroup>
        <FormGroup>
          <Label>Place where you Live</Label>
          <Input
            value={placewherelive}
            onChange={(e) => setPlaceWhereLive(e.target.value)}
            type="placewherelive"
            name="placewherelive"
            id="placewherelive"
            placeholder="place where you live" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="examplePassword"
            placeholder="type your password here" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
 
      <Label>*If you don't know, don't worry, we will put it at the end of the form.</Label>
    </React.Fragment>
  );
}
 
export default Signup;