import DashboardLink from '@/app/_components/Dashboard/DashboardLink';

const DashboardLinks = () => {
  return (
    <ul className='flex flex-col gap-3'>
      <li>
        <DashboardLink href='/dashboard/update-homepage'>
          Update Homepage
        </DashboardLink>
      </li>

      <li>
        <DashboardLink href='/dashboard/update-about'>
          Update About
        </DashboardLink>
      </li>

      <li>
        <DashboardLink href='/dashboard/update-skills'>
          Update Skills
        </DashboardLink>
      </li>

      <li>
        <DashboardLink href='/dashboard/update-projects'>
          Update Projects
        </DashboardLink>
      </li>

      <li>
        <DashboardLink href='/dashboard/update-experience'>
          Update Experience
        </DashboardLink>
      </li>

      <li>
        <DashboardLink href='/dashboard/update-research-papers'>
          Update Research Papers
        </DashboardLink>
      </li>

      <li>
        <DashboardLink href='/dashboard/update-resume'>
          Update Resume
        </DashboardLink>
      </li>

      <li>
        <DashboardLink href='/dashboard/update-contact'>
          Update Contact
        </DashboardLink>
      </li>
    </ul>
  );
};
export default DashboardLinks;
