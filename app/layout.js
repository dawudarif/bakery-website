import MainLayout from './components/MainLayout';
import './globals.css';
// import 'swiper/swiper-bundle.min.css';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bakery App',
  description: 'Bakery App',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
