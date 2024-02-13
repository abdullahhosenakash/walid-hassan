const StaticSkills = () => {
  return (
    <section className='flex flex-col gap-6 mt-6'>
      <div>
        <h4 className='text-2xl font-bold'>Languages</h4>
        <p className='text-lg'>
          JavaScript, TypeScript, Python, C++, Java, HTML, CSS
        </p>
      </div>

      <div>
        <h4 className='text-2xl font-bold'>Frameworks & Library</h4>
        <p className='text-lg'>
          React.js, Redux, Express.js, Node.js, Bootstrap, Django, Django Rest
          Framework, JavaFX
        </p>
      </div>
      <div>
        <h4 className='text-2xl font-bold'>Databases</h4>
        <p className='text-lg'>MongoDB, PostgreSQL, Oracle</p>
      </div>
      <div>
        <h4 className='text-2xl font-bold'>Tools</h4>
        <p className='text-lg'>REST API, Git, GitHub, Bash</p>
      </div>
      <div>
        <h4 className='text-2xl font-bold'>Others</h4>
        <p className='text-lg'>
          Data Structures and Algorithms, Problem Solving, Object Oriented
          Programming, Competitive Programming
        </p>
      </div>
    </section>
  );
};

export default StaticSkills;
