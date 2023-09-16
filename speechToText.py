
# Imports the Google Cloud client library

from google.cloud import speech_v1p1beta1 as speech


client = speech.SpeechClient.from_service_account_file('key.json')

#define audio input
audio = speech.RecognitionAudio(uri="gs://coteachstoragebuckettts000/sample_audio.mp3")


# Define the speech recognition configuration
config = speech.RecognitionConfig(
    encoding=speech.RecognitionConfig.AudioEncoding.MP3,
    sample_rate_hertz=16000,  # Sample rate of your audio file
    language_code="en-US",
)

# Perform the recognition
response = client.recognize(config=config, audio=audio)

# Process the recognition results
for result in response.results:
    print("Transcript: {}".format(result.alternatives[0].transcript))
# # with open(file_name, 'rb') as f:
# #     mp3_data = f.read()
    
# # audio_file = speech.RecognitionAudio(content=mp3_data)

# config = speech.RecognitionConfig(
#     encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
#     enable_automatic_punctuation=True,
#     language_code='en-US'
# )

# response = client.recognize(
#     config=config,
#     audio=audio_file
# )

# print(response)

