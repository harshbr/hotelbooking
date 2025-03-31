import {
  Box,
  Stack,
  Link,
  Text,
  VStack,
  HStack,
  Heading,
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" bg="gray.900" color="white" py={{ base: '6', md: '8' }}>
      <Stack
        direction={['column', 'row']}
        justifyContent={['center', 'space-evenly']}
        alignItems={'center'}
        flexWrap={'wrap'}
      >
        <Box>
          <VStack>
            <Text fontSize="xl" fontWeight="bold" mb="2">
              Contact Us
            </Text>
            <Heading size={'sm'}>Stay Comfort</Heading>
            <Text>1234 Street, Kitchner, Canada</Text>
            <Text>Email: StayComfort@example.com</Text>
            <Text>Phone: +123 456 7890</Text>
          </VStack>
        </Box>
        <Box>
          <VStack>
            <Text fontSize="xl" fontWeight="bold" mb="2">
              Quick Links
            </Text>
            <Link href="/">Home</Link>
            <Link href="/bookroom">Rooms</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact Us</Link>
          </VStack>
        </Box>

        <Box>
          <Text fontSize="xl" fontWeight="bold" mb="2">
            Follow Us
          </Text>
          <HStack>
            <Link href="#" target="_blank">
              <FaFacebook />
            </Link>
            <Link href="#" target="_blank">
              <FaTwitter />
            </Link>
            <Link href="#" target="_blank">
              <FaInstagram />
            </Link>
          </HStack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
