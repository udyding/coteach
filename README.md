# coteach

## Inspiration ✨
We came up with this project because we saw a huge gap between studying in a meaningful and engaging way and how we typically study. Most of us have spent most of our academic careers toiling away rewriting flashcards, looking at and away from our notes, silently recalling in our own bedrooms. As corny as it sounds, **being able to learn fast and dynamically is what brings us together to events like hackathons, and we want to be able to create more learning experiences like this**. We've always found that teaching someone else (even during this hackathon!) helps us learn better than just reading our own notes over and over again. 

Many studies have shown that learning through reinforcement, gaining other people’s perspectives on concepts, and receiving active feedback from teaching others allows students to retain information a lot better than traditional study methods. CoTeach is our way of making learning enjoyable and effective, giving you an interactive tool to learn about whatever you're curious about.

## What it does 🤔
CoTeach is an educational platform designed to harness the powerful concept of learning through teaching. With CoTeach, users are empowered to impart their knowledge and expertise to an AI-driven application, effectively transforming their personal notes into a valuable learning resource. Following the upload, **Franklin, our bot, engages users asking questions. He asks users to verbally explain the concepts in their own words, ensuring a real-time and genuine understanding of the material**. Franklin also asks **answer-specific follow-up questions to dig deeper** into your understanding of a topic. 

Subsequently, the AI provides insightful feedback on the comprehensibility and similarity of the user's explanations to the original notes, thus offering an objective assessment of the user's grasp of the subject matter. This innovative platform not only facilitates a deeper understanding of the subject but also encourages effective knowledge transfer and retention.

## How we built it 🔨
When creating our application, we used the **Cohere's Language Model (LLM)** by integrating the text generation and beta chat features as the core function. We collaborated closely with the Cohere reps to understand what was possible and what made the most sense for our application. We used predefined user input and study notes for Retrieval Augmented Generation to improve the accuracy of answer validation and relevancy of follow up questions. We drafted up multiple potential concepts on Figma and dazzled up the frontend using **React and Framer Motion**. We implemented **speech-to-text voice recognition to better simulate a real-time teaching experience** and document parsing to extract key information for generating good questions.

## Challenges we ran into 🪨
While executing our project, we encountered several technical challenges. These included the integration of a speech-to-text conversion system, the complex handling of file uploads and parsing procedures, and the task of effectively prompting the Coral framework to generate questions and feedback. 

**This was also our first time working with LLMs**, it was really interesting to navigate collaboration with Cohere's representatives along with each other in an entirely new topic. This meant that it was more difficult to synchronize our work given that there were more unknowns to handle.

## Accomplishments that we're proud of 💪
We're really proud of what we've achieved with CoTeach. We turned a simple idea into an interactive learning platform that lets students teach AI and enhance their own understanding. Along the way, we tackled some tough challenges together, like speech-to-text and working with AI.

We're also really proud of how we supported each other :) Whether it was laughing about the most recently outrageous thing our LLM spat out or building an iconically tall jenga tower. Ultimately, despite the fact that this was our first time working together, we watched all of our different skillsets shine in their own ways (and grew new skills too)!

## What we learned 💡
From a technical perspective, we learned to work with large language models and learned more about user-centric design. Some areas that we really focused on too were prompt engineering and speech-to-text conversion. Udy wowed us with her fullstack skills, Eric went ham on prompt engineering, Bonnie showed us around Figma, and Michelle came up with the idea that brought us together :)

Another thing we learned (more like relearned) is how fun it is to build and bring the ideas you have to life.  University, co-ops, making friends and job-searching can often times make it hard to find time to tinker for the sake of tinkering, and to focus on fun more than outcomes. We had a lot of fun today (not so silent disco, karaoke etc.), and given that we got this working and tried something new, we're pretty happy with that outcome too!

## What's next for CoTeach ⏭
- Verify and provide corrections for a user's notes with information from the web
- Social features, 
  - e.g. viewing and upvoting other people's responses to similar questions
  - e.g. doing a teaching session with multiple friends!
- Ability to upload multiple documents
- Allow Franklin to speak with his voice back!
- Better question and feedback generation
