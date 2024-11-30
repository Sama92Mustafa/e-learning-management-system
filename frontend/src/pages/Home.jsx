import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  const [data, setData] = useState([]);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/courses'); 
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    
    fetchData();
  }, []);

  return (
    <div className="home-container">
      <header>
        <img src={`${process.env.PUBLIC_URL}/ourLogoTransparent.png`} alt="Team Logo" className="logo" />
        <h1>Mern Magic</h1>
      </header>
      <h2>Courses</h2>
      <div className="grid-container">
        {data.map((item) => (
          <div key={item._id} className="grid-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


const handleDelete = (id) => {
  axios.delete(`http://localhost:5000/api/courses/${id}`)
    .then(() => alert('Course deleted successfully!'))
    .catch(error => console.error('Error deleting course:', error));
};

return (
  <button onClick={() => handleDelete(course._id)}>Delete</button>
);

export default Home;