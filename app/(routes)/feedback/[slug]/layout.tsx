import '@/app/(routes)/globals.css';
import clsx from 'clsx';
import { Jost } from 'next/font/google';
const font = Jost({ subsets: ['latin'] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={clsx(
          'flex h-screen w-screen justify-center overflow-x-hidden bg-light-grey px-6 pb-[5.5rem] pt-6',
          font.className
        )}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
