import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './Styles/globals.scss';
import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer } from 'react-toastify';
import GotoTop from '../components/GotoTop';
import StateContextProvider from '../context/StateContext';
import Providers from './Providers';

import { SessionProvider } from '../context/sessionProvider';
import SwipeIndicator from '../components/sidebars/SwipeIndicator';
import Head from 'next/head';
import LenisProvider from '@/components/LenisProvider';
import ThemeProvider from '@/context/ThemeCtx';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans'
});

export const metadata: Metadata = {
  title: 'Code Granites',
  description: 'Illuminating Ideas and Forging Solutions'
  // image: ""
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={workSans.variable}>
      <SessionProvider>
        <StateContextProvider>
          <LenisProvider>
            <ThemeProvider>
              <body className={workSans.className}>
                <Providers>{children}</Providers>
                <SwipeIndicator />
                <GotoTop />
              </body>
            </ThemeProvider>
          </LenisProvider>
        </StateContextProvider>
      </SessionProvider>
    </html>
  );
}
