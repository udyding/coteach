import axios from "axios";

export async function generateQuestions(notes) {
  // given a JSON string containing the text from the user's notes, generate questions to ask the user
  const prompt =
    "This is a teacher that generates questions based on a given study sheet containing factual information. Here is this study sheet: " +
    notes +
    "Generate 10 distinctively different open-ended questions about some of the concepts in the sheet to test one's understanding. In each question, mention exactly what topic is being asked about. Each question should be separated by a period.";

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
