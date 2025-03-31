import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Text,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signin() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();
  const toast = useToast();
  const signinuserhandler = async () => {
    try {
      const result = await axios.post('http://localhost:3000/login', {
        email,
        password,
      });
      const token = result.data.token;
      localStorage.setItem('token', token);
      localStorage.setItem('email', email);
      setemail('');
      setpassword('');

      toast({
        title: 'Login successfuly',
        description: 'Now, you can see all rooms',
        status: 'success',
        position: 'top-right',
        duration: 5000,
        isClosable: true,
      });
      navigate('/');
    } catch (error) {
      toast({
        title: 'Invalid credential',
        description: 'Please check details',
        status: 'error',
        position: 'top-right',
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <Container height={'90vh'}>
      <Heading textAlign={'center'} color={'yellow.600'}>
        Sing in
      </Heading>
      <form>
        <Box my={'5'}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={e => setemail(e.target.value)}
          />
        </Box>
        <Box my={'5'}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter Email"
            value={password}
            onChange={e => setpassword(e.target.value)}
          />
        </Box>
        <Text my={'5'}>Forget password ?</Text>
      </form>
      <Button onClick={signinuserhandler} width={'full'} colorScheme="yellow">
        Sign in
      </Button>
      <Text my={'3'}>
        Not signup yet?
        <Link to={'/Signup'} color="yellow">
          Signup now
        </Link>
      </Text>
    </Container>
  );
}

export default Signin;
