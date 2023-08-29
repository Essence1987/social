# **Social Network API** [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project provides a RESTful API for managing a social network platform. It allows you to create and manage users, thoughts, reactions, and friendships.

#**Table of Contents**<br><ul><li>[Features](#features)</li><li>[Installation](#installation)</li><li>[Usage](#usage)</li><li>[Technology](#technology)</li><li>[Database Schema](#database-schema)</li><li>[Tests](#tests)</li><li>[Credits](#credits)</li><li>[Contribute](#contribute)</li><li>[Questions](#questions)</li><li>[License](#license)</li>

# **Features**

- View all users: Display a list of all users in the social network.
- View all thoughts: Display a list of all thoughts shared by users.
- Add a user: Create a new user in the social network.
- Add a thought: Post a new thought to the platform.
- Add a reaction: React to a thought with your own comments
- Add a friend: Establish a friendship connection between users.
- Update user information: Modify user details such as username or email.
- Update thought content: Edit the content of a shared thought.
- Delete a user: Remove a user and their associated thoughts and friendships.
- Delete a thought: Delete a thought and its associated reactions.
- Delete a reaction: Remove a user's reaction from a thought.
- Delete a friend: End a friendship connection between users.
</br></br>

# **Installation**

1. Clone the repository to your local machine using the following command in your terminal: git clone git@github.com:Essence1987/social.git
2. If needed, install the required dependencies by running the following command in the project directory: npm install
3. Set up your MongoDB database and configure the connection in the server.js file.
4. Start the application by running the following command: node server.js</br></br>

# **Usage**

Once the application is running, you can use tools like Insomnia or Postman to interact with the API endpoints. Send HTTP requests to the appropriate routes to create, read, update, or delete users, thoughts, reactions, and friendships.

For a demonstration, please watch the following video: [Link to Walkthrough Video](./assets/Social.mp4) If the link does not work you can also view the Video from the assets folder labeled Social.mp4. 

Relative links
</br></br>

# **Technology**

* Node.js
* Express.js
* MongoDB
* Mongoose
* GitLfs (For storing large files such as the Walkthrough Video) </br></br>

# **Database Schema**

The database schema for this project consists of two main collections: `users` and `thoughts`. Each user can create thoughts, and thoughts can have reactions. Here is the structure of each collection:

**Users collection:**

 * _id (ObjectId, Primary Key)
 * username (String, Unique)
 * email (String, Unique)
 * thoughts (Array of ObjectId references to thoughts)
 * friends (Array of ObjectId references to users)</br></br>

**Thoughts collection:**

* _id (ObjectId, Primary Key)
* thoughtText (String)
* username (String, Foreign Key referencing users.username)
* createdAt (Date)
* reactions (Array of Objects representing reactions)</br></br>

# **Tests**

No tests are currently implemented for this project.

# **Credits**

This was a solo project with no contributors taking part.

# **Contribute**

This is a personal project, and contributions are not accepted at this time.

# **Questions**

Click the image below to go to my GitHub page!

<a href="https://github.com/essence1987"><img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=essence1987&theme=default"/>

If you have any questions or need further assistance, please feel free to contact me:

My email is hwmelander@gmail.com

# **License**

Social Network API is released under [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT). Click on the badge for more information.
