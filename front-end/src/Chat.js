import { useState, useEffect, useRef } from "react";
import { Flex } from "@chakra-ui/react";
import { Bot } from "./Bot.js";
import { BotLoading } from "./BotLoading.js";
import { User } from "./UserCurrent.js";
import { UserStatic } from "./UserStatic.js";

import { generateQuestions } from "./chatFunctions/generateQuestions.js";
import { getResponse } from "./chatFunctions/getResponse.js";

export function Chat({ notes }) {
  const ref = useRef(null);
  const [franklinLoading, setFranklinLoading] = useState(true)
  const [chatHistory, setChatHistory] = useState([]);
  const [getFollowupQuestion, setGetFollowupQuestion] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [currQuestion, setCurrQuestion] = useState(1);
  const [currentInput, setCurrentInput] = useState("");
  const [currInputIndex, setCurrentInputIndex] = useState(0);

  useEffect(() => {
    async function getQuestions() {
      try {
        // generate chat questions
        const generatedQuestions = await generateQuestions(notes);
        setQuestions(generatedQuestions);
        setChatHistory([
          ...chatHistory,
          { user_name: "Chatbot", text: generatedQuestions[0] },
        ]);
        setFranklinLoading(false)
      } catch (err) {
        console.log(err);
      }
    }
    getQuestions();
  }, []);

  useEffect(() => {
    async function handleUserResponse() {
      const botResponse = await getResponse(currentInput, getFollowupQuestion, [
        ...chatHistory,
        { user_name: "User", text: currentInput },
      ]);
      const newResponses = [
        { user_name: "User", text: currentInput },
        { user_name: "Chatbot", text: botResponse },
      ];

      if (!getFollowupQuestion) {
        // move on to next question
        newResponses.push({
          user_name: "Chatbot",
          text: questions[currQuestion],
        });
      }

      setChatHistory([...chatHistory, ...newResponses]);
      setCurrQuestion(currQuestion + 1);
      setGetFollowupQuestion(!getFollowupQuestion);
    }
    if (currentInput) {
      handleUserResponse();
    }
  }, [currentInput]);

  const currentText = chatHistory && chatHistory[chatHistory.length - 1];

  return (
    <Flex flexDirection='column' gap={16} style={{
      margin: "100px",
      marginBottom: "200px",
    }}>
      <Flex gap={16} flexDirection='column'>
        <Bot text="Heyo, I'm Franklin. Let's start learning. Let me think of a couple questions..." />
        {chatHistory.map((entry) => {
          if (entry.user_name === "Chatbot") {
            return <Bot text={entry.text} />;
          } else {
            return <UserStatic text={entry.text} />;
          }
        })}
        {franklinLoading && (
          <BotLoading />
        )}
      </Flex>
      <div>
        {currentText && currentText.user_name === "Chatbot" && (
          <User
            ref={ref}
            setInput={setCurrentInput}
            setCurrentInputIndex={setCurrentInputIndex}
            key={currInputIndex}
          />
        )}
      </div>
    </Flex>
  );
}

export default Chat;
