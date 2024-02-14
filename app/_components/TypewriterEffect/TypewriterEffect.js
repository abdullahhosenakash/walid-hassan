'use client';
import Typewriter from 'typewriter-effect';

const TypewriterEffect = () => {
  const highlightedSkills = [
    'Node.js',
    'Express.js',
    'React.js',
    'MongoDB',
    'Next.js',
    'JavaScript',
    'Bootstrap',
    'TailwindCSS'
  ];
  return (
    <div className='flex justify-center gap-1 text-lg'>
      <span>I work with</span>{' '}
      <div className='text-pink-700 font-bold'>
        <Typewriter
          options={{
            strings: highlightedSkills,
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            delay: 50
          }}
        />
      </div>
    </div>
  );
};

export default TypewriterEffect;
