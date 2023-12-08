import '@/app/(routes)/globals.css';
import clsx from 'clsx';
import { Jost } from 'next/font/google';
const font = Jost({ subsets: ['latin'] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={clsx(
          'flex h-full w-full justify-center bg-light-grey px-6 pb-20 pt-8',
          font.className
        )}
      >
        {children}
      </body>
    </html>
  );
}