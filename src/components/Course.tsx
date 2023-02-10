import React from 'react'
import { Button, Box, Text } from '@chakra-ui/react'

const Course = ({ courseObj, clickedCallback }) => {

  // Pill-shaped button that 

  return (
    <Button onClick={() => { clickedCallback(courseObj) }} colorScheme="purple" size="sm"  >{courseObj?.code || courseObj.join(" or ")}</Button>


  )
}

export default Course