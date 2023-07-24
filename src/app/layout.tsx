import { Nunito } from 'next/font/google';
import ToastProvider from './(providers)/ToastProvider';
import getCurrentUser from './actions/getCurrentUser';
import LoginModal from './components/modals/LoginModal';
import RegisterModal from './components/modals/RegisterModal';
import RentModal from './components/modals/RentModal';
import { Navbar } from './components/navbar/Navbar';
import './globals.css';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
};

const font = Nunito({ subsets: ['latin'] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang='en'>
      <body className={font.className}>
        <div className='p-10 bg-red-600 flex justify-center text-slate-100 font-bold'>
          THIS IS NOT REAL AIRBNB, THIS IS A SHOWCASE PROJECT. PLEASE DO NOT USE
          REAL INFORMATION
        </div>
        <ToastProvider />
        <LoginModal />
        <RegisterModal />
        <RentModal />
        <Navbar currentUser={currentUser} />
        <div className='pb-20 pt-28'>{children}</div>
      </body>
    </html>
  );
}
