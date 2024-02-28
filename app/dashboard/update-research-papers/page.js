import ModifyResearchPapers from '@/app/dashboard/update-research-papers/_components/ModifyResearchPapers';

const UpdateResearchPapers = async () => {
  const response = await fetch(
    'https://walid-hassan.vercel.app/api/research-papers'
  );
  const researchPapers = await response.json();

  if (!researchPapers) {
    throw new Error('Failed to get research paper data');
  }

  return (
    <section>
      <section className='lg:w-1/2 mx-auto pb-20'>
        <h2 className='text-center lg:text-3xl text-xl mt-3'>
          Update Research Papers
        </h2>
        <ModifyResearchPapers researchPapers={researchPapers} />
      </section>
    </section>
  );
};
export default UpdateResearchPapers;
