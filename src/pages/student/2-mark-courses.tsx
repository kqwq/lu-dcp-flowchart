import React from 'react'
import { Box, Button, Container, Heading, InputGroup, Text, VStack, Flex } from '@chakra-ui/react'
import CourseSelectionInput from '../../components/CourseSelectionInput'
import { useRouter } from 'next/router'


const Page = () => {

  const router = useRouter()
  return (
    <>
      <Flex h="calc(100vh - 60px)">
        <Flex justify="center" align="center" w="full"  >
          <VStack spacing={10} >
            <Box w="100%">
              <Heading as="h1" size="2xl" mb="4" >Select a major</Heading>
            </Box>

            <CourseSelectionInput />

            <Flex w="100%" justify="right">
              <Button colorScheme="blue" size="lg" onClick={() => {
                router.push('/student/2-mark-courses')
              }}>Next</Button>
            </Flex>
          </VStack>

        </Flex>
      </Flex>
    </>
  )
}

export default Page