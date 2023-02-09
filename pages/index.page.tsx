import { Box, Button, Container, Heading, InputGroup, Text, VStack } from '@chakra-ui/react'
import { navigate } from 'vite-plugin-ssr/client/router'

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
      <Box h="100%" display="flex" justifyContent="center">
        <VStack spacing={10} justify="center">
          <Heading as="h1" size="3xl" mb="4">
            <Text as="span" color="blue.500">Who is using this site?</Text>
          </Heading>
          <InputGroup display={{ base: "block", md: "flex" }} justifyContent="center">
            <Button size="lg" onClick={() => {
              navigate('/student/1-select-major')
            }}>Student</Button>
            <Button size="lg" ml={5}>Faculty</Button>
          </InputGroup>
        </VStack>
      </Box >

    </Box >
  )
}

export default { Page: Home }