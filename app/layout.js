import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/_components/Navbar/Navbar';
import ThemeProvider from './_components/ThemeProvider/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Walid Hassan',
  description: "This is Walid Hassan's personal portfolio website"
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
