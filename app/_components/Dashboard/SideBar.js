import DashboardLinks from '@/app/_components/Dashboard/DashboardLinks';

const SideBar = () => {
  return (
    <aside className='lg:fixed absolute left-0 lg:top-14 h-screen lg:w-[20%]'>
      <div className='h-full px-3 py-4 overflow-y-auto bg-slate-200 dark:bg-slate-800 shadow-md shadow-slate-300 dark:shadow-slate-700'>
        <h3 className='text-xl text-center pt-2 pb-1 px-0'>Dashboard</h3>
        <hr className='border-slate-600 py-1' />
        <DashboardLinks />
      </div>
    </aside>
  );
};
export default SideBar;
