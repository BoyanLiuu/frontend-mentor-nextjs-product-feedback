'use client';
import Image from 'next/image'
import Button from './button';
import { useRouter } from 'next/navigation'


const NoFeedbacks: React.FC = () => {
  const router = useRouter();
  return <div className='flex flex-col items-center text-center bg-white rounded-primary px-6 py-[4.75rem]'>
    <Image
      src="/suggestions/illustration-empty.svg"
      width={102}
      height={108}
      alt="no feedback illustration"
      className='mb-10 table:mb-16'
    />
    <h1 className="text-lg text-night-sky-blue font-bold mb-3.5 tablet:text-2xl tablet:mb-4">
      There is no feedback yet.
    </h1>
    <span className='mb-6 text-sm font-normal text-grayish-blue tablet:text-base tablet:mb-12'>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</span>
    <Button variant='primary' onClick={() => router.push('/feedback/create')}>
      + Add Feedback
    </Button>
  </div>
}

export default NoFeedbacks;
