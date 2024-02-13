import Banner from '@/app/_components/Banner/Banner';
import HomepageCard from '@/app/_components/HomepageCard/HomepageCard';

export default function Home() {
  return (
    <main className='bg-white dark:bg-slate-900 text-black dark:text-white pb-20'>
      <Banner />
      <HomepageCard />
    </main>
  );
}
