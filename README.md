# Health App

This is a web application for tracking health data and providing support for patients and nurses.

## Installation

1. Clone the repository: `git clone https://github.com/shreyassingh96/health-react-main.git`
2. Install dependencies: `npm install`

## Usage

1. Start the server: `nodemon`
2. Navigate to `http://localhost:5000` in your web browser

## Features

### User registration/login

This component allows users to register for an account or log in if they already have one. There are two roles in the app: `nurse` and `patient`.

#### Nurse functionality

If the user is a nurse, they have the following functionality:

- Enter vital signs: body temperature, heart rate, blood pressure, or respiratory rate
- Access information captured during a previous clinical visit
- Send daily motivational tips to the patient
- Generate a list of possible medical conditions and advise the patient to see a doctor if necessary

#### Patient functionality

If the user is a patient, they have the following functionality:

- Create and send an emergency alert to first responders
- Access fitness games designed to encourage patients to exercise at home
- Enter daily information, such as pulse rate, blood pressure, weight, temperature, respiratory rate
- Use a checklist of common signs and symptoms (COVID-19 for example), and submit the choices

## Technologies Used

- React.js
- Node.js
- GraphQL
- MongoDB

## Creadted by Shreyas Singh : 301239523
