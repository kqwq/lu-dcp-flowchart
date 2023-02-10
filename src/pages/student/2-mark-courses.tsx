import React from 'react'
import { Box, Button, Container, Heading, InputGroup, Text, VStack, Flex } from '@chakra-ui/react'
import DCPSelectionInput from '../../components/DCPSelectionInput'
import { useRouter } from 'next/router'
import Categories from '../../components/dcpViews/Categories'


const Page = () => {

  const router = useRouter()

  const major = router.query.major;
  const [coursesFinished, setCoursesFinished] = React.useState([])


  return (
    <>
      <Flex h="calc(100vh - 60px)">
        <Flex justify="center" align="center" w="full"  >
          <VStack spacing={10} >
            <Box w="100%">
              <Heading as="h1" size="2xl" mb="4" >2. Mark Courses</Heading>
            </Box>

            <Categories major={major} />

            <Flex w="100%" justify="right">
              <Button colorScheme="blue" size="lg" onClick={() => {
                router.push({
                  pathname: '/flowchart',
                  query: {
                    major: major,
                    coursesFinished: coursesFinished

                  }
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