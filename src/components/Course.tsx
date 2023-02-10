import React from 'react'
import { Button, Box, Text } from '@chakra-ui/react'

const Course = ({ name, credits, clickedCallback, prereqs }) => {

  // Pill-shaped button that 

  return (
    <Box w="100%" h="100%" bg="white" borderRadius="full" display="flex" alignItems="center" justifyContent="center" >
      <Button w="100%" h="100%" borderRadius="full" onClick={() => {
        clickedCallback(name)
      }
      }>
        <Text>{name}</Text>
      </Button>
    </Box>

  )
}

export default Course