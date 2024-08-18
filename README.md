# MERN CRUD Project

## Overview

This project is a simple CRUD (Create, Read, Update, Delete) application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The purpose of this project is to demonstrate basic operations for managing data, including adding new items, displaying a list of items, editing items, and deleting items from a MongoDB database.
## Preview
![Screenshot (36)](https://github.com/user-attachments/assets/a0b27b57-bbc2-49b4-a7e1-061d98ba94c2)
![Screenshot (37)](https://github.com/user-attachments/assets/db75422e-901d-476d-bfb2-5698f6aa06cf)



## Features

- **Create:** Add new items to the database.
- **Read:** View a list of items fetched from the database.
- **Update:** Edit and update existing items.
- **Delete:** Remove items from the database.
- **Responsive UI:** The front-end is built with React.js, providing a responsive user interface.

## Project Structure

```plaintext
mern-crud-project/
├── client/                 # Frontend (React.js)
│   ├── public/             # Public assets
│   └── src/                # React.js source code
│       ├── components/     # Reusable components
│       ├── pages/          # Pages (e.g., Home, Edit, Add)
│       ├── App.js          # Main React component
│       ├── index.js        # Entry point for React
│       └── ...
├── server/                 # Backend (Node.js, Express.js)
│   ├── config/             # Configuration files (e.g., database connection)
│   ├── controllers/        # Route controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── middleware/         # Middleware functions
│   ├── server.js           # Entry point for Node.js server
│   └── ...
├── .env                    # Environment variables
├── .gitignore              # Files and directories to ignore in Git
├── package.json            # NPM dependencies and scripts for the whole project
└── README.md               # Project documentation
```
## Installation
### Prerequisites
- Node.js (v14 or later)
- MongoDB (local or cloud-based)
### Steps
#### 1.Clone the repository:
```
git clone https://github.com/yourusername/mern-crud-project.git
cd mern-crud-project
```
#### 2.Install server dependencies:
```
cd server
npm install
```
#### 3.Install client dependencies:
```
cd ../client
npm install
```
#### 4.Set up environment variables:

Create a .env file in the server directory and add the following:
```
MONGO_URI=your_mongodb_uri
PORT=5000
```
#### 4.Run the application:

- Backend (Express.js):

```
cd server
npm run dev
```
- Frontend (React.js):

```
cd ../client
npm start
```
#### 6.Open your browser:

Visit http://localhost:3000 to view the application.

### Usage
- Create: Use the form to add new items to the database.
- Read: View the list of items on the main page.
- Update: Click on an item to edit its details.
- Delete: Remove an item from the list.

## Deployment
### Deploying to Vercel (Backend)


### Deploying to Netlify (Frontend)
- Build the React app:

```
cd client
npm run build
```

#### 2.Deploy to Netlify:
- Drag and drop the build folder to the Netlify dashboard.
- 
## Contributing
- Fork the repository.
- Create a new branch (git checkout -b feature/your-feature-name).
- Commit your changes (git commit -m 'Add some feature').
- Push to the branch (git push origin feature/your-feature-name).
- Open a pull request.
- 
## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
- MongoDB
- Express.js
- React.js
- Node.js
