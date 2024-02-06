'use client';
import Typewriter from 'typewriter-effect';

const TypewriterEffect = () => {
  return (
    <div className='flex justify-center gap-1 text-lg'>
      <span>I work with</span>{' '}
      <div className='text-pink-700 font-bold'>
        <Typewriter
          options={{
            strings: [
              'Node.js',
              'Express.js',
              'React.js',
              'MongoDB',
              'Next.js',
              'JavaScript',
              'Bootstrap',
              'TailwindCSS'
            ],
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
