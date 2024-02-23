const UpdateProjects = async () => {
  const response = await fetch('http://localhost:3000/api/projects');
  const projects = await response.json();

  if (!projects) {
    throw new Error('Failed to get projects data');
  }
  return <div>Update Projects</div>;
};
export default UpdateProjects;
