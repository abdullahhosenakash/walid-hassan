import Banner from '@/app/_components/Banner/Banner';
import HomepageCard from '@/app/_components/HomepageCard/HomepageCard';

export default async function Home() {
  const response = await fetch(
    'https://walid-hassan.vercel.app/api/miscellaneous-data'
  );
  const { homepage } = await response.json();

  const { homepageCards, ...bannerData } = homepage || {};
  return (
    <section className='bg-white dark:bg-slate-900 text-black dark:text-white pb-20 dark:min-h-screen'>
      <Banner bannerData={bannerData} />
      <HomepageCard homepageCards={homepageCards} />
    </section>
  );
}
