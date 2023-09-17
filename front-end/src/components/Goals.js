import { useState } from "react";
import { motion } from 'framer-motion'
import { Box, Flex } from "@chakra-ui/react";
import { Heading, Text } from "@chakra-ui/react";
import "../index.css";

const ButtonWrapper = ({ goal }) => {
  const [isSelected, setIsSelected] = useState(false)
  const selectedStyle = {
    color: "#FFF6E9",
    backgroundColor: "#683F19",
    border: "solid 1px #683F19",
    padding: "12px 16px",
    borderRadius: "8px",
    transition: "background-color 0.2s ease",
    cursor: 'pointer',
  }
  const defaultStyle = {
    border: "solid 1px #683F19",
    backgroundColor: "transparent",
    padding: "12px 16px",
    borderRadius: "8px",
    transition: "background-color 0.2s ease",
    cursor: 'pointer',
  };

  return (
    <Box style={ isSelected ? selectedStyle : defaultStyle } onClick={() => {
      setIsSelected(!isSelected)
    }}>
      {goal}
    </Box>
  )

}

function Goals() {
  const GoalsArray = ['Memorization', 'Explanation', 'Application', 'Analysis']
  return (
    <motion.main
      style={{
        width: "40%",
      }}
      initial={{ 
        opacity: 0,
        y: -10,
      }}
      animate={{ 
        opacity: 1,
        y: 0
      }}
    transition={{ ease: "easeOut", duration: 1, delay: 0.6, }}
  >
      <Heading size="md" style ={{color: "#683F19"}}>What are your goals?</Heading>
      <Text fontSize="sm" className="goalDescription">
        Select all that apply
      </Text>
      <Flex gap={2}>
        {GoalsArray.map((goal, index) => (
          <ButtonWrapper goal={goal} />
        ))}
      </Flex>
    </motion.main>
  );
}

export default Goals;
