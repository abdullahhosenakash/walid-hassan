import { redirect } from 'next/navigation';
export default function DashboardLayout({ children }) {
  const isAuthenticated = false;
  if (isAuthenticated) {
    redirect('/login');
  }
  return (
    <section className='dark:bg-slate-900 py-8 dark:text-white lg:px-0 px-3'>
      <h2 className='text-center text-3xl'>Dashboard</h2>
      {children}
    </section>
  );
}
