const UpdateResearchPapers = async () => {
  const response = await fetch('http://localhost:3000/api/research-papers');
  const researchPapers = await response.json();

  if (!researchPapers) {
    throw new Error('Failed to get research paper data');
  }

  return <section>UpdateResearchPapers</section>;
};
export default UpdateResearchPapers;
