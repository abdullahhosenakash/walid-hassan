import Card from '@/app/_components/HomepageCard/Card';

const HomepageCard = ({ homepageCards }) => {
  return (
    <section className='lg:px-0 px-3 grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center lg:w-3/4 mx-auto mt-12 dark:bg-slate-900'>
      {homepageCards?.map((card, index) => (
        <Card card={card} key={index} />
      ))}
    </section>
  );
};

export default HomepageCard;
