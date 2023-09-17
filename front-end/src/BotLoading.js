import { Flex, Image, Tag, Text } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import franklin from "./assets/franklin.png";

export const BotLoading = () => {
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
          <motion.div
            animate={{ scale: [0.8, 1, 0.8] }}
            transition={{ ease: "easeIn", duration: 1, repeat: Infinity }}
          >
            <Image src={franklin} htmlWidth="90" fit alt="franklin" />
          </motion.div>
          <Tag
            size="md"
            fontWeight="bold"
            justifyContent="center"
            variant="subtle"
            colorScheme="orange"
          >
            Franklin
          </Tag>
        </Flex>
        <div >
          
        </div>
      </Flex>
    </motion.div>
  );
};
