const UpdateResearchPapers = async () => {
  const response = await fetch(
    'https://walid-hassan.vercel.app/api/research-papers'
  );
  const researchPapers = await response.json();

  if (!researchPapers) {
    throw new Error('Failed to get research paper data');
  }

  return <section>UpdateResearchPapers</section>;
};
export default UpdateResearchPapers;
