const Lesson = require('../models/Lesson');
const Course = require('../models/Course');

// Add a lesson to a course
exports.addLesson = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { title, content } = req.body;

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: 'Course not found' });

    const lesson = await Lesson.create({ title, content, course: courseId });

    course.lessons.push(lesson._id);
    await course.save();

    res.status(201).json({ message: 'Lesson added successfully', lesson });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all lessons for a course
exports.getLessons = async (req, res) => {
  try {
    const { courseId } = req.params;

    const course = await Course.findById(courseId).populate('lessons');
    if (!course) return res.status(404).json({ message: 'Course not found' });

    res.status(200).json(course.lessons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a lesson
exports.updateLesson = async (req, res) => {
  try {
    const { lessonId } = req.params;
    const updatedData = req.body;

    const updatedLesson = await Lesson.findByIdAndUpdate(lessonId, updatedData, { new: true });
    if (!updatedLesson) return res.status(404).json({ message: 'Lesson not found' });

    res.status(200).json(updatedLesson);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a lesson
exports.deleteLesson = async (req, res) => {
  try {
    const { lessonId, courseId } = req.params;

    const deletedLesson = await Lesson.findByIdAndDelete(lessonId);
    if (!deletedLesson) return res.status(404).json({ message: 'Lesson not found' });

    const course = await Course.findById(courseId);
    if (course) {
      course.lessons = course.lessons.filter((id) => id.toString() !== lessonId);
      await course.save();
    }

    res.status(200).json({ message: 'Lesson deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
