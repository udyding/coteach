import you from "./assets/you.png";
import { Flex, Image, Tag, Text } from "@chakra-ui/react";

export const UserStatic = ({ text }) => {
  return (
    <>
      <Flex gap={6}>
        <Flex flexDirection="column" gap={2}>
          <Image src={you} htmlWidth="90" fit alt="you" />
          <Tag
            size="md"
            fontWeight="bold"
            justifyContent="center"
            variant="subtle"
            colorScheme="yellow"
          >
            You
          </Tag>
        </Flex>
        <div className="typewriter">
          <Text fontSize="3xl" color="orange.500">
            {text}
          </Text>
        </div>
      </Flex>
    </>
  );
};
