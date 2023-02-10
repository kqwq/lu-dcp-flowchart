import React from 'react'
import {
  AutoComplete,
  AutoCompleteGroup,
  AutoCompleteGroupTitle,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { Flex, FormControl, FormHelperText, FormLabel } from "@chakra-ui/react";
import { degreeNamesByCollege } from '../assets/degrees';



const DCPSelectionInput = ({ setMajor }) => {

  return (
    <FormControl w={{
      base: "100%",
      sm: "550px"
    }}
    >
      <FormLabel>Degree Completion Plan</FormLabel>
      <AutoComplete openOnFocus suggestWhenEmpty selectOnFocus onChange={setMajor
      }
      >
        <AutoCompleteInput variant="filled" size="lg" />
        <AutoCompleteList w={"full"} maxH={"300px"} overflow={"auto"}  >
          {Object.entries(degreeNamesByCollege).map(([continent, countries], co_id) => (
            <AutoCompleteGroup key={co_id} showDivider>
              <AutoCompleteGroupTitle textTransform="capitalize">
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
      <FormHelperText>Incomplete list.</FormHelperText>
    </FormControl >
  )
}

export default DCPSelectionInput