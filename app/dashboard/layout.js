import DashboardWithSideBar from '@/app/dashboard/_components/DashboardWithSideBar';
import { getUser } from '@/app/_lib/getFunctions/getUser';
import { redirect } from 'next/navigation';
export default async function DashboardLayout({ children }) {
  const { user, error } = await getUser();

  if (!user || error) {
    redirect('/login');
  }

  return (
    <section className='dark:bg-slate-900 pb-6 dark:text-white lg:px-0 px-3 dark:min-h-screen relative'>
      <DashboardWithSideBar />
      <div className='lg:w-[80%] lg:ml-auto'>{children}</div>
    </section>
  );
}
