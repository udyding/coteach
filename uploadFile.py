import os
from google.cloud import storage

# set key credentials file path
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = '/Users/michellemuliana/Documents/GitHub/Generate/Generate/coteach/key.json'

# define function that uploads a file from the bucket
def upload_cs_file(bucket_name, source_file_name, destination_file_name): 
    storage_client = storage.Client()

    bucket = storage_client.bucket(bucket_name)

    blob = bucket.blob(destination_file_name)
    blob.upload_from_filename(source_file_name)
    print(blob)
    
    return True

#Reminder: change the text to the user input from front-end
upload_cs_file('coteachstoragebuckettts000', '/Users/michellemuliana/Documents/GitHub/Generate/Generate/coteach/key.json', 'json/test.json')