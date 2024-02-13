import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { getUser } from '@/app/_lib/getUser';
import { getTheme } from '@/app/_lib/getTheme';
import Navbar from '@/app/_components/Navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Walid Hassan',
  description: "This is Walid Hassan's personal portfolio website"
};

export default async function RootLayout({ children }) {
  const { user } = await getUser();
  const theme = await getTheme();

  return (
    <html lang='en' className={`scroll-smooth ${theme}`}>
      <body className={inter.className}>
        <Navbar user={user} theme={theme} />
        {children}
      </body>
    </html>
  );
}
