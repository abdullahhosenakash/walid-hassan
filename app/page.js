import Banner from '@/app/_components/Banner/Banner';
import HomepageCard from '@/app/_components/HomepageCard/HomepageCard';

export default async function Home() {
  const response = await fetch(
    'https://walid-hassan.vercel.app/api/miscellaneous-data',
    {
      next: { tags: ['homepage'] }
    }
  );
  const { homepage } = await response.json();

  if (!homepage) {
    throw new Error('Failed to get homepage data');
  }

  const { homepageCards, ...bannerData } = homepage || {};
  return (
    <main className='bg-white dark:bg-slate-900 text-black dark:text-white pb-20 dark:min-h-screen'>
      <Banner bannerData={bannerData} />
      <HomepageCard homepageCards={homepageCards} />
    </main>
  );
}
