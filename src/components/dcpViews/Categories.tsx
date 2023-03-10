import React from 'react'
import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import Course from '../Course'
import { degrees } from '../../assets/degrees'
import { gened } from '../../assets/gened'

const showError = (message) => {
  return (
    <Box w="100%" h="100%" bg="white" borderRadius="full" display="flex" alignItems="center" justifyContent="center" >
      <Text color="red">{message}</Text>
    </Box>
  )
}

const GenEdSection = ({ degree }) => {
  console.log('degree', degree);

  const genedCourses = gened[degree.degreeType]
  if (!genedCourses) {
    return showError("Error: cannot find gen ed courses")
  }
  return (
    <VStack >
      <Heading size="md" mt="4" >General Education</Heading>
      {
        genedCourses.map(c => <Course courseObj={c} clickedCallback={() => { }} key={c.code} />)
      }
    </VStack>)
}

const MajorSection = ({ degree }) => {
  const majorCategories = Object.keys(degree.major)
  const majorCourses = degree.major;

  return (
    <VStack>
      {
        majorCategories.map((category, i) => {
          return (
            <>
              <Box key={i} w="100%" h="100%" bg="white" borderRadius="full" display="flex" alignItems="center" justifyContent="center" >
                <Heading size="md" mt="4">{category}</Heading>
              </Box>
              {
                majorCourses[category].map((course, i) => {
                  return (
                    <Course key={i} courseObj={course} clickedCallback={() => { }
                    } />
                  )
                })
              }
            </>

          )
        })
      }
    </VStack>
  )
}

const Categories = ({ major, setCoursesFinished }) => {
  console.log(major)

  if (major === undefined || major === '') {
    return showError("Error: no major selected")
  }

  const degree = degrees.find((degree) => {
    return major?.includes("(") ? `${degree.name} (${degree.subName})` === major : degree.name === major
  })

  if (!degree?.major) {
    return showError("Error: cannot find degree " + major)
  }




  return (
    <>
      <Box w="100%" h="100%" bg="white" borderRadius="full" display="flex" alignItems="center" justifyContent="center" >

        {/* Split grid into 1 or 2 columns bet */}
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GenEdSection degree={degree} />

          <MajorSection degree={degree} />
        </Grid>
      </Box>
    </>
  )
}

export default Categories