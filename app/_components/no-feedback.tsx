'use client';
import Image from 'next/image'



const NoFeedback: React.FC = () => (
  <div className='flex flex-col items-center text-center'>
  <Image
      src="/suggestions/illustration-empty.svg"
      width={102}
      height={108}
      alt="no feedback illustration"
      className='mb-10'
    />
    <h1 className="text-lg text-night-sky-blue font-bold mb-3.5">
    There is no feedback yet.
    </h1>
    <span className='mb-6 text-sm font-normal text-grayish-blue'>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</span>

  </div>
);

export default NoFeedback;
