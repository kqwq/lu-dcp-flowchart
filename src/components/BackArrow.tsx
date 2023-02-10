import { ArrowBackIcon } from '@chakra-ui/icons'
import { Link, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'
import { IoReturnUpBack } from 'react-icons/io5'

const BackButton = ({ destination, children = "Go back" }) => {

  return (
    <NextLink href={destination} passHref>
      <Link as="span" display="flex" alignItems="center" color="blue.500" mb="4">
        <Icon as={IoReturnUpBack} w={6} h={6} mr={2} />
        {children}
      </Link>
    </NextLink>
  )
}

export default BackButton