import DashboardLink from '@/app/dashboard/_components/DashboardLink';

const SideBar = ({ setDropDownToggled }) => {
  return (
    <aside className='lg:fixed absolute left-0 lg:top-14 h-screen lg:w-[20%]'>
      <div className='lg:h-full px-3 py-4 overflow-y-auto bg-slate-200 dark:bg-slate-800 shadow-md shadow-slate-300 dark:shadow-slate-700'>
        <h3 className='text-xl text-center pt-2 pb-1 px-0'>
          <DashboardLink
            href='/dashboard'
            setDropDownToggled={setDropDownToggled}
          >
            Dashboard
          </DashboardLink>
        </h3>
        <hr className='border-slate-600 py-1' />
        <ul className='flex flex-col gap-3'>
          <li>
            <DashboardLink
              href='/dashboard/update-homepage'
              setDropDownToggled={setDropDownToggled}
            >
              Update Homepage
            </DashboardLink>
          </li>

          <li>
            <DashboardLink
              href='/dashboard/update-about'
              setDropDownToggled={setDropDownToggled}
            >
              Update About
            </DashboardLink>
          </li>

          <li>
            <DashboardLink
              href='/dashboard/update-skills'
              setDropDownToggled={setDropDownToggled}
            >
              Update Skills
            </DashboardLink>
          </li>

          <li>
            <DashboardLink
              href='/dashboard/update-projects'
              setDropDownToggled={setDropDownToggled}
            >
              Update Projects
            </DashboardLink>
          </li>

          <li>
            <DashboardLink
              href='/dashboard/update-experience'
              setDropDownToggled={setDropDownToggled}
            >
              Update Experience
            </DashboardLink>
          </li>

          <li>
            <DashboardLink
              href='/dashboard/update-certifications'
              setDropDownToggled={setDropDownToggled}
            >
              Update Certifications
            </DashboardLink>
          </li>

          <li>
            <DashboardLink
              href='/dashboard/update-research-papers'
              setDropDownToggled={setDropDownToggled}
            >
              Update Research Papers
            </DashboardLink>
          </li>

          <li>
            <DashboardLink
              href='/dashboard/update-resume'
              setDropDownToggled={setDropDownToggled}
            >
              Update Resume
            </DashboardLink>
          </li>

          <li>
            <DashboardLink
              href='/dashboard/update-contact'
              setDropDownToggled={setDropDownToggled}
            >
              Update Contact
            </DashboardLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};
export default SideBar;
