import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MyProfile.css';

const MyProfile = () => {
  const [user, setUser] = useState({
    name: 'Sama Mustafa',
    email: 'sama.m@gmail.com',
    role: 'Instructor',
  });
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch user data
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You are not logged in!');
      return;
    }

    // Fetch user and course data from backend
    const fetchUserAndCourses = async () => {
      try {
        const coursesResponse = await axios.get('http://localhost:5000/api/courses', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCourses(coursesResponse.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
        alert('Failed to fetch courses.');
      }
    };

    fetchUserAndCourses();
  }, []);

  return (
    <div className="my-profile-container">
      <h1>My Profile</h1>
      <div className="user-info">
        <h2>Welcome, {user.name}!</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </div>
      <div className="enrolled-courses">
        <h2>Your Courses</h2>
        {isLoading ? (
          <p>Loading courses...</p>
        ) : courses.length > 0 ? (
          <ul>
            {courses.map((course) => (
              <li key={course._id}>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>You haven't added any courses yet.</p>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
