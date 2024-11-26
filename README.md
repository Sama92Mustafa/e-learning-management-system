# E-Learning Management System

## Description
The E-Learning Management System is a web application designed to facilitate online learning and teaching. It enables instructors to create and manage courses and lessons, while students can enroll in courses and access lesson materials. The system supports full CRUD operations for courses and lessons.

## Features
- User Authentication (Register, Login, Logout)
- Role-based access: Instructors and Students
- CRUD operations for courses and lessons
- Responsive and user-friendly interface
- Integration with a RESTful API for data management
- Secure backend with JWT-based authentication


## Technologies Used
### Frontend:
- React.js
- React Router DOM
- Axios

### Backend:
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT for authentication


## Installation Instructions

### Prerequisites
- Node.js (v16+)
- MongoDB (installed locally)


## API Endpoints

### Authentication:
- `POST /api/auth/register`: Register a user
- `POST /api/auth/login`: Log in a user

### Courses:
- `GET /api/courses`: Get all courses
- `POST /api/courses`: Create a new course
- `GET /api/courses/:id`: Get a course by ID
- `PUT /api/courses/:id`: Update a course
- `DELETE /api/courses/:id`: Delete a course

### Lessons:
- `POST /api/courses/:courseId/lessons`: Add a lesson to a course
- `GET /api/courses/:courseId/lessons`: Get all lessons for a course
- `PUT /api/courses/:courseId/lessons/:lessonId`: Update a lesson
- `DELETE /api/courses/:courseId/lessons/:lessonId`: Delete a lesson
