import CategoryLink from '@/app/_components/CategoryLink/CategoryLink';
import Link from 'next/link';

const ResearchPapers = async () => {
  const response = await fetch(
    'https://walid-hassan.vercel.app/api/research-papers',
    { cache: 'no-store' }
  );
  const researchPapers = await response.json();

  if (!researchPapers) {
    throw new Error('Failed to get research paper data');
  }

  return (
    <section className='dark:bg-slate-900 lg:pt-4 pb-4 dark:text-white lg:px-0 px-3 dark:min-h-screen'>
      <h2 className='text-center text-3xl dark:text-white'>Research Papers</h2>

      <div className='lg:w-[60%] mx-auto mt-6'>
        <ul className='list-disc pl-4'>
          {researchPapers?.map((researchPaper) => (
            <li key={researchPaper._id}>
              <CategoryLink>{researchPaper.paperType}</CategoryLink>
            </li>
          ))}
        </ul>

        {researchPapers?.map((researchPaper) => {
          const researchPaperId = researchPaper.paperType
            ?.toLowerCase()
            ?.replace(/\s+/g, '-');
          return (
            <div className='mt-6' id={researchPaperId} key={researchPaper._id}>
              <h3 className='text-2xl text-center'>
                {researchPaper.paperType}
              </h3>
              <div className='flex flex-col gap-2'>
                {researchPaper.papers?.map((paper) => {
                  return (
                    <div className='flex flex-col gap-2' key={paper.paperId}>
                      <div className='flex flex-col gap-2 border dark:border-slate-700 border-slate-300 rounded-lg p-2'>
                        <p>
                          <span className='font-bold'>Paper Name: </span>
                          {paper.paperName}
                        </p>
                        <p>
                          <span className='font-bold'>Author Name: </span>
                          {paper.authorName}
                        </p>
                        <p>
                          <span className='font-bold'>Description: </span>
                          {paper.description}
                        </p>
                        <p>
                          <span className='font-bold'>Status: </span>
                          {paper.status}
                        </p>
                        {paper.DOI && (
                          <p>
                            <span className='font-bold'>DOI: </span>
                            <Link
                              href={paper.DOI}
                              className='dark:text-blue-400 text-blue-700 hover:underline'
                            >
                              Click here
                            </Link>
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ResearchPapers;
