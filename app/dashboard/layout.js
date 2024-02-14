import DashboardNavigationBar from '@/app/_components/Dashboard/DashboardNavigationBar';
import { getUser } from '@/app/_lib/getUser';
import { redirect } from 'next/navigation';
export default async function DashboardLayout({ children }) {
  const { user, error } = await getUser();

  if (!user || error) {
    redirect('/login');
  }

  return (
    <section className='dark:bg-slate-900 lg:py-8 py-4 dark:text-white lg:px-0 px-3 dark:h-screen'>
      <h2 className='text-center text-3xl'>Dashboard</h2>
      <DashboardNavigationBar />
      {children}
    </section>
  );
}
