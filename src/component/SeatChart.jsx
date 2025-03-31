import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const Seat = ({ seatNumber, isBooked, isSelected, onSelectSeat }) => {
  const seatStyle = {
    backgroundColor: isBooked ? 'red' : isSelected ? 'grey' : 'green',
    border: '1px solid black',
    width: '40px',
    height: '40px',
    margin: '5px',
    cursor: isBooked ? 'not-allowed' : 'pointer',
  };

  const handleClick = () => {
    if (!isBooked) {
      onSelectSeat(seatNumber);
    }
  };

  return (
    <Box onClick={handleClick} {...seatStyle} disabled={isBooked}>
      <Text textAlign="center" color="white">
        {seatNumber}
      </Text>
    </Box>
  );
};

const SeatChart = () => {
  const rows = 6; // Number of rows
  const seatsPerRow = 6; // Number of seats per row
  const seatCount = rows * seatsPerRow;

  const bookedSeats = [5, 10, 15, 20]; // Simulated booked seats
  const [selectedSeats, setSelectedSeats] = React.useState([]);

  const handleSeatSelection = seatNumber => {
    if (bookedSeats.includes(seatNumber)) {
      alert('Seat already booked.');
      return;
    }

    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  return (
    <div>
      <h1>Bus Seat Chart</h1>
      <Flex flexDirection="column" alignItems="center">
        {[...Array(rows).keys()].map(row => (
          <Flex key={row} justifyContent="center">
            {[...Array(seatsPerRow).keys()].map(seat => (
              <Seat
                key={seat}
                seatNumber={row * seatsPerRow + seat + 1}
                isSelected={selectedSeats.includes(
                  row * seatsPerRow + seat + 1
                )}
                isBooked={bookedSeats.includes(row * seatsPerRow + seat + 1)}
                onSelectSeat={handleSeatSelection}
              />
            ))}
          </Flex>
        ))}
      </Flex>
      <div>
        <h2>Selected Seats:</h2>
        <p>{selectedSeats.join(', ')}</p>
      </div>
    </div>
  );
};

export default SeatChart;
