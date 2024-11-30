import React, { useState } from 'react';
import axios from 'axios';

const CreateCourse = () => {
  const [course, setCourse] = useState({ title: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/courses', course)
      .then(() => alert('Course created successfully!'))
      .catch(error => console.error('Error creating course:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" onChange={(e) => setCourse({ ...course, title: e.target.value })} />
      <textarea placeholder="Description" onChange={(e) => setCourse({ ...course, description: e.target.value })}></textarea>
      <button type="submit">Create Course</button>
    </form>
  );
};

export default CreateCourse;
