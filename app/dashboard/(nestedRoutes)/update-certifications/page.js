const UpdateCertifications = async () => {
  const response = await fetch('http://localhost:3000/api/certifications');
  const certifications = await response.json();

  if (!certifications) {
    throw new Error('Failed to get certifications data');
  }
  return <div>Update Certifications</div>;
};
export default UpdateCertifications;
