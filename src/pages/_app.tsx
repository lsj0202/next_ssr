import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex flex-col">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
