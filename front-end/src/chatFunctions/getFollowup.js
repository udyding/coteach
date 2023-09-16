import axios from "axios";

// REPLACE THESE
const notes =
  "A distributed system is a system whose components are located on different networked computers, which communicate and coordinate their actions by passing messages to one another. Distributed computing is a field of computer science that studies distributed systems." +
  "The components of a distributed system interact with one another in order to achieve a common goal. Three significant challenges of distributed systems are: maintaining concurrency of components, overcoming the lack of a global clock, and managing the independent failure of components. When a component of one system fails, the entire system does not fail.[3] Examples of distributed systems vary from SOA-based systems to massively multiplayer online games to peer-to-peer applications." +
  "A computer program that runs within a distributed system is called a distributed program, and distributed programming is the process of writing such programs. There are many different types of implementations for the message passing mechanism, including pure HTTP, RPC-like connectors and message queues.[6]" +
  "Distributed computing also refers to the use of distributed systems to solve computational problems. In distributed computing, a problem is divided into many tasks, each of which is solved by one or more computers, which communicate with each other via message passing.";

// WILL BE STORED IN SESSION STORAGE
const q = "1. What is a distributed system?";

export async function getFollowup(userAnswer) {
  // get the followup question for the user's response to the previous question
  const prompt =
    "My answer is: " +
    userAnswer +
    "Comment on how well I answered the question, then ask a follow up open-ended question that is still contained within the notes.";

  try {
    const response = await axios.post(
      "https://api.cohere.ai/v1/chat",
      {
        message: prompt,
        temperature: 0.3,
        stream: false,
        chat_history: [
          {
            user_name: "User",
            text:
              "I'm trying to study for a test. Ask me a question based on these notes: " +
              notes,
          },
          { user_name: "Chatbot", text: q },
        ],
      },
      {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          authorization: "Bearer EJDmtVpZttvmY62fPWvcFM5mSHTTBcwvizKgkUna",
        },
      }
    );
    const feedback = response.data.text;
    return feedback;
  } catch (err) {
    console.log(err);
  }
}

getFollowup("A system that is distributed");
