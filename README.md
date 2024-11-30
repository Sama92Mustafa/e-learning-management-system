# E-Learning Management System

An online platform for managing courses, lessons, and user authentication, built using the MERN (MongoDB, Express, React, Node.js) stack.

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributors](#contributors)

## Features
- User authentication (Sign up, Sign in)
- CRUD operations for courses
- Dynamic navigation bar based on authentication
- Responsive design


## Technologies Used
- **Frontend**: React, Axios, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Styling**: CSS

## API Endpoints

### User Authentication
- **POST** `/api/auth/signup`: Register a new user
- **POST** `/api/auth/signin`: Log in a user

### Courses
- **GET** `/api/courses`: Get all courses
- **POST** `/api/courses`: Create a new course
- **PUT** `/api/courses/:id`: Update a course
- **DELETE** `/api/courses/:id`: Delete a course
