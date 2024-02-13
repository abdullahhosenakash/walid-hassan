import Card from '@/app/_components/HomepageCard/Card';

const HomepageCard = () => {
  const cards = [
    {
      image: '',
      title: 'Full Stack Web Developer',
      details: 'More than 3 years of experience in this field',
      linkText: 'See my skills'
    },
    {
      image: '',
      title: 'Worked on Some Amazing Projects',
      details: 'I have worked on both individual and team projects',
      linkText: 'See my projects'
    },
    {
      image: '',
      title: 'Expert in Data Structures and Algorithms',
      details: 'Experienced in implementation and analysis',
      linkText: 'See in Github'
    },
    {
      image: '',
      title: 'Expert in Problem Solving',
      details: 'Solved 1500+ problems in different OJs',
      linkText: 'See in Github'
    }
  ];
  return (
    <section className='lg:px-0 px-3 grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center lg:w-3/4 mx-auto mt-12 dark:bg-slate-900'>
      {cards.map((card, index) => (
        <Card card={card} key={index} />
      ))}
    </section>
  );
};

export default HomepageCard;
