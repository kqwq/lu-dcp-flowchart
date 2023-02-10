import React from 'react'
import { Box, Button, Container, Heading, InputGroup, Text, VStack } from '@chakra-ui/react'
import { navigate } from 'vite-plugin-ssr/client/router'
import {
  AutoComplete,
  AutoCompleteGroup,
  AutoCompleteGroupTitle,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { Flex, FormControl, FormHelperText, FormLabel } from "@chakra-ui/react";


const Page = () => {
  const continents = {
    africa: ["nigeria", "south africa"],
    asia: ["japan", "south korea"],
    europe: ["united kingdom", "russia"],
  };

  return (
    <>
      <Container maxWidth="xl">
        <VStack justify="center" >
          <Heading as="h1" size="2xl" mb="4">Select a major</Heading>



        </VStack>

      </Container>
      <Flex pt="48" justify="center" align="center" w="full">

        <FormControl w="60">
          <FormLabel>Olympics Soccer Winner</FormLabel>
          <AutoComplete openOnFocus>
            <AutoCompleteInput variant="filled" />
            <AutoCompleteList>
              {Object.entries(continents).map(([continent, countries], co_id) => (
                <AutoCompleteGroup key={co_id} showDivider>
                  <AutoCompleteGroupTitle textTransform="capitalize" color="red">
                    {continent}
                  </AutoCompleteGroupTitle>
                  {countries.map((country, c_id) => (
                    <AutoCompleteItem
                      key={c_id}
                      value={country}
                      textTransform="capitalize"
                    >
                      {country}
                    </AutoCompleteItem>
                  ))}
                </AutoCompleteGroup>
              ))}
            </AutoCompleteList>
          </AutoComplete>
          <FormHelperText>Who do you support.</FormHelperText>
        </FormControl>
      </Flex>
    </>
  )
}

export default { Page }