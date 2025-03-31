import { Box, Heading, Stack, Button, Badge, useToast } from '@chakra-ui/react';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Bookinghistory() {
  const [bookinghistory, setbookinghistory] = useState([]);
  const auth = localStorage.getItem('email');
  const toast = useToast();
  useEffect(() => {
    fecthbookingofuser(auth);
  }, [auth]);
  const fecthbookingofuser = async auth => {
    try {
      const responsee = await axios.get(
        `http://localhost:3000/room/bookingget?email=${auth}`
      );

      setbookinghistory(responsee.data.data);
    } catch (error) {}
  };

  async function bookingcancelhandler(bookingid, roomid) {
    try {
      await axios.post('http://localhost:3000/room/bookingcancel', {
        bookingid,
        roomid,
      });
      toast({
        title: 'Your booking cancelled successfully',
        status: 'success',
        position: 'top-right',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'An error occurred during cancelation',
        status: 'error',
        position: 'top-right',
        duration: 5000,
        isClosable: true,
      });
    }
  }
  return (
    <Box height={'100vh'}>
      <Stack
        direction={['column', 'row']}
        justifyContent={['center', 'space-evenly']}
        alignItems={'center'}
        flexWrap={'wrap'}
      >
        {bookinghistory.length > 0 ? (
          bookinghistory.map(eachbooking => (
            <Box
              key={eachbooking._id}
              borderRadius={'10px'}
              border={'1px solid black'}
              p={'10'}
            >
              <Heading my={'2'} size={'sm'}>
                {eachbooking._id}
              </Heading>
              <Heading my={'2'} size={'sm'}>
                Username: {eachbooking.email}
              </Heading>
              <Heading my={'2'} size={'sm'}>
                Username: {eachbooking.roomname}
              </Heading>
              <Heading my={'2'} size={'sm'}>
                checkIn date: {eachbooking.fromdate}
              </Heading>
              <Heading my={'2'} size={'sm'}>
                checkout date: {eachbooking.todate}
              </Heading>
              <Heading size={'sm'}>
                Status:{' '}
                {eachbooking.status == 'booked' ? (
                  <Badge colorScheme="green">Booked</Badge>
                ) : (
                  <Badge colorScheme="red">Cancelled</Badge>
                )}
              </Heading>
              {eachbooking.status !== 'cancelled' && (
                <Button
                  my={'5'}
                  colorScheme="yellow"
                  onClick={() =>
                    bookingcancelhandler(eachbooking._id, eachbooking.roomid)
                  }
                >
                  Cancel
                </Button>
              )}
            </Box>
          ))
        ) : (
          <p>No booking history available.</p>
        )}
      </Stack>
    </Box>
  );
}

export default Bookinghistory;
