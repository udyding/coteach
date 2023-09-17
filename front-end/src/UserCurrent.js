import you from "./assets/you.png";
import pause from "./assets/pause.svg";
import play from "./assets/play.svg";
import { Flex, Image, Tag, Text, Button } from "@chakra-ui/react";
import useSpeechToText from "react-hook-speech-to-text";

export const User = ({ onFinish, onChange }) => {
  const {
    error,
    interimResult,
    isRecording,
    listening,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;
  console.log(interimResult, results);

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
        {results}
        {interimResult}

        <Flex flexDirection="column" gap={4}>
          <Text fontSize="3xl" color="yellow.900">
            {results.reduce((wholeTranscript, result) => {
              if (!result.transcript) return wholeTranscript;
              return wholeTranscript + " " + result.transcript;
            }, "")}
            {interimResult}
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
              onClick={() => {
                console.log(results);
                console.log(listening);
              }}
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
