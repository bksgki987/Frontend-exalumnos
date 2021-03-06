import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import axios from 'axios';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser } = useContext(AuthContext);

  const handleForm = async (e) => {
    e.preventDefault();
    const jsonSend = { email, password };
    const LOGIN_URI = `${process.env.REACT_APP_BACKEND_BASE_URL}/login`;
    console.log(jsonSend);
    try {
      const res = await axios.post(LOGIN_URI, jsonSend);
      loginUser(res.data.token);
      alert('Successful login!');
    } catch (error) {
      alert('Error on login');
    }
  };

  return (
    <React.Fragment>
      <h1 className="mb-4">Reinicia seción</h1>
      <Form onSubmit={handleForm}>
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
          <Label>Password</Label>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="examplePassword"
            placeholder="type your password here" />
        </FormGroup>
        <Button>Enviar</Button>
      </Form>
      

      <h1 className="text-center">Thank you for using this data update application.<u></u></h1>
      <h2 className="text-center">For any information.</h2>
      <h3 className="text-center">Call 5627-0210</h3>
      <h4 className="text-center">Extention 8482</h4>
      
    </React.Fragment>






  );
}

export default Login;