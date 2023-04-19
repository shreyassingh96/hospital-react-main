#Health Management System
#The Health Management System is a web application that allows nurses and patients to manage and track vital signs and medical conditions. It also provides a platform for communication between the two parties.

#Table of Contents
Installation
Usage
Features
Technologies

#Installation
To install and run this project locally, follow these steps:

Clone this repository.
Install the dependencies using npm install.
Create a .env file in the root directory and add the following environment variables:
makefile
Copy code
DATABASE_URI=<your_mongodb_uri>
SECRET_KEY=<your_secret_key>
Start the server using npm run start.
#Open the application in your browser at http://localhost:3000.
#Usage
#To use this application, follow these steps:

Register as either a nurse or a patient using the registration form.
Log in with your registered email and password.
If you're a nurse, you can enter vital signs for your patients, access their previous clinical data, send them motivational tips, and generate a list of possible medical conditions.
If you're a patient, you can create and send emergency alerts, access fitness games to encourage exercise, enter daily health information, and use a symptom checklist.
Features
The Health Management System includes the following features:

User registration and login
Nurse dashboard with the ability to:
Enter vital signs for patients
Access patients' previous clinical data
Send daily motivational tips
Generate a list of possible medical conditions
Patient dashboard with the ability to:
Create and send emergency alerts
Access fitness games to encourage exercise
Enter daily health information
Use a symptom checklist
Technologies
This project was built using the following technologies:

Node.js
Express
GraphQL
MongoDB
React
Material-UI

Created by: Shreyas Singh
Strudent Id: 301239523
