// AboutUsPage.js

import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const AboutUsPage = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={6}>
        About Us
      </Heading>
      <Text fontSize="lg" mb={4}>
        Welcome to StayComfort!
      </Text>
      <Text fontSize="lg" mb={4}>
        At StayComfort, we're passionate about providing you with the best
        possible travel experience. We strive to offer a seamless and enjoyable
        booking process, making it easy for you to find the perfect
        accommodation for your next adventure.
      </Text>

      <Box mt={8}>
        <Heading as="h2" size="lg" mb={4}>
          Our Mission
        </Heading>
        <Text fontSize="lg" mb={4}>
          Our mission is to connect travelers with their ideal accommodations,
          ensuring a smooth and hassle-free booking experience. We believe in
          simplifying travel planning and making it accessible to everyone,
          allowing you to focus on creating beautiful memories.
        </Text>
      </Box>

      <Box mt={8}>
        <Heading as="h2" size="lg" mb={4}>
          Our Vision
        </Heading>
        <Text fontSize="lg" mb={4}>
          We envision a world where travel is effortless, where anyone can
          explore the globe with confidence and excitement. By providing a wide
          range of accommodation options and user-friendly booking tools, we aim
          to transform the way people plan their trips.
        </Text>
      </Box>

      <Box mt={8}>
        <Heading as="h2" size="lg" mb={4}>
          Our Values
        </Heading>
        <Text fontSize="lg" mb={4}>
          <strong>Customer-Centricity:</strong> Putting our customers at the
          heart of everything we do, ensuring their needs and preferences are
          prioritized.
        </Text>
        <Text fontSize="lg" mb={4}>
          <strong>Integrity:</strong> Upholding honesty, transparency, and
          ethical behavior in all our interactions and transactions.
        </Text>
        <Text fontSize="lg" mb={4}>
          <strong>Innovation:</strong> Embracing innovation to enhance our
          platform, services, and user experience continuously.
        </Text>
        <Text fontSize="lg" mb={4}>
          <strong>Collaboration:</strong> Fostering a collaborative culture,
          working closely with our partners and customers to achieve shared
          goals.
        </Text>
      </Box>

      <Box mt={8}>
        <Heading as="h2" size="lg" mb={4}>
          Our Team
        </Heading>
        <Text fontSize="lg" mb={4}>
          Our dedicated team at StayComfort is composed of travel enthusiasts,
          technology experts, and customer service professionals. We are
          committed to helping you make informed decisions and creating
          unforgettable travel experiences.
        </Text>
        <Text fontSize="lg" mb={4}>
          Meet some of our team members:
        </Text>
        <Text fontSize="lg" mb={2}>
          <strong>[Harsh V Khatri]:</strong> Founder and visionary leader,
          bringing years of industry expertise and a passion for making travel
          accessible to all.
        </Text>
        <Text fontSize="lg" mb={2}>
          <strong>[Viral V Khatri]:</strong> Customer Support Manager,
          overseeing a team dedicated to providing exceptional customer service
          and support.
        </Text>
        <Text fontSize="lg" mb={4}>
          <strong>[Shakshi V Khatri]:</strong> Technology Director, leading our
          efforts in delivering a seamless and reliable booking platform.
        </Text>
      </Box>

      <Box mt={8}>
        <Heading as="h2" size="lg" mb={4}>
          Contact Us
        </Heading>
        <Text fontSize="lg" mb={2}>
          We're always here to assist you. If you have any questions, concerns,
          or feedback, please don't hesitate to get in touch with us.
        </Text>
        <Text fontSize="lg" mb={2}>
          <strong>Phone:</strong> +123 456 7890
        </Text>
        <Text fontSize="lg" mb={2}>
          <strong>Email:</strong> StayComfort@gmail.com
        </Text>
        <Text fontSize="lg" mb={4}>
          <strong>Address:</strong> 1234 Street, Kitchner, Canada
        </Text>
      </Box>

      <Text fontSize="lg" mt={8}>
        Thank you for choosing StayComfort for your travel needs. We look
        forward to helping you plan your next adventure!
      </Text>
    </Box>
  );
};

export default AboutUsPage;
