import React from 'react'
import { Box, Button, Container, Heading, InputGroup, Text, VStack, Flex, Link } from '@chakra-ui/react'
import DCPSelectionInput from '../../components/DCPSelectionInput'
import { useRouter } from 'next/router'
import Categories from '../../components/dcpViews/Categories'
import { ExternalLinkIcon, ArrowBackIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import BackButton from '../../components/BackArrow'

const Page = () => {

  const router = useRouter()

  const degreeCompletionLink = 'https://registration-ui-sl-course-registration.os.liberty.edu/course-registration/#/202240/degree-completion/'

  const major = router.query.major;
  const [coursesFinished, setCoursesFinished] = React.useState([])


  return (
    <>
      <Flex >
        <Flex justify="center" align="center" w="full"  >
          <VStack spacing={10} >
            <Box w="100%">
              <BackButton destination="/student/1-select-major">Go back to step 1</BackButton>
              <Heading as="h1" size="2xl" mb="4" >2. Courses</Heading>
              <Text>Mark in the courses you have already taken.
                This includes transfer credits, AP credits, and equivalent courses taken at Liberty or elsewhere.
                You can view by visiting <Link target={"_blank"} color="blue.500" href={degreeCompletionLink}>this link <ExternalLinkIcon /> </Link>.</Text>
            </Box>

            <Categories major={major} setCoursesFinished={setCoursesFinished} />

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