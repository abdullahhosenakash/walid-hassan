// 'use client';

import Banner from '@/app/_components/Banner/Banner';
import HomepageCard from '@/app/_components/HomepageCard/HomepageCard';
// import { useEffect, useState } from 'react';

export default async function Home() {
  // const [homepageData, setHomepageData] = useState({});

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await fetch('/api/miscellaneous-data');
  //       const { homepage } = await response.json();
  //       setHomepageData(homepage);
  //     } catch (error) {
  //       throw new Error('Failed to get homepage data');
  //     }
  //   })();
  // }, []);

  // const response = await fetch('https://walid-hassan.vercel.app/api/miscellaneous-data', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({ time: new Date().toISOString() })
  // });
  const response = await fetch(
    'https://walid-hassan.vercel.app/api/miscellaneous-data'
  );
  const { homepage } = await response.json();

  const { homepageCards, ...bannerData } = homepage || {};
  return (
    <main className='bg-white dark:bg-slate-900 text-black dark:text-white pb-20 dark:min-h-screen'>
      <Banner bannerData={bannerData} />
      <HomepageCard homepageCards={homepageCards} />
    </main>
  );
}
