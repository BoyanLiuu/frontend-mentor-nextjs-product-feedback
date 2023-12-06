import '@/app/(routes)/globals.css';

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <div className='bg-light-grey px-6 pt-8 pb-20 w-full h-full flex justify-center'>{children}</div>
  }