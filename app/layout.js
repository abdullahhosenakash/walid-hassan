import { Inter } from 'next/font/google';
import '@/app/globals.css';
import ThemeProvider from '@/app/_components/ThemeProvider/ThemeProvider';
import { getUser } from '@/app/_lib/getUser';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Walid Hassan',
  description: "This is Walid Hassan's personal portfolio website"
};

export default async function RootLayout({ children }) {
  const { user } = await getUser();
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={inter.className}>
        <ThemeProvider user={user}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
