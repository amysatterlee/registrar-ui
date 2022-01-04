# Registrar UI

This was the start of an Educational/Registration SAAS that I was developing. It is a work in progress that will probably not be finished, other interests have taken priority. This application, when finished, would allow logged in users to set up offerings/classes, and provide a public application for non-logged in users to register for the offerings/classes. This is a React UI meant to be hosted in AWS S3. The deploy.sh script will upload the JavaScript bundle, html, and css files to S3 bucket (update the deploy.sh script with your bucket name)

## Environment Variables Required
There are no S3 environment variables so there is a config.js file that contains the variables needed for this application to work
  * BASE_URL = this is the base URL for the API (Registrar API Link Here)
  * API_KEY = this is the API key required for this API in AWS API Gateway
