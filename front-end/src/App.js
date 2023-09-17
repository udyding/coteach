import Uploader from './components/Uploader.js';
import Goals from "./components/Goals/Goals.js";
import HomePlaceholder from "./components/HomePlaceholder.js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import '@fontsource/manrope'

import React, {useState} from 'react';
import Chat from './Chat.js';
import { Button, ButtonGroup } from "@chakra-ui/react";

function App() {

const GoalGroups = ["Memorization", "Explanation", "Application", "Analysis"];
const [shouldRedirect, setShouldRedirect] = useState(true);

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
      <Uploader />
      <Goals />
      <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
            />
            <Button type="submit">Start Teaching</Button>
        </form>
      </div>
    </ChakraProvider>
  );
}

//if submitted load chat app

export default App;
