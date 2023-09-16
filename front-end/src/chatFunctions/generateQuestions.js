import axios from "axios";

const notes =
  "A distributed system is a system whose components are located on different networked computers, which communicate and coordinate their actions by passing messages to one another. Distributed computing is a field of computer science that studies distributed systems." +
  "The components of a distributed system interact with one another in order to achieve a common goal. Three significant challenges of distributed systems are: maintaining concurrency of components, overcoming the lack of a global clock, and managing the independent failure of components. When a component of one system fails, the entire system does not fail.[3] Examples of distributed systems vary from SOA-based systems to massively multiplayer online games to peer-to-peer applications." +
  "A computer program that runs within a distributed system is called a distributed program, and distributed programming is the process of writing such programs. There are many different types of implementations for the message passing mechanism, including pure HTTP, RPC-like connectors and message queues.[6]" +
  "Distributed computing also refers to the use of distributed systems to solve computational problems. In distributed computing, a problem is divided into many tasks, each of which is solved by one or more computers, which communicate with each other via message passing.";

export async function generateQuestions(notes) {
  // given a JSON string containing the text from the user's notes, generate questions to ask the user
  const prompt =
    "This is a teacher that generates questions based on a given text. Text: " +
    notes +
    "Generate 3 distincively different open-ended questions to test the understanding of a person to the given notes. Each question is separated by a new line";

  try {
    const response = await axios.post(
      "https://api.cohere.ai/v1/generate",
      {
        max_tokens: 300,
        truncate: "END",
        return_likelihoods: "NONE",
        prompt,
        temperature: 0.2,
      },
      {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          authorization: "Bearer EJDmtVpZttvmY62fPWvcFM5mSHTTBcwvizKgkUna",
        },
      }
    );

    const data = response.data;
    const questions = data.generations[0].text.trim().split("\n");
    return questions;
  } catch (err) {
    console.log(err);
  }
}
