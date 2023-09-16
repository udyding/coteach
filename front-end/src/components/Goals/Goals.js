import { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

function Goals() {
  return (
    <main>
      <Heading size='md'>What are your goals?</Heading>
      <h2>Select all that apply</h2>
      <Button colorScheme="black" variant="outline">
        Memorization
      </Button>
    </main>
  );
}

export default Goals;
