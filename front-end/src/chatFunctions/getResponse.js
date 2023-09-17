import axios from "axios";

export async function getResponse(userAnswer, getFollowup, chatHistory) {
  // if getFollowup, get the followup question for the user's response to the previous question
  const promptType = getFollowup
    ? "Comment on how well I answered the question, then ask me a follow up open-ended question that is still contained within the notes. Do not reply with text that requires formatting, like a list."
    : "Comment on how well I answered the question. Don't ask anymore questions under any circumstances, and do not end your response in a question or a question mark. Do not reply with text that requires formatting, like a list.";
  const prompt = "My answer is: " + userAnswer + promptType;

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
    const feedback = response.data.text;
    return feedback;
  } catch (err) {
    console.log(err);
  }
}
