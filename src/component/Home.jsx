import { Heading, VStack, Text, Button } from '@chakra-ui/react';
import React from 'react';
import './../App.css';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="maindiv">
      <div className="onbaorddiv">
        <VStack>
          <Heading fontSize={['30px', '50px']}>Book a room with us</Heading>
          <Text>We provide all kind of facilities at reasonable price.</Text>
          <Link to={'/bookroom'}>
            <Button colorScheme="yellow">Book now</Button>
          </Link>
        </VStack>
        <div className="mainimg">
          <img
            alt=""
            src="https://img.freepik.com/premium-vector/hotel-review-with-rating-service-rated-customer-experience-hand-drawn-illustration_2175-10266.jpg"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
