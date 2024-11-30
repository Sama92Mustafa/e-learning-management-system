const EditCourse = ({ course }) => {
    const [updatedCourse, setUpdatedCourse] = useState(course);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.put(`http://localhost:5000/api/courses/${course._id}`, updatedCourse)
        .then(() => alert('Course updated successfully!'))
        .catch(error => console.error('Error updating course:', error));
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={updatedCourse.title} onChange={(e) => setUpdatedCourse({ ...updatedCourse, title: e.target.value })} />
        <textarea value={updatedCourse.description} onChange={(e) => setUpdatedCourse({ ...updatedCourse, description: e.target.value })}></textarea>
        <button type="submit">Update Course</button>
      </form>
    );
  };
  
  export default EditCourse;
  