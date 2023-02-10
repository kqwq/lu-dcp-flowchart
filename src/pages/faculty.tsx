import { Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const BlueTextThing = ({ children }) => {
  const orange = 'orange.500';
  const brown = '#40240d'

  return <Text

    _hover={
      {
        color: orange,
        bg: brown,
      }
    }
    fontSize="xl" fontFamily="" my={10} borderRadius={20} p={10} color={brown} bg="orange.500">{children}</Text>

}

const BlueThingColumn = ({ children }) => {
  return <>
    <BlueTextThing>I love TypeScript</BlueTextThing>
    <BlueTextThing>I love Pizza</BlueTextThing>
    <BlueTextThing>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, minima eum numquam magni quam, reiciendis, tenetur officia quis porro sit quidem corporis excepturi dicta expedita aspernatur magnam nemo maiores illo.</BlueTextThing>
  </>
}

const FacultyPage = () => {
  return (
    <Container>
      <Heading size="2xl">Faculty Page</Heading>
      <BlueThingColumn>f</BlueThingColumn>

      <BlueThingColumn>f</BlueThingColumn>


      <BlueThingColumn>f</BlueThingColumn>
    </Container>
  )
}

export default FacultyPage