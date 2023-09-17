// import Uploader from "./components/Uploader.js";
import Goals from "./components/Goals/Goals.js";
import HomePlaceholder from "./components/HomePlaceholder.js";
import { ChakraProvider, extendTheme, Heading } from "@chakra-ui/react";
import "@fontsource/manrope";

import React, { useState, useEffect } from "react";
import Chat from "./Chat.js";
import { Button, ButtonGroup } from "@chakra-ui/react";
import './index.css';
// import {ReactComponent as ReactLogo} from '.uploadFile.svg';

function App() {
  const GoalGroups = ["Memorization", "Explanation", "Application", "Analysis"];
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [notes, setNotes] = useState("");
  const exampleNotes =
    "A distributed system is a system whose components are located on different networked computers, which communicate and coordinate their actions by passing messages to one another. Distributed computing is a field of computer science that studies distributed systems." +
    "The components of a distributed system interact with one another in order to achieve a common goal. Three significant challenges of distributed systems are: maintaining concurrency of components, overcoming the lack of a global clock, and managing the independent failure of components. When a component of one system fails, the entire system does not fail.[3] Examples of distributed systems vary from SOA-based systems to massively multiplayer online games to peer-to-peer applications." +
    "A computer program that runs within a distributed system is called a distributed program, and distributed programming is the process of writing such programs. There are many different types of implementations for the message passing mechanism, including pure HTTP, RPC-like connectors and message queues.[6]" +
    "Distributed computing also refers to the use of distributed systems to solve computational problems. In distributed computing, a problem is divided into many tasks, each of which is solved by one or more computers, which communicate with each other via message passing.";

  useEffect(() => {
    setNotes(exampleNotes);
  }, []);

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
    },
  });

  if (shouldRedirect) {
    return (
      <ChakraProvider theme={theme}>
        <Chat />
      </ChakraProvider>
    );
  }

  if (shouldRedirect) {
    return (
      <ChakraProvider>
        <Chat notes={notes} />
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider theme={theme}>
      <HomePlaceholder />

      {/* Upload notes */}
      <div className="uploadHeading">
        <Heading size="md">Upload your notes</Heading>
        <form action="" className="uploadNote">
          <input type="file" accept="image/*" />
        </form>
      </div>

      {/* Goals */}
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
