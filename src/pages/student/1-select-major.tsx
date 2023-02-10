import React from 'react'
import { Box, Button, Container, Heading, InputGroup, Text, VStack, Flex } from '@chakra-ui/react'
import DCPSelectionInput from '../../components/DCPSelectionInput'
import { useRouter } from 'next/router'
import BackButton from '../../components/BackArrow'


const Page = () => {

  const router = useRouter()

  const [major, setMajor] = React.useState('')


  return (
    <>
      <Flex h="calc(100vh - 60px)">``
        <Flex justify="center" align="center" w="full"  >
          <VStack spacing={10} >
            <Box w="100%">
              <BackButton destination="/" />
              <Heading as="h1" size="lg" mb="4" >1. Select a major</Heading>
            </Box>

            <DCPSelectionInput setMajor={setMajor} />

            <Flex w="100%" justify="right">
              <Button colorScheme="blue" size="lg" isDisabled={
                major === ''
              } onClick={() => {
                router.push({

                  pathname: '/student/2-mark-courses',
                  query: { major: major }

                })
              }}>Next</Button>
            </Flex>
          </VStack>

        </Flex>
      </Flex>
    </>
  )
}

export default Page 