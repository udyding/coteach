import axios from "axios";

export async function getResponse(userAnswer, getFollowup, chatHistory) {
  // if getFollowup, get the followup question for the user's response to the previous question
  const promptType = getFollowup
    ? "Comment on how accurate I answered the question in less than 100 words. Then ask me a follow up open-ended question that is still contained within the notes, filter out opinionated questions and only ask factual questions. Do not ask me whether I want to know more about something."
    : "Comment on how accurate I answered the question in less than 100 words. Do not ask anymore follow-up questions in this response.";
  const prompt = promptType + "This is my answer: " + userAnswer;

  try {
    const response = await axios.post(
      "https://api.cohere.ai/v1/chat",
      {
        message: prompt,
        temperature: 0.3,
        stream: false,
        chat_history: chatHistory,
      },
      {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          authorization: "Bearer EJDmtVpZttvmY62fPWvcFM5mSHTTBcwvizKgkUna",
        },
      }
    );
    let feedback = response.data.text;
    if (!getFollowup && feedback.at(-1) === '?') {
      console.log(feedback.at(-1))
      feedback = feedback.split('.').slice(0, -1).join('.')
      feedback += '.'
    }
    return feedback;
  } catch (err) {
    console.log(err);
  }
}
