import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Heading,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { RiMenu5Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
function Header() {
  const auth = localStorage.getItem('email');
  const { onOpen, onClose, isOpen } = useDisclosure();
  function logouthandler() {
    localStorage.removeItem('email');
    localStorage.removeItem('token');
  }
  function handleOptionClick() {
    onClose();
  }

  return (
    <div>
      <nav style={{ display: 'flex', position: 'sticky', top: '0' }}>
        <Button m={'4'} colorScheme="yellow" onClick={onOpen}>
          <RiMenu5Line />
        </Button>

        <Drawer isOpen={isOpen} onClose={onClose} placement="left">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth={'2px'}>
              <Heading size={'md'} variant={'ghost'}>
                hello, {auth}
              </Heading>
            </DrawerHeader>
            <DrawerBody>
              <VStack alignItems={'flex-start'} spacing={'5'}>
                <Link to={'/'} onClick={handleOptionClick}>
                  <Button variant={'ghost'}>Home</Button>
                </Link>
                <Link to={'/bookroom'} onClick={handleOptionClick}>
                  <Button variant={'ghost'}>BookRoom</Button>
                </Link>
                <Link to={'/bookinghistory'} onClick={handleOptionClick}>
                  <Button variant={'ghost'}>Booking history</Button>
                </Link>
                <Link to={'/aboutus'}>
                  <Button variant={'ghost'} onClick={handleOptionClick}>
                    About us
                  </Button>
                </Link>
              </VStack>
              {auth ? (
                <VStack width={'80%'} position={'absolute'} bottom={'7%'}>
                  <Link to={'/'} onClick={handleOptionClick}>
                    <Button onClick={logouthandler} colorScheme={'yellow'}>
                      Logout
                    </Button>
                  </Link>
                </VStack>
              ) : (
                <HStack
                  width={'80%'}
                  position={'absolute'}
                  bottom={'15%'}
                  justifyContent={'space-evenly'}
                >
                  <Link to={'/Signup'} onClick={handleOptionClick}>
                    <Button colorScheme={'yellow'}>Sign up</Button>
                  </Link>
                  <p>OR</p>
                  <Link to={'/Signin'} onClick={handleOptionClick}>
                    <Button colorScheme={'yellow'}>Sign in</Button>
                  </Link>
                </HStack>
              )}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </nav>
    </div>
  );
}

export default Header;
