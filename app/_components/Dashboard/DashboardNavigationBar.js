import DashboardLink from '@/app/_components/Dashboard/DashboardLink';

const DashboardNavigationBar = () => {
  return (
    <ul className='flex flex-wrap justify-center lg:gap-4 gap-x-4 gap-y-1 items-center mt-1 border-b border-b-slate-500 w-fit mx-auto'>
      <li>
        <DashboardLink href='/dashboard/update-skills'>
          Update Homepage
        </DashboardLink>
      </li>

      <li>
        <DashboardLink href='/dashboard/update-skills'>
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
        <DashboardLink href='/dashboard/update-experience'>
          Update Research Papers
        </DashboardLink>
      </li>

      <li>
        <DashboardLink href='/dashboard/update-resume'>
          Update Resume
        </DashboardLink>
      </li>

      <li>
        <DashboardLink href='/dashboard/update-resume'>
          Update Contact
        </DashboardLink>
      </li>
    </ul>
  );
};
export default DashboardNavigationBar;
