import you from "./assets/you.png";
import pause from "./assets/pause.svg";
import play from "./assets/play.svg";
import { Flex, Image, Tag, Text, Button } from "@chakra-ui/react";
import useSpeechToText from "react-hook-speech-to-text";
import { useState, useEffect, useRef } from "react";

export const User = ({ setInput, setCurrentInputIndex, key }) => {
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });
  const [userResponse, setUserResponse] = useState("");

  useEffect(() => {
    if (!isRecording && results.length) {
      console.log("RESULTS!!!!", results);
      const formattedResponse = results[results.length - 1].transcript;
      setUserResponse(formattedResponse);
    }
  }, [isRecording, results]);

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;
  const handleSubmit = () => {
    setInput(userResponse);
    setUserResponse("");
  };

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
            style={{
              backgroundColor: "#683F19",
              color: "#FFF6E9"
            }}
          >
            You
          </Tag>
        </Flex>

        <Flex flexDirection="column" gap={4}>
          <Text fontSize="4xl" color="yellow.900">
            {userResponse}
          </Text>

          <Flex gap={4}>
            <Button
              leftIcon={
                <Image
                  src={isRecording ? pause : play}
                  color="yellow.900"
                  height="20px"
                  width="20px"
                  alt="controls"
                />
              }
              onClick={() => {
                if (isRecording) stopSpeechToText();
                else startSpeechToText();
              }}
              fontWeight="extrabold"
              style={{
                border: "#D9BC9B solid 2px",
                backgroundColor: "transparent",
                color: "#683F19",
              }}
            >
              {isRecording ? "Stop Recording" : "Start Recording"}
            </Button>
            <Button
              onClick={handleSubmit}
              fontWeight="extrabold"
              style={{
                backgroundColor: "#F1E5D7",
                color: "#683F19",
              }}
            >
              Done
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
