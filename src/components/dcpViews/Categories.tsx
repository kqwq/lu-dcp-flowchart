import React from 'react'
import { Box, Text, VStack } from '@chakra-ui/react'
import Course from '../Course'
import { degrees } from '../../assets/degrees'

const showError = (message) => {
  return (
    <Box w="100%" h="100%" bg="white" borderRadius="full" display="flex" alignItems="center" justifyContent="center" >
      <Text color="red">{message}</Text>
    </Box>
  )
}

const Categories = ({ major }) => {
  console.log(major)

  if (major === undefined || major === '') {
    return showError("Error: no major selected")
  }

  let degree = degrees.find((degree) => {
    return major?.includes("(") ? `${degree.name} (${degree.subName})` === major : degree.name === major
  })

  if (!degree?.major) {
    return showError("Error: cannot find degree " + major)
  }

  return (
    <>
      <Box w="100%" h="100%" bg="white" borderRadius="full" display="flex" alignItems="center" justifyContent="center" >
        <VStack>
          {

            Object.keys(degree.major).map((category, i) => {
              return (
                <>
                  <Box key={i} w="100%" h="100%" bg="white" borderRadius="full" display="flex" alignItems="center" justifyContent="center" >
                    <Text>{category}</Text>
                  </Box>
                  {
                    degree.major[category].map((course, i) => {
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
      </Box>
    </>
  )
}

export default Categories