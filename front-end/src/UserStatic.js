import you from "./assets/you.png";
import { motion } from 'framer-motion'
import { Flex, Image, Tag, Text } from "@chakra-ui/react";

export const UserStatic = ({ text }) => {
  return (
    <motion.div
    initial={{
      y: -20,
      opacity: 0,
    }}
    animate={{
      y: 0,
      opacity: 1,
    }}
    exit={{
      opacity: 0,
    }}
    transition={{ ease: "easeOut", duration: 0.3 }}
    >
      <Flex gap={6}
        
      >
        <Flex flexDirection="column" gap={2}>
          <Image src={you} htmlWidth="90" fit alt="you" />
          <Tag
            size="md"
            fontWeight="bold"
            justifyContent="center"
            variant="subtle"
            style={{
              backgroundColor: "#683F19",
              color: "#FFF6E9"
            }}
          >
            You
          </Tag>
        </Flex>
        <div width="100%">
          <Text fontSize="4xl" color="yellow.900">
            {text}
          </Text>
        </div>
      </Flex>
    </motion.div>
  );
};
