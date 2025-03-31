import {
  Container,
  Stack,
  Image,
  VStack,
  Heading,
  Button,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';

function Placebooking() {
  const auth = localStorage.getItem('email');
  const { roomId, fromdate, todate } = useParams();
  const [roombook, setroombook] = useState(null);
  const [total, settotal] = useState();
  const toast = useToast();
  const navigate = useNavigate();

  const fromdatee = moment(fromdate, 'DD-MM-YYYY');
  const todatee = moment(todate, 'DD-MM-YYYY');
  const totaldays = moment.duration(todatee.diff(fromdatee)).asDays() + 1;
  useEffect(() => {
    fetchoneroom(roomId);
  }, [roomId]);

  const fetchoneroom = async roomId => {
    try {
      const result = await axios.get(
        `http://localhost:3000/room/roomgetbyid/${roomId}`
      );
      setroombook(result.data);
      settotal(totaldays * result.data.rentperday);
    } catch (error) {}
  };

  const handlebooking = async () => {
    const bookingdetails = {
      roomname: roombook.name,
      roomid: roomId,
      email: auth,
      fromdate,
      todate,
      totaldays,
      totalamount: total,
    };
    try {
      await axios.post(
        'http://localhost:3000/room/roombooking',
        bookingdetails
      );
      toast({
        title: 'Room booked successfully',
        description: 'Now, you can see booking',
        status: 'success',
        position: 'top-right',
        duration: 5000,
        isClosable: true,
      });
      navigate('/bookinghistory');
    } catch (error) {
      toast({
        title: 'An error occured during boking',
        status: 'error',
        position: 'top-right',
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <Container height={'90vh'}>
      <Heading textAlign={'center'}>Booking Details</Heading>
      <Stack
        my={'10'}
        direction={['column', 'row']}
        justifyContent={['center', 'space-evenly']}
        alignItems={'center'}
        spacing={'30'}
      >
        {roombook && (
          <>
            <Image
              borderRadius={'10'}
              marginRight={['none', '90']}
              height={['30vh', '40vh']}
              src={roombook.imageurl[0]}
            />
            <VStack marginLeft={'50'} spacing={'5'} alignItems={'flex-end'}>
              <Heading size={'md'}>Name:{auth}</Heading>
              <Heading size={'md'}>Room name: {roombook.name}</Heading>
              <Heading size={'md'}>from date: {fromdate}</Heading>
              <Heading size={'md'}>to date: {todate}</Heading>

              <hr />
              <Heading size={'md'}>Total days: {totaldays}</Heading>
              <Heading size={'md'}>Rent per day: {roombook.rentperday}</Heading>
              <Heading size={'md'}>Total: {total}</Heading>

              <Button colorScheme="yellow" onClick={handlebooking}>
                procced
              </Button>
            </VStack>
          </>
        )}
      </Stack>
    </Container>
  );
}

export default Placebooking;
