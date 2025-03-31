import {
  Box,
  Container,
  Stack,
  Image,
  Heading,
  Text,
  HStack,
  Button,
  Card,
  CardBody,
  CardFooter,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import { DatePicker } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
function Booking() {
  const { RangePicker } = DatePicker;
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [room, setRoom] = useState([]);
  const [fromdate, setfromdate] = useState(null);
  const [todate, settodate] = useState(null);
  const [duplicateroom, setduplicateroom] = useState([]);
  const [searchkey, setsearchkey] = useState('');
  const [type, settype] = useState('all');

  useEffect(() => {
    fetchRoomHandler();
  }, []);

  const fetchRoomHandler = async () => {
    try {
      const response = await axios.get('http://localhost:3000/room/roomget');
      setRoom(response.data);
      setduplicateroom(response.data);
    } catch (error) {
      console.error('Error fetching room data:', error);
    }
  };

  const handleViewDetails = roomdata => {
    setSelectedRoom(roomdata);
    onOpen();
  };
  function filterbydate(dates) {
    const formattedFrom = dates[0].format('DD-MM-YYYY');
    const formattedTo = dates[1].format('DD-MM-YYYY');

    setfromdate(formattedFrom);
    settodate(formattedTo);

    const tempRooms = duplicateroom.filter(room => {
      let isAvailable = true;

      for (const booking of room.currentbookings) {
        const bookingFrom = moment(booking.fromdate, 'DD-MM-YYYY');
        const bookingTo = moment(booking.todate, 'DD-MM-YYYY');

        if (
          moment(formattedFrom, 'DD-MM-YYYY').isBetween(
            bookingFrom,
            bookingTo,
            null,
            '[]'
          ) ||
          moment(formattedTo, 'DD-MM-YYYY').isBetween(
            bookingFrom,
            bookingTo,
            null,
            '[]'
          )
        ) {
          isAvailable = false;
          break;
        }
      }

      return isAvailable;
    });

    setRoom(tempRooms);
  }

  const disabledDate = current => {
    return current && current < moment().startOf('day');
  };

  function filterbyseacrh() {
    const tmproom = duplicateroom.filter(roomm =>
      roomm.name.toLowerCase().includes(searchkey.toLowerCase())
    );
    setRoom(tmproom);
  }
  function filterbytype(e) {
    settype(e);
    let tmproomtype = [];

    if (e !== 'all') {
      tmproomtype = duplicateroom.filter(
        roommm => roommm.type.toLowerCase() === e.toLowerCase()
      );
    } else {
      tmproomtype = duplicateroom;
    }

    setRoom(tmproomtype);
  }

  return (
    <Box height={'100vh'} overflowX={'scroll'}>
      <Container>
        <Stack
          direction={['column', 'row']}
          justifyContent={['center', 'space-evenly']}
          alignItems={'center'}
        >
          <VStack>
            <HStack spacing={['2', '39']}>
              <RangePicker
                style={{ border: '2px solid black' }}
                format={'DD-MM-YYYY'}
                onChange={filterbydate}
                disabledDate={disabledDate}
              />

              <select
                style={{
                  border: '2px solid black',
                  padding: '2px',
                  borderRadius: '5px',
                }}
                value={type}
                onChange={e => filterbytype(e.target.value)}
              >
                <option value="all">All</option>
                <option value="delux">Delux</option>
                <option value="nondelux">Non-Delux</option>
              </select>
            </HStack>

            <Input
              paddingRight={['none', '190px']}
              type="text"
              border={'2px solid black'}
              placeholder="search here"
              value={searchkey}
              onChange={e => setsearchkey(e.target.value)}
              onKeyUp={filterbyseacrh}
            />
          </VStack>
        </Stack>
      </Container>
      <Stack
        direction={['column', 'row']}
        justifyContent={['center', 'space-evenly']}
        alignItems={'center'}
      >
        {room.map((roomdata, index) => (
          <Card key={index} my={'5'} boxShadow={'0 0 10px black'}>
            <CardBody>
              <Image
                height={['20vh', '20vh']}
                borderRadius={'10'}
                src={roomdata.imageurl[0]}
              />
              <Stack mt={'6'} spacing={'5'}>
                <Heading size={'md'}>{roomdata.name}</Heading>
                <Text>Free wifi, Ac, Parking</Text>
                <Heading size={'sm'}>Max count : {roomdata.maxcount}</Heading>
                <Heading size={'sm'}>
                  Phone number : {roomdata.phonenumber}
                </Heading>
                <Heading size={'sm'}>type : {roomdata.type} </Heading>
                <Heading size={'sm'}>Price : {roomdata.rentperday} </Heading>
              </Stack>
            </CardBody>
            <CardFooter>
              <HStack>
                {fromdate && todate && (
                  <Link to={`/booking/${roomdata._id}/${fromdate}/${todate}`}>
                    <Button colorScheme="yellow">Book now</Button>
                  </Link>
                )}

                <Button
                  onClick={() => handleViewDetails(roomdata)}
                  colorScheme="yellow"
                >
                  View details
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
      </Stack>

      {selectedRoom && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedRoom.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <HStack overflowX={'scroll'}>
                {selectedRoom.imageurl.map((imageUrl, index) => (
                  <Image
                    key={index}
                    height={['30vh', '50vh']}
                    width={['none', '900px']}
                    src={imageUrl}
                  />
                ))}
              </HStack>
              <p>{selectedRoom.description}</p>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
}

export default Booking;
