import { getUser } from '@/app/_lib/getUser';

const Dashboard = async () => {
  const { user } = await getUser();
  // console.log(user);

  return (
    <section className='dark:bg-slate-900 dark:text-white lg:px-0 px-3'>
      <h2 className='text-center text-3xl'>
        Welcome to your dashboard {user?.userName}
      </h2>
    </section>
  );
};

export default Dashboard;
