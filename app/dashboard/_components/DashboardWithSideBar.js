import DropDownDashboard from '@/app/dashboard/_components/DropDownDashboard';
import SideBar from '@/app/dashboard/_components/SideBar';

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
