const Navbar = () => {
  return (
    <nav className='lg:px-20 px-3 py-6 bg-slate-800'>
      <ul className='flex justify-between'>
        <li>Walid Hassan</li>
        <li>
          <ul className='lg:flex gap-4 hidden'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Experience</li>
            <li>Resume</li>
            <li>Contact</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
