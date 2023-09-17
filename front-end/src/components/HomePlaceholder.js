import { Flex, Text, Image } from "@chakra-ui/react";
import bg from '../assets/gradient.png'
import bookman from '../assets/walking_book.png'

function HomePlaceholder() {
  return (
    <Flex flexDirection='column' backgroundImage={bg} backgroundPosition="center" style={{
      height: "100%",
      width: "40%",
      backgroundSize: "cover",
      padding: "100px",
      position: "relative"
    }} gap={6} >
      <Text fontSize='5xl' color='yellow.900' fontWeight='extrabold'>
        Welcome to CoTeach, <Text style={{
          fontWeight: "normal"
        }}> your tutor in training </Text>
      </Text>
      <Text fontSize='xl' color='yellow.900'>
        Upload your notes to teach Franklin custom questions that confirm your understanding of your notes.
      </Text>
  
      <Image src={bookman} style={{
        position: "absolute",
        bottom: "2%",
        left: 0,
        width: "300px",
      }} />
      
      {/* example questions blobs */}
      {/* <Flex style={{
        backgroundColor: "#683F19",
        color: "#FFF5DF",
        padding: "28px",
        borderRadius: "16px",
        position: "absolute",
        bottom: 200,
        right: -30,
        width: "340px",
      }} gap={4} >
        <Text fontWeight="bold" fontSize="xl">Q1</Text>
        <Text fontSize="md">How does rule-based thinking differ from analogical thinking?</Text>
      </Flex>

      <Flex style={{
        backgroundColor: "#FFF5E3",
        color: "#382323",
        padding: "28px",
        borderRadius: "16px",
        position: "absolute",
        bottom: 50,
        right: -50,
        width: "300px",
        boxShadow: "0px 4px 30px 0px rgba(113, 58, 13, 0.10)",
      }} gap={4}  >
        <Text fontWeight="bold" fontSize="xl">Q2</Text>
        <Text fontSize="md">Describe the difference between the habits of various attachment styles.</Text>
      </Flex> */}

    </Flex>
  );
}

export default HomePlaceholder;
