import { Inter } from 'next/font/google';
import '@/app/globals.css';
import ThemeProvider from '@/app/_components/ThemeProvider/ThemeProvider';
import { cookies } from 'next/headers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Walid Hassan',
  description: "This is Walid Hassan's personal portfolio website"
};

export default function RootLayout({ children }) {
  const cookieStore = cookies();
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
