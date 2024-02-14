import CategoryLink from '@/app/_components/CategoryLink/CategoryLink';
import Link from 'next/link';

const ResearchPapers = () => {
  const papers = [
    {
      category: 'Conference Papers',
      paper: [
        {
          paperName:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, itaque',
          authorName: 'Lorem ipsum dolor',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, itaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, itaque',
          status: 'Peer review',
          DOI: ''
        },
        {
          paperName:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, itaque',
          authorName: 'Lorem ipsum dolor',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, itaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, itaque',
          status: 'Published',
          DOI: 'jhajahjah'
        }
      ]
    },
    {
      category: 'Journal Papers',
      paper: [
        {
          paperName:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, itaque',
          authorName: 'Lorem ipsum dolor',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, itaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, itaque',
          status: 'Peer review',
          DOI: ''
        }
      ]
    },
    {
      category: 'Book Chapter',
      paper: [
        {
          paperName:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, itaque',
          authorName: 'Lorem ipsum dolor',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, itaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, itaque',
          status: 'Peer review',
          DOI: ''
        }
      ]
    }
  ];
  const bookPapers = papers.find((paper) => paper.category === 'Book Chapter');
  bookPapers.paper.length;

  return (
    <section className='dark:bg-slate-900 lg:py-8 py-4 dark:text-white lg:px-0 px-3 dark:min-h-screen'>
      <h2 className='text-center text-3xl dark:text-white'>Research Papers</h2>

      <div className='lg:w-[60%] mx-auto mt-6'>
        <ul className='list-disc pl-4'>
          <li>
            <CategoryLink>Conference Papers</CategoryLink>
          </li>
          <li>
            <CategoryLink>Journal Papers</CategoryLink>
          </li>
        </ul>

        <div className='mt-6' id='conference-papers'>
          <h3 className='text-2xl text-center'>Conference Papers</h3>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col gap-2 border border-slate-600 rounded-lg p-2'>
              <p>
                <span className='font-bold'>Paper Name:</span> Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Tenetur, reiciendis
              </p>
              <p>
                <span className='font-bold'>Author Name:</span> Lorem ipsum
                dolor sit
              </p>
              <p>
                <span className='font-bold'>Description:</span> Lorem ipsum
                dolor sit Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Reiciendis sunt consequatur aliquam voluptatibus nam
                corporis vitae, eum amet vero doloribus.
              </p>
              <p>
                <span className='font-bold'>Status:</span> Peer review
              </p>
            </div>
            <div className='flex flex-col gap-2 border border-slate-600 rounded-lg p-2'>
              <p>
                <span className='font-bold'>Paper Name:</span> Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Tenetur, reiciendis
              </p>
              <p>
                <span className='font-bold'>Author Name:</span> Lorem ipsum
                dolor sit
              </p>
              <p>
                <span className='font-bold'>Description:</span> Lorem ipsum
                dolor sit Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Reiciendis sunt consequatur aliquam voluptatibus nam
                corporis vitae, eum amet vero doloribus.
              </p>
              <p>
                <span className='font-bold'>Status:</span> Published
              </p>
              <p>
                <span className='font-bold'>DOI: </span>
                <Link
                  href=''
                  className='dark:text-blue-400 text-blue-700 hover:underline'
                >
                  Click here
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className='mt-6' id='journal-papers'>
          <h3 className='text-2xl text-center'>Journal Papers</h3>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col gap-2 border border-slate-600 rounded-lg p-2'>
              <p>
                <span className='font-bold'>Paper Name:</span> Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Tenetur, reiciendis
              </p>
              <p>
                <span className='font-bold'>Author Name:</span> Lorem ipsum
                dolor sit
              </p>
              <p>
                <span className='font-bold'>Description:</span> Lorem ipsum
                dolor sit Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Reiciendis sunt consequatur aliquam voluptatibus nam
                corporis vitae, eum amet vero doloribus.
              </p>
              <p>
                <span className='font-bold'>Status:</span> Peer review
              </p>
            </div>
            <div className='flex flex-col gap-2 border border-slate-600 rounded-lg p-2'>
              <p>
                <span className='font-bold'>Paper Name:</span> Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Tenetur, reiciendis
              </p>
              <p>
                <span className='font-bold'>Author Name:</span> Lorem ipsum
                dolor sit
              </p>
              <p>
                <span className='font-bold'>Description:</span> Lorem ipsum
                dolor sit Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Reiciendis sunt consequatur aliquam voluptatibus nam
                corporis vitae, eum amet vero doloribus.
              </p>
              <p>
                <span className='font-bold'>Status:</span> Published
              </p>
              <p>
                <span className='font-bold'>DOI: </span>
                <Link
                  href=''
                  className='dark:text-blue-400 text-blue-700 hover:underline'
                >
                  Click here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchPapers;
