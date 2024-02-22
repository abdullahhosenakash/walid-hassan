const UpdateProjects = async () => {
  const response = await fetch('https://walid-hassan.vercel.app/api/projects', {
    cache: 'no-store'
  });
  const projects = await response.json();

  if (!projects) {
    throw new Error('Failed to get projects data');
  }
  return <div>Update Projects</div>;
};
export default UpdateProjects;
