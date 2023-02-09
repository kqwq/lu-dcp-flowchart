import { Box, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  const countries = [
    "nigeria",
    "japan",
    "india",
    "united states",
    "south korea",
  ];


  return (
    <Box h="100vh">
      // Vertically center the content
      <Container maxW="container.xl" h="100%" display="flex" alignItems="center">
        <Box>
          <Heading as="h1" size="4xl" mb="4">
            Welcome to the world of <br /> <Text as="span" color="blue.500">Chakra UI</Text>
          </Heading>
          <Text fontSize="xl" mb="8">
            Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.
          </Text>
          <Text fontSize="xl" mb="8">
            Here are some of the countries in the world:
          </Text>
          <ul>
            {countries.map((country) => (
              <li key={country}>{country}</li>
            ))}
          </ul>
        </Box>
      </Container>

    </Box>
  )
}

export default Home