import React from 'react'
import { Button, Box, Text, Badge, Tooltip } from '@chakra-ui/react'

const Course = ({ courseObj, clickedCallback }) => {
  const [isSelected, setIsSelected] = React.useState(false)
  // Pill-shaped button that 

  const onClick = () => {
    setIsSelected(!isSelected)
    clickedCallback(courseObj)
  }

  let borderStyle = "2px solid";
  let colorScheme = "blue";
  let showTitle = courseObj?.code;
  let tooltipText = courseObj?.title;

  // There are 3 types of courseObj:
  // SINGLE COURSE    { code: "CS 1110", title: "Introduction to Computing Using Python" }
  // MULTIPLE CHOICE  [ { ... }, { ... } ]
  // ELECTIVE         [ "Math Elective", { ... }, { ... }, { ... } ]

  if (Array.isArray(courseObj)) {
    if (typeof courseObj[0] === "string") {
      // Elective
      colorScheme = "purple";
      showTitle = courseObj[0];
    } else {
      // Multiple choice
      showTitle = courseObj.map((course) => course.code).join(" or ");
      tooltipText = courseObj.map((course) => course.code + " - " + course.title).join("\n");
    }
  } else {
    // Single course
  }

  return (
    <Tooltip label={tooltipText} aria-label={tooltipText} placement="top" whiteSpace={"pre-wrap"}>
      <Button variant={
        isSelected ? "solid" : "outline"

      }
        m={1}
        border={borderStyle}
        minH="40px" h="40px"
        borderRadius="full" onClick={onClick} colorScheme={colorScheme} size="sm">{showTitle}</Button>
    </Tooltip>


  )
}

export default Course