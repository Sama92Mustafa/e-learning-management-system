import React, { useEffect, useState } from 'react';
import { getCourses, updateCourse} from '../api/api';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [ isEditing, setIsEditing] = useState(false);
  const [ currentCourse, setCurrentCourse] = useState({ title: '', description: '' });

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await getCourses();
      setCourses(response.data);
    };
    fetchCourses();
  }, []);
  const handleEditClick = (course) => {
    setCurrentCourse(course);
    setIsEditing(true);
  };
const handleInputChange = (e) => {
    const { name, value} = e.target;
    setCurrentCourse({...currentCourse, [name]: value});
  };

  const handleUpdate = async () => {
    try {
      await updateCourse(currentCourse._id, currentCourse);
      alert('Course has been updated successfully');
      setIsEditing(false);
      setCourses((prevCourses) => 
      prevCourses.map((course) => 
        course._id === currentCourse._id ? {...currentCourse } : course
    )
  );
  } catch (error) {
    console.error(error);
    alert('Failed to update course'); 
  }
  };
  
  return (
    <div>
    <ul>
      {courses.map((course) => (
        <li key={course._id}>
          {course.title} - {course.description}
          <button onClick={() => handleEditClick(course)}>Edit</button>
          </li>
      ))}
    </ul>

    {isEditing && (
    <div className="modal"> 
    <h3>Edit Course</h3>
    <label> 
      Title:
      <input
      type="text"
      name="title"
      value={currentCourse.title}
      onChange={handleInputChange}
      />
    </label>

    <label>
      Description:
      <input
       type="text"
       name="description"
       value={currentCourse.description}
       onChange={handleInputChange}
       />
    </label>

    <button onClick={handleUpdate}>Save</button>
    <button onClick={() => setIsEditing(false)}>Cancel</button>
    </div>
   )}
   </div>
  );
};

export default CourseList;
