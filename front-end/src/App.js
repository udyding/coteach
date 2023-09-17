import HomePlaceholder from "./components/HomePlaceholder.js";
import { ChakraProvider, extendTheme, Flex } from "@chakra-ui/react";
import '@fontsource/manrope'
import '@fontsource/manrope/200.css'
import '@fontsource/manrope/300.css'
import '@fontsource/manrope/400.css'
import '@fontsource/manrope/500.css'
import '@fontsource/manrope/600.css'
import '@fontsource/manrope/700.css'
import '@fontsource/manrope/800.css'

import React, {useState} from 'react';
import Chat from './Chat.js';
import { Button, ButtonGroup } from "@chakra-ui/react";

function App() {

const GoalGroups = ["Memorization", "Explanation", "Application", "Analysis"];
const [shouldRedirect, setShouldRedirect] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault();

    const shouldSubmitForm = true;

    if(shouldSubmitForm) {
        setShouldRedirect(true);
    } else {
        alert('Select the options above before moving forward')
    }
};

const theme = extendTheme({
  fonts: {
    heading: `'Manrope', sans-serif`,
    body: `'Manrope', sans-serif`,
    p: `'Manrope', sans-serif`,
  },
})

if(shouldRedirect) {
    return (
      <ChakraProvider theme={theme}>
        <Chat/>
      </ChakraProvider>
    )
}


  return (
    <ChakraProvider theme={theme}>
      <HomePlaceholder />
      <Flex>
        
      </Flex>
    </ChakraProvider>
  );
}

//if submitted load chat app

export default App;
