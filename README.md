# TaskMates App

TaskMates is a shared platform designed to help users efficiently manage and delegate tasks within a group environment. Living with roommates, it can be challenging to ensure that everyone is doing their part. The app solves this problem by providing transparency and clear delegation of tasks. Each roommate can log in, see what needs to be done, and mark their progress, ensuring that everyone is accountable and tasks are not overlooked. This app was built to provide an easy and intuitive way to assign, track, and manage tasks among multiple people.

## Table of Contents
- What and Why
- Technologies Used
- Key Features
- Instructions for Use
- License


### What and Why

The app allows users to create and assign tasks to different members, track progress, and manage tasks in a transparent and collaborative way. Living with roommates often means shared responsibilities, from cleaning to grocery shopping. The motivation behind this app is to help everyone stay on the same page and avoid the typical "who forgot to take out the trash" arguments.

### Technologies Used

The platform leverages a modern tech stack to create a seamless user experience:
- The backend is built using **Express.js** and **GraphQL** to provide efficient API requests.
- **Mongoose** connects the **MongoDB** database to the Express backend.
- The front-end is built using **React** for a dynamic user interface.
- User data, including email and password hash, are stored securely using **MongoDB**, with password hashing provided by the `bcrypt` library.
- **JSON Web Token (JWT)** authentication is used to keep user sessions secure.

## Key Features

- **User Authentication**: Secure signup and login using hashed passwords and JWT for session management.
- **Task Management**: Users can create, update, and assign tasks to different members.
- **User Profile**: Manage personal information such as avatar and email.
- **Shared Environment**: Built specifically for households or teams to help manage shared responsibilities.

## Instructions for Use

1. **Installation**: Clone the repository, and run `npm install` in the package dot json in the root directory to install dependencies.
2. **Environment Setup**: Create a `.env` file in the server directory and add the following environment variables:
   - `MONGO_URI` for the database connection.
   - `JWT_SECRET` for token generation.
3. **Running the App**: Start the MongoDB server. Then, run `npm run start:dev` in the open terminal from package dot json of the root directory to start the front-end.
4. **Access the Application**: The server runs on port 4000, and the client runs on port 3000. Navigate to `http://localhost:3000` to access the application.
5. **Sign Up and Manage Tasks**: Sign up with your email and start managing tasks effectively.

## License

This project is open-source and available for personal or educational use. Contributions are welcome!