const express = require('express');
const {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} = require('../controllers/courseController');
const { addLesson, getLessons, updateLesson, deleteLesson } = require('../controllers/lessonController');

const router = express.Router();

// Course routes
router.post('/courses', createCourse); // Create a course
router.get('/courses', getCourses); // Get all courses
router.get('/courses/:id', getCourseById); // Get a single course by ID
router.put('/courses/:id', updateCourse); // Update a course by ID
router.delete('/courses/:id', deleteCourse); // Delete a course by ID

// Lesson routes
router.post('/:courseId/lessons', addLesson); // Add a lesson to a course
router.get('/:courseId/lessons', getLessons); // Get all lessons for a course
router.put('/:courseId/lessons/:lessonId', updateLesson); // Update a lesson
router.delete('/:courseId/lessons/:lessonId', deleteLesson); // Delete a lesson

module.exports = router;
