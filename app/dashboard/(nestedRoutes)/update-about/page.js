import UpdateAboutClient from '@/app/dashboard/_components/UpdateAboutClient';

const UpdateAbout = async () => {
  const response = await fetch(
    'https://walid-hassan.vercel.app/api/miscellaneous-data'
  );
  const { aboutMe } = await response.json();

  if (!aboutMe) {
    throw new Error('Failed to get about me data');
  }

  return (
    <section className='lg:w-1/2 mx-auto pb-12'>
      <h2 className='text-center lg:text-3xl text-xl mt-3'>Update About</h2>
      <UpdateAboutClient aboutMe={aboutMe} />
    </section>
  );
};
export default UpdateAbout;
