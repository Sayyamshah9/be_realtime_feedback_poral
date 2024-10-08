# Real-Time Feedback Portal Backend

#### Objective:

- Develop a Real-Time Customer Feedback Portal using Node.js, Express, Socket.io (backend) and React.js/Next.js (frontend).

### Set up a project

- Clone this repository: `git clone https://github.com/Sayyamshah9/be_realtime_feedback_poral.git`

### Set up .env

- Create .env file and put on below Variables in it

* `PORT=3001`
* `DB_NAME=dbFeedbackData`
<!-- * `DB_URL=<you will find url in constants.js file copy paste it here>` -->

### Run project

- Move into the project directory
- Run `yarn` command to install all dependencies
- Run the command: `yarn start`
  - Starts a server running at `http://localhost:3001`

## About

- Server will Start on: `http://localhost:3001`. You can use this URL for socket conection in frontend

  #### Endpoints

  - Get Data - `http://localhost:3001/api/getData`
  - Post Data - `http://localhost:3001/api/postData`

  #### Database

  - MongoDb, which is already hosted on Atlas
