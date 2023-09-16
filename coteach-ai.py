import cohere
co = cohere.Client('EJDmtVpZttvmY62fPWvcFM5mSHTTBcwvizKgkUna')

notes = """A distributed system is a system whose components are located on different networked computers, which communicate and coordinate their actions by passing messages to one another. Distributed computing is a field of computer science that studies distributed systems.

The components of a distributed system interact with one another in order to achieve a common goal. Three significant challenges of distributed systems are: maintaining concurrency of components, overcoming the lack of a global clock, and managing the independent failure of components. When a component of one system fails, the entire system does not fail.[3] Examples of distributed systems vary from SOA-based systems to massively multiplayer online games to peer-to-peer applications.

A computer program that runs within a distributed system is called a distributed program, and distributed programming is the process of writing such programs. There are many different types of implementations for the message passing mechanism, including pure HTTP, RPC-like connectors and message queues.[6]

Distributed computing also refers to the use of distributed systems to solve computational problems. In distributed computing, a problem is divided into many tasks, each of which is solved by one or more computers, which communicate with each other via message passing.

"""
# initial prompt to get the list of questions
prompt="""This is a teacher that generates questions based on a given text. Text: """ + notes + """ Generate 
3 distincively different open-ended questions to test the understanding of a person to the given notes. 
Each question is separated by a new line"""

# using co.generate 
output = co.generate(
  prompt = prompt,
  model = 'command',
  temperature = 0.2,
  max_tokens=300
)

questions = output.generations[0].text.split('\n')
print(questions)

for q in questions:

    chat_history = []
    max_turns = 2
    chat_history = [
        {"user_name": "User", "text": """I'm trying to study for a test. Ask me a question based on these notes: """ + notes},
        {"user_name": "Chatbot", "text": q},
        ]
    print(q)

        
    for _ in range(max_turns):
        # get user input
        user_answer = input("Answer the question here: ")
        message = "My answer is: " + user_answer + """Comment on how well I answered the question, 
        then ask a follow up open-ended question that is still contained within the notes."""
        
        # generate a response with the current chat history
        response = co.chat(
            message,
            temperature=0.8,
            chat_history=chat_history
        )
        answer = response.text
            
        print(answer)

        # add message and answer to the chat history
        user_message = {"user_name": "User", "text": message}
        bot_message = {"user_name": "Chatbot", "text": answer}
        
        chat_history.append(user_message)
        chat_history.append(bot_message)