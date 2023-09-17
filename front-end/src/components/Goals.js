import { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Heading, Text } from "@chakra-ui/react";
import "../index.css";

function Goals() {
  const selectedStyle = {
    color: "white",
    backgroundColor: "#683F19"
  }
  const defaultStyle = {
    color: "#683F19",
    backgroundColor: "white",
  };

  const GoalsArray = ['Memorization', 'Explanation', 'Application', 'Analysis']
  return (
    <main>
      <Heading size="md" style ={{color: "#683F19"}}>What are your goals?</Heading>
      <Text fontSize="sm" className="goalDescription">
        Select all that apply
      </Text>
      <div className="button-container">
        {GoalsArray.map((goal, index) => (
          <Button variant="outline" className="custom-button" onClick={() => {

          }}>
            {goal}
          </Button>
        ))}
      </div>
    </main>
  );
}

export default Goals;
