import { getProjects } from '@/app/_lib/getFunctions/getProjects';

const UpdateProjects = async () => {
  const projects = await getProjects();
  if (!projects) {
    throw new Error('Failed to get projects data');
  }
  return <div>Update Projects</div>;
};
export default UpdateProjects;
