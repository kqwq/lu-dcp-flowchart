import React from 'react'
import { Box, Button, Container, Heading, InputGroup, Text, VStack } from '@chakra-ui/react'
import { navigate } from 'vite-plugin-ssr/client/router'
import CourseSelectionInput from '../../components/CourseSelectionInput'


const Page = () => {

  return (
    <>
      <Container maxWidth="xl">
        <VStack justify="center" >
          <Heading as="h1" size="2xl" mb="4">Select a major</Heading>

          <CourseSelectionInput />

        </VStack>

      </Container>

    </>
  )
}

export default { Page }