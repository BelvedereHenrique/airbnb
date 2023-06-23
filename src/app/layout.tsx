import './globals.css';
import RegisterModal from './components/modals/RegisterModal';
import { Navbar } from './components/navbar/Navbar';
import { Nunito } from 'next/font/google';
import ToastProvider from './(providers)/ToastProvider';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
};

const font = Nunito({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <ToastProvider />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
