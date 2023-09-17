import { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import { Bot } from "./Bot.js";
import { User } from "./User.js";

import { generateQuestions } from "./chatFunctions/generateQuestions.js";
import { getResponse } from "./chatFunctions/getResponse.js";

export function Chat({ notes }) {
  const [chatHistory, setChatHistory] = useState([]);
  const [getFollowupQuestion, setGetFollowupQuestion] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [currQuestion, setCurrQuestion] = useState(1);
  const [currentInput, setCurrentInput] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
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
  };

  const currentText = chatHistory.at(-1);

  return (
    <main>
      <Heading size="md">Chat</Heading>
      <div>
        <p>old</p>
        {chatHistory.slice(0, -1).map((entry) => {
          return (
            <h1>
              {entry.user_name} {entry.text}
            </h1>
          );
        })}
        {currentText ? (
          <>
            <h1>CURRENT</h1>
            <h3>
              {currentText.user_name} : {currentText.text}
            </h3>
          </>
        ) : (
          <></>
        )}
      </div>
      {currentText ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={currentInput}
            style={{ background: "red" }}
            onChange={(e) => setCurrentInput(e.target.value)}
            disabled={currentText.user_name === "User"}
          />
          <button type="submit" disabled={currentText.user_name === "User"}>
            Submit
          </button>
        </form>
      ) : (
        <></>
      )}
    </main>
  );
}

export default Chat;
