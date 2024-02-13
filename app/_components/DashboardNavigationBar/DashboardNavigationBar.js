import DashboardLink from '@/app/_components/DashboardNavigationBar/DashboardLink';

const DashboardNavigationBar = () => {
  return (
    <ul className='flex flex-wrap justify-center lg:gap-8 gap-x-4 gap-y-1 items-center mt-1 border-b w-fit mx-auto'>
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
        <DashboardLink href='/dashboard/update-resume'>
          Update Resume
        </DashboardLink>
      </li>
    </ul>
  );
};
export default DashboardNavigationBar;
