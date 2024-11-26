import React, { useEffect, useState } from 'react';
import { getCourses } from '../api/api';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await getCourses();
      setCourses(response.data);
    };
    fetchCourses();
  }, []);

  return (
    <ul>
      {courses.map((course) => (
        <li key={course.id}>{course.title}</li>
      ))}
    </ul>
  );
};

export default CourseList;
