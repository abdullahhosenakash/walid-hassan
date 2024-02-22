import AuthenticationLinks from '@/app/_components/Navbar/AuthenticationLinks';
import CustomLink from '@/app/_components/Navbar/CustomLink';

const NavLinks = ({ user }) => {
  return (
    <>
      <li>
        <CustomLink href='/'>Home</CustomLink>
      </li>
      <li>
        <CustomLink href='/about'>About</CustomLink>
      </li>
      <li>
        <CustomLink href='/skills'>Skills</CustomLink>
      </li>
      <li>
        <CustomLink href='/projects'>Projects</CustomLink>
      </li>
      <li>
        <CustomLink href='/experience'>Experience</CustomLink>
      </li>
      <li>
        <CustomLink href='/certifications'>Certifications</CustomLink>
      </li>
      <li>
        <CustomLink href='/research-papers'>Research Papers</CustomLink>
      </li>
      <li>
        <CustomLink href='/resume'>Resume</CustomLink>
      </li>
      <li>
        <CustomLink href='/contact'>Contact</CustomLink>
      </li>
      <AuthenticationLinks user={user} />
    </>
  );
};
export default NavLinks;
