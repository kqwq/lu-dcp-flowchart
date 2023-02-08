import { Container, Heading, Text } from '@chakra-ui/react'
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
    <>
      <Navbar />
      <Container mt="65px" textAlign={"left"}>
        <Heading size="lg">LU DCP Flowchart Maker</Heading>
        <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi voluptates sit recusandae natus ea nam quisquam, praesentium dolores minus ut eaque fugiat ad, molestiae cupiditate, porro temporibus aspernatur perspiciatis magni.</Text>

        {/* Three dropdown inputs: Program year, school, degree program */}

      </Container>
    </>
  )
}

export default Home