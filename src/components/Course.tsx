import React from 'react'
import { Button, Box, Text, Badge, Tooltip } from '@chakra-ui/react'

const Course = ({ courseObj, clickedCallback }) => {
  const [isSelected, setIsSelected] = React.useState(false)
  // Pill-shaped button that 

  const onClick = () => {
    setIsSelected(!isSelected)
    clickedCallback(courseObj)
  }

  return (
    <Tooltip label={courseObj?.title} aria-label={courseObj?.title} placement="top">
      <Button variant={
        isSelected ? "solid" : "outline"

      }
        borderRadius="full" onClick={onClick} colorScheme="purple" size="sm"  >{courseObj?.code || courseObj.join(" or ")}</Button>
    </Tooltip>


  )
}

export default Course