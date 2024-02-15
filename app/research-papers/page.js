import CategoryLink from '@/app/_components/CategoryLink/CategoryLink';
import { getResearchPapers } from '@/app/_lib/getResearchPapers';
import Link from 'next/link';

const ResearchPapers = async () => {
  const researchPapers = await getResearchPapers();
  console.log(researchPapers[0]);

  return (
    <section className='dark:bg-slate-900 lg:py-8 py-4 dark:text-white lg:px-0 px-3 dark:min-h-screen'>
      <h2 className='text-center text-3xl dark:text-white'>Research Papers</h2>

      <div className='lg:w-[60%] mx-auto mt-6'>
        <ul className='list-disc pl-4'>
          {researchPapers?.map((researchPaper) => (
            <li key={researchPaper._id}>
              <CategoryLink>{researchPaper.paperCategory}</CategoryLink>
            </li>
          ))}
        </ul>

        {researchPapers?.map((researchPaper) => {
          const researchPaperId = researchPaper.paperCategory
            ?.toLowerCase()
            ?.replace(/\s+/g, '-');
          return (
            <div className='mt-6' id={researchPaperId} key={researchPaper._id}>
              <h3 className='text-2xl text-center'>
                {researchPaper.paperCategory}
              </h3>
              <div className='flex flex-col gap-2'>
                {researchPaper.papers?.map((paper) => {
                  return (
                    <div className='flex flex-col gap-2' key={paper.paperName}>
                      <div className='flex flex-col gap-2 border border-slate-600 rounded-lg p-2'>
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
