import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex flex-1 flex-col">
        <Header />
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
