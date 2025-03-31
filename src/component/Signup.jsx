import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Signup() {
  const toast = useToast();
  const navigate = useNavigate();
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const signupuserhandler = async () => {
    try {
      await axios.post('http://localhost:3000/registeruser', {
        name,
        email,
        password,
      });
      setname('');
      setemail('');
      setpassword('');
      navigate('/Signin');
      toast({
        title: 'Your account has been created successfully',
        description: 'Now, you can login',
        status: 'success',
        position: 'top-right',
        duration: 5000,
        isClosable: true,
      });
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
        Sing up
      </Heading>
      <form>
        <Box>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={e => setname(e.target.value)}
          />
        </Box>
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
      </form>
      <Button onClick={signupuserhandler} width={'full'} colorScheme="yellow">
        Sign up
      </Button>
    </Container>
  );
}

export default Signup;
