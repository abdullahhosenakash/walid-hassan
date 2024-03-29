import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { getUser } from '@/app/_lib/getFunctions/getUser';
import { getTheme } from '@/app/_lib/getFunctions/getTheme';
import Navbar from '@/app/_components/Navbar/Navbar';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Toaster } from 'react-hot-toast';
import Header from '@/app/_components/Navbar/Header';

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
        <Header>
          <Navbar user={user} theme={theme} />
        </Header>

        <main className='pt-4 lg:pt-0'>{children}</main>
        <Toaster
          toastOptions={{
            className: '',
            style: {
              marginTop: '50px'
            }
          }}
        />
      </body>
    </html>
  );
}
