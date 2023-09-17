import HomePlaceholder from "./components/HomePlaceholder.js";
import { ChakraProvider, extendTheme, Flex } from "@chakra-ui/react";
import FileUpload from './components/FileUpload.js';
import '@fontsource/manrope'
import '@fontsource/manrope/200.css'
import '@fontsource/manrope/300.css'
import '@fontsource/manrope/400.css'
import '@fontsource/manrope/500.css'
import '@fontsource/manrope/600.css'
import '@fontsource/manrope/700.css'
import '@fontsource/manrope/800.css'
import Goals from "./components/Goals/Goals.js";

import React, { useState, useEffect } from "react";
import Chat from "./Chat.js";
import { Button, ButtonGroup } from "@chakra-ui/react";
import './index.css';
// import {ReactComponent as ReactLogo} from '.uploadFile.svg';

function App() {
  const GoalGroups = ["Memorization", "Explanation", "Application", "Analysis"];
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const shouldSubmitForm = true;

    if (shouldSubmitForm) {
      setShouldRedirect(true);
    } else {
      alert("Select the options above before moving forward");
    }
  };

const theme = extendTheme({
  fonts: {
    heading: `'Manrope', sans-serif`,
    body: `'Manrope', sans-serif`,
    p: `'Manrope', sans-serif`,
  },
})

  if (shouldRedirect) {
    return (
      <ChakraProvider>
        <Chat notes={notes} />
      </ChakraProvider>
    );
  }
  console.log('notes!!', notes.length)

  return (
    <ChakraProvider theme={theme}>
      <HomePlaceholder />
      {/* <Uploader /> */}
      <FileUpload setFileContent={setNotes} />
      <Goals />
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" />
          <Button type="submit">Start Teaching</Button>
        </form>
      </div>
    </ChakraProvider>
  );
}

//if submitted load chat app

export default App;
