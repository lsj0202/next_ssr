import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from './components/Header';
import Footer from './components/Footer';
import { Inter } from 'next/font/google';
import { cn } from '@/utils/style';
import { useState } from 'react';
import Sidebar from './components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div
      className={cn(
        'flex min-h-screen w-screen text-sm lg:text-base',
        inter.className,
      )}
    >
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex flex-1 flex-col">
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <div className="flex flex-1 flex-col overflow-y-auto">
          <main className="bg-slate-50 flex-1">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
