'use client';

import { updateHomepage } from '@/app/_lib/updateHomepage';

const UpdateHomepageClient = ({ homepage }) => {
  const {
    passion,
    designation,
    socialLinks,
    highlightedSkills,
    homepageCards
  } = homepage || {};
  console.log(socialLinks);
  return (
    <form action={updateHomepage} className='lg:w-3/4 mx-auto'>
      <div>
        <label htmlFor='passion'>
          <span className='block text-lg pb-1'>Passion</span>
        </label>
        <input
          type='text'
          name='passion'
          id='passion'
          placeholder='Enter your passion'
          required
          defaultValue={passion}
          className='py-2 border border-slate-500 outline-none rounded px-2 dark:bg-slate-800 w-full'
        />
      </div>

      <div className='mt-4'>
        <label htmlFor='designation'>
          <span className='block text-lg pb-1'>Designation</span>
        </label>
        <div className='flex gap-1'>
          <input
            type='text'
            name='designation'
            id='designation1'
            placeholder='Enter your designation 1'
            required
            defaultValue={designation[0]}
            className='py-2 border border-slate-500 outline-none rounded px-2 dark:bg-slate-800 w-full'
          />
          <input
            type='text'
            name='designation2'
            id='designation'
            placeholder='Enter your designation 2'
            required
            defaultValue={designation[1]}
            className='py-2 border border-slate-500 outline-none rounded px-2 dark:bg-slate-800 w-full'
          />
          <input
            type='text'
            name='designation3'
            id='designation'
            placeholder='Enter your designation 3'
            required
            defaultValue={designation[2]}
            className='py-2 border border-slate-500 outline-none rounded px-2 dark:bg-slate-800 w-full'
          />
        </div>
      </div>

      <div className='mt-4'>
        <label htmlFor='socialLinks'>
          <span className='block text-lg pb-1'>Social Links</span>
        </label>
        <div className='flex gap-1'>
          <input
            type='text'
            name='facebook'
            id='facebook'
            placeholder='Enter your facebook link'
            required
            defaultValue={socialLinks?.facebookLink}
            className='py-2 border border-slate-500 outline-none rounded px-2 dark:bg-slate-800 w-full'
          />
          <input
            type='text'
            name='linkedIn'
            id='linkedIn'
            placeholder='Enter your linkedIn link'
            required
            defaultValue={socialLinks?.linkedInLink}
            className='py-2 border border-slate-500 outline-none rounded px-2 dark:bg-slate-800 w-full'
          />
          <input
            type='text'
            name='github'
            id='github'
            placeholder='Enter your github link'
            required
            defaultValue={socialLinks?.githubLink}
            className='py-2 border border-slate-500 outline-none rounded px-2 dark:bg-slate-800 w-full'
          />
          <input
            type='text'
            name='googleScholar'
            id='googleScholar'
            placeholder='Enter your google scholar link'
            defaultValue={socialLinks?.googleScholarLink}
            className='py-2 border border-slate-500 outline-none rounded px-2 dark:bg-slate-800 w-full'
          />
        </div>
      </div>
    </form>
  );
};
export default UpdateHomepageClient;
