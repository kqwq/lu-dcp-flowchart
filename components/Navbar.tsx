import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Box pos="fixed" top="0" left="0" w="100%" h="60px" >
      <Box maxW="1200px" mx="auto" h="100%" display="flex" alignItems="center" justifyContent="space-around" >
        <Text>LU DCP Flowchart</Text>

      </Box>
    </Box>
  )
}

export default Navbar