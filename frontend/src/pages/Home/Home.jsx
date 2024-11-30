import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import logo from '../../logo.jpg'; // Adjusted path for logo in `src/`


const Home = () => {
  const [courses, setCourses] = useState([]); // State for course list
  const [newCourse, setNewCourse] = useState({ title: '', description: '' }); // State for adding new courses
  const [editingCourse, setEditingCourse] = useState(null); // State for the course being edited
  const [updatedCourse, setUpdatedCourse] = useState({ title: '', description: '' }); // State for editing form

  // Fetch courses on page load
  useEffect(() => {
    axios.get('http://localhost:5000/api/courses')
      .then((response) => setCourses(response.data))
      .catch((error) => console.error('Error fetching courses:', error));
  }, []);

  // Handle adding a new course
  const handleCreate = (e) => {
    e.preventDefault();
    if (!newCourse.title || !newCourse.description) {
      alert('Please fill out both Title and Description');
      return;
    }
    axios.post('http://localhost:5000/api/courses', newCourse)
      .then((response) => {
        setCourses([...courses, response.data]); // Add new course to list
        setNewCourse({ title: '', description: '' }); // Reset form
      })
      .catch((error) => console.error('Error creating course:', error));
  };

  // Handle starting to edit a course
  const handleEdit = (course) => {
    setEditingCourse(course);
    setUpdatedCourse({ title: course.title, description: course.description }); // Pre-fill form with existing data
  };

  // Handle updating a course
  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/courses/${editingCourse._id}`, updatedCourse)
      .then(() => {
        setCourses(courses.map(course => 
          course._id === editingCourse._id ? { ...course, ...updatedCourse } : course
        ));
        setEditingCourse(null); // Close the edit form
      })
      .catch((error) => console.error('Error updating course:', error));
  };

  // Handle canceling the edit
  const handleCancelEdit = () => {
    setEditingCourse(null); // Close the edit form
  };

  // Handle deleting a course
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/courses/${id}`)
      .then(() => {
        setCourses(courses.filter(course => course._id !== id)); // Remove course from list
      })
      .catch((error) => console.error('Error deleting course:', error));
  };

  return (
    <div className="home-container">
      
      <h1>Available Courses</h1>
      <ul>
        {courses.map(course => (
          <li key={course._id}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <button onClick={() => handleEdit(course)} className="edit-button">Edit</button>
            <button onClick={() => handleDelete(course._id)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>

      {!editingCourse && (
        <>
          <h2>Add a New Course</h2>
          <form onSubmit={handleCreate} className="add-course-form">
            <input
              type="text"
              placeholder="Title"
              value={newCourse.title}
              onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
              required
            />
            <textarea
              placeholder="Description"
              value={newCourse.description}
              onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
              required
            ></textarea>
            <button type="submit" className="add-button">Add Course</button>
          </form>
        </>
      )}

      {editingCourse && (
        <form onSubmit={handleUpdate} className="edit-course-form">
          <h2>Edit Course</h2>
          <input
            type="text"
            value={updatedCourse.title}
            onChange={(e) => setUpdatedCourse({ ...updatedCourse, title: e.target.value })}
            required
          />
          <textarea
            value={updatedCourse.description}
            onChange={(e) => setUpdatedCourse({ ...updatedCourse, description: e.target.value })}
            required
          ></textarea>
          <button type="submit" className="save-button">Save</button>
          <button type="button" onClick={handleCancelEdit} className="cancel-button">Cancel</button>
        </form>
      )}
    </div>
  );
};

export default Home;
