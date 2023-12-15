'use client';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

import { ROADMAP_TYPE_ARRAY } from '../constants/road-map';

import Button from '@/app/_components/button';

export default function RoadMapHeader() {
  const params = useParams();
  const router = useRouter();
  return (
    <>
      <div className='flex w-full justify-between bg-night-sky-blue p-6 tablet:mb-8 tablet:rounded-primary tablet:p-8'>
        <div className='flex flex-col font-bold text-white'>
          <button onClick={() => router.back()} className='flex items-center'>
            <Image
              src='/shared/icon-arrow-left-white.svg'
              width={10}
              height={4}
              alt='go back arrow'
              className='mr-4 inline-block'
            />
            <span className='text-sm '>Go Back</span>
          </button>
          <span className='text-lg tablet:text-2xl'>Roadmap</span>
        </div>
        <Button variant='primary' onClick={() => {}} className='h-fit'>
          + Add Feedback
        </Button>
      </div>
      <ul className=' flex w-full border-b border-[#8C92B3]/25  text-lg font-bold tablet:hidden'>
        {ROADMAP_TYPE_ARRAY.map((roadmapType) => (
          <li className='w-full flex-1' key={roadmapType}>
            <Link
              href={`/roadmap/${roadmapType}`}
              className={clsx(
                'block w-full py-5 text-center text-night-sky-blue',
                params.type === roadmapType
                  ? 'border-b-4 border-primary-purple'
                  : 'text-night-sky-blue/40'
              )}
            >
              {`${roadmapType} (2)`}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
