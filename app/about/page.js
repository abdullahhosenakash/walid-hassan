'use client';
import Typewriter from 'typewriter-effect';

const About = () => {
  return (
    <section>
      About
      <Typewriter
        options={{
          strings: ['Hello', 'World'],
          autoStart: true,
          loop: true
        }}
      />
    </section>
  );
};

export default About;
