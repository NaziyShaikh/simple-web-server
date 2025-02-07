### Home Page
![Home Page](screenshots/![home page](https://github.com/user-attachments/assets/b7448cb3-98b3-4dad-ae9d-e1a81a6e5eea)
.png)

### About Page
![About Page](screenshots/![about us ](https://github.com/user-attachments/assets/ceba818b-e1d6-4f65-aca4-06d2281adb03)
.png)

### Contact Page
![Contact Page](screenshots/![contact us ](https://github.com/user-attachments/assets/9d0811da-196e-4d74-ae72-0b9011333e41)
.png)

### 404 Error Page
![404 Error Page](screenshots/![404 not found page](https://github.com/user-attachments/assets/c22efb32-2c95-4283-a9cd-38f4148507b9)
.png)
Overview
This is a lightweight Node.js web server that serves static HTML pages with simple routing capabilities. The server is designed to handle multiple routes and serve different HTML pages based on the requested URL.

Features
Serves static HTML pages for Home, About, and Contact routes
Serves a custom CSS stylesheet
Handles 404 (Not Found) errors with a custom error page
Runs on localhost:3000
Server Architecture
The server is built using Node.js's built-in http module and follows these key principles:

Routing
The server handles the following routes:

/ or /home: Serves the home page (home.html)
/about: Serves the about page (about.html)
/contact: Serves the contact page (contact.html)
Any undefined route serves a custom 404 error page (404.html)
Static File Serving
CSS stylesheet is served from /styles.css
All HTML pages are served from the public/ directory
Uses asynchronous file reading for efficient file serving
Error Handling
Implements a custom error page for 404 (Not Found) scenarios
Logs server and file serving errors to the console
Getting Started
Prerequisites
Node.js installed (version 12 or higher recommended)
Installation
Clone the repository
Navigate to the project directory
Run npm install
Running the Server
bash
CopyInsert in Terminal
npm start
The server will start and be accessible at http://localhost:3000

Technologies Used
Node.js
HTTP module
Promises-based File System module
