import { getResearchPapers } from '@/app/_lib/getFunctions/getResearchPapers';

const UpdateResearchPapers = async () => {
  const researchPaper = await getResearchPapers();

  if (!researchPaper) {
    throw new Error('Failed to get research paper data');
  }

  return <section>UpdateResearchPapers</section>;
};
export default UpdateResearchPapers;
