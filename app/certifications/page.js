import Image from 'next/image';
import Link from 'next/link';
import CategoryLink from '@/app/_components/CategoryLink/CategoryLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

const Certifications = async () => {
  const response = await fetch(
    'https://walid-hassan.vercel.app/api/certifications',
    { cache: 'no-store' }
  );
  const certifications = await response.json();

  if (!certifications) {
    throw new Error('Failed to get certifications data');
  }

  return (
    <section className='dark:bg-slate-900 lg:pt-4 pb-4 dark:text-white lg:px-0 px-3 dark:min-h-screen'>
      <h2 className='text-center text-3xl'>My Certifications</h2>
      <div className='lg:w-[60%] mx-auto mt-6'>
        <ul className='list-disc pl-4'>
          {certifications?.map((certification) => (
            <li key={certification._id}>
              <CategoryLink>{certification.certificationType}</CategoryLink>
            </li>
          ))}
        </ul>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center mt-2 border dark:border-slate-700 border-slate-300 rounded-lg p-2'>
          {/* <div className='w-full lg:h-52 h-40'> */}
          <FontAwesomeIcon
            icon={faImage}
            className='w-full lg:!h-52 !h-40 rounded-lg text-slate-700 bg-slate-600'
          />
          {/* </div> */}
          <div className='flex flex-col gap-4'>
            <div className='py-3 bg-slate-300 dark:bg-slate-600 rounded-full' />
            <div className='flex flex-col gap-2'>
              <div className='py-2 bg-slate-300 dark:bg-slate-600 rounded-full' />
              <div className='py-2 bg-slate-300 dark:bg-slate-600 rounded-full' />
              <div className='py-2 w-3/4 bg-slate-300 dark:bg-slate-600 rounded-full' />
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-8'>
          {certifications?.map((certification) => {
            const certificationId = certification.certificationType
              ?.toLowerCase()
              ?.replace(/\s+/g, '-');
            return (
              <div
                className='mt-6'
                id={certificationId}
                key={certification._id}
              >
                <h3 className='text-2xl text-center'>
                  {certification.certificationType}
                </h3>
                <div className='flex flex-col gap-2'>
                  {' '}
                  {certification?.certifications?.map((singleCertification) => (
                    <div
                      className='grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center mt-1 border dark:border-slate-700 border-slate-300 p-2 rounded-lg'
                      key={singleCertification.certificationName}
                    >
                      <Image
                        src={singleCertification.imageLink}
                        alt='web project'
                        priority
                        className='shadow-xl h-auto rounded-lg'
                        width={500}
                        height={500}
                      />
                      <div className='text-lg flex flex-col gap-3'>
                        <p>
                          <span className='font-bold'>
                            {singleCertification.certificationName}
                          </span>
                          {' - '}
                          <Link
                            href={singleCertification.link}
                            target='_blank'
                            className='dark:text-blue-400 text-blue-700 hover:underline'
                          >
                            Live Link
                          </Link>
                        </p>

                        <p>
                          <span className='font-bold'>Description:</span>{' '}
                          {singleCertification.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
