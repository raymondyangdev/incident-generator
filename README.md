# Incident Generator

The Incident Generator is a simple web application that allows you to generate notes for help desk/service desk tickets. It provides an easy-to-use form that you can fill out with the details of the incident, and submit to generate a templated description of the incident.

## Installation
To run the Incident Generator on your local machine, you will need to have Node.js and npm (Node Package Manager) installed. Once you have these installed, follow these steps:

Clone the repository to your local machine
Navigate to the project directory in your terminal
Run npm install to install the dependencies
Run npm start to start the application
The application should now be running on http://localhost:3000/. You can access it in your web browser.

## Live Demo
Alternatively, a live demo is deployed on [Render](https://render.com/). You can use the app by clicking [here](https://incident-generator.onrender.com/)

## Usage
To use the Incident Generator, simply fill out the form with the necessary details, including the application or service item, the issue, an error message, and any other relevant information. Once you have filled out the form, click the "Submit" button to create the ticket notes. You can then view the ticket details on the same page.

The 'short description' follows a format of 'Application - Issue - Error' while the 'work notes' include the other relevant information. If an input from the form is left empty, it will not be included in the template.

## Contributing
If you would like to contribute to the Incident Generator project, feel free to submit a pull request with your changes. Please ensure that any new features or changes are thoroughly tested and documented.