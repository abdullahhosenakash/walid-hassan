import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { getUser } from '@/app/_lib/getUser';
import { getTheme } from '@/app/_lib/getTheme';
import Navbar from '@/app/_components/Navbar/Navbar';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Walid Hassan',
  description: "This is Walid Hassan's personal portfolio website"
};

export default async function RootLayout({ children }) {
  config.autoAddCss = false;
  const { user } = await getUser();
  const theme = await getTheme();

  return (
    <html lang='en' className={`scroll-smooth ${theme}`}>
      <body className={`${inter.className} dark:bg-slate-900`}>
        <Navbar user={user} theme={theme} />
        <div className='pt-20'>{children}</div>
      </body>
    </html>
  );
}
