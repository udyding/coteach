import { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import { Bot } from "./Bot.js";
import { User } from "./UserCurrent.js";
import { UserStatic } from "./UserStatic.js";

import { generateQuestions } from "./chatFunctions/generateQuestions.js";
import { getResponse } from "./chatFunctions/getResponse.js";

export function Chat({ notes }) {
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
    <main>
      <Heading size="md">Chat</Heading>
      <div>
        <Bot text="Hey there! Let's start learning." />
        {chatHistory.map((entry) => {
          if (entry.user_name === "Chatbot") {
            return <Bot text={entry.text} />;
          } else {
            return <UserStatic text={entry.text} />;
          }
        })}
      </div>
      <div>
        {currentText && currentText.user_name === "Chatbot" && (
          <User
            setInput={setCurrentInput}
            setCurrentInputIndex={setCurrentInputIndex}
            key={currInputIndex}
          />
        )}
        {/* <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={currentInput}
            style={{ background: "red" }}
            onChange={(e) => setCurrentInput(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form> */}
      </div>
    </main>
  );
}

export default Chat;
