
## Description

The project is a RESTful API built using Node.js and Express.js, with MongoDB as the database. It provides endpoints for managing user profiles, including creation, retrieval, update, and deletion operations. The API uses Mongoose for schema modeling and connects to a MongoDB database hosted on MongoDB Atlas. It focuses on providing a scalable and efficient solution for handling user data.

**Technology Stack:**   
-Node.js: Runtime environment for executing JavaScript code on the server-side.   
-Express.js: Web application framework for building APIs and web apps with Node.js.   
-MongoDB: NoSQL database for storing user data.  
-Mongoose: MongoDB object modeling tool for Node.js, providing a schema-based solution for data modeling.

**User Schema:**  
-The user schema defines the structure of user data stored in the MongoDB database.                                   
-Fields include username, email, role, about section, timeline, skills, YouTube videos, projects, social handles, services, testimonials, and timestamps for creation and updates.  
-Some fields are required, while others are optional.

**API Endpoints:**  
-GET /api/user/:id:  Retrieve user profile by ID.  
-POST /api/user:  Create a new user profile.  
-PUT /api/user/:id: Update an existing user profile.  
-DELETE /api/user/:id: Delete a user profile.

**Database Connection:**  
-The API connects to a MongoDB database hosted on MongoDB Atlas.  
-It uses Mongoose to establish the connection and define the user schema.

**Error Handling:**  
-Error handling is implemented for various scenarios, such as user not found, server errors, or invalid requests.  
-Proper HTTP status codes and error messages are returned to the client.

**Testing:**  
-API is tested on Insomnia app.Testing the API using Insomnia allows you to verify that the endpoints behave as expected and handle different types of requests properly. If you encounter any issues or unexpected behavior during testing, feel free to debug and adjust the API accordingly

## Installation

Clone the repository : https://github.com/SAteroid/Backend_API_setup.git

Install the required dependencies 

Run command: yarn start

    
## License

This project is licensed under the MIT License - see the LICENSE file for details.
[MIT](https://choosealicense.com/licenses/mit/)

