import ModifyCertifications from '@/app/dashboard/update-certifications/_components/ModifyCertifications';

const UpdateCertifications = async () => {
  const response = await fetch(
    'https://walid-hassan.vercel.app/api/certifications'
  );
  const certifications = await response.json();

  if (!certifications) {
    throw new Error('Failed to get certifications data');
  }
  return (
    <section>
      <section className='lg:w-1/2 mx-auto pb-20'>
        <h2 className='text-center lg:text-3xl text-xl mt-3'>
          Update Certifications
        </h2>
        <ModifyCertifications certifications={certifications} />
      </section>
    </section>
  );
};
export default UpdateCertifications;
