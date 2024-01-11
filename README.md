# Basic Recruiter Tool
This application provides an User interface to recruiters to manage the candidate information. This also provides functionality to add candidates ,update their status and calculates the computed score fo candidate based on their node and react experience.

# Setup in Local
### Clone the repo using command given below
`git clone <github_url>`

### Install all dependencies required for this application using command given below
`npm install`

*Replace the BASE_URL in Constants/Constants.js file with your API URl For eg: http:localhost:3000 if it is running on local*

### Launch the application using the command given below
`npm start`

# Deploy and host the application with AWS Amplify

1. Push the code into repository.
1. Sign into AWS console-> Go to AWS Amplify.
1. Select Host your web app Option that will redirect to repo selection Page.
1. Select github and continue which will pop up authorization page if not authorized, enter details and authorize.
1. After Authorization successfull , select repo and branch name and click next that will redirect to build page and ask you to configure your buildspec file.
1. After reviewing all information Click Save and Deploy that will deploy your application.
1. Once the deployemnt is completed you will get web app url that will server your application.


