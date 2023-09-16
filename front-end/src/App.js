import Uploader from './components/Uploader.js';
import Goals from "./components/Goals/Goals.js";
import HomePlaceholder from "./components/HomePlaceholder.js";
import { ChakraProvider } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";
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

if(shouldRedirect) {
    return <Chat/>;
}


  return (
    <ChakraProvider>
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
