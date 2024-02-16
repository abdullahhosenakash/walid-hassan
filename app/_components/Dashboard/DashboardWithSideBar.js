import DashboardLinks from '@/app/_components/Dashboard/DashboardLinks';
import DropDownDashboard from '@/app/_components/Dashboard/DropDownDashboard';
import SideBar from '@/app/_components/Dashboard/SideBar';
import Link from 'next/link';

const DashboardWithSideBar = () => {
  return (
    <section>
      <div className='lg:block hidden'>
        <SideBar />
      </div>
      <div className='lg:hidden block'>
        <DropDownDashboard />
      </div>
    </section>
  );
};
export default DashboardWithSideBar;
