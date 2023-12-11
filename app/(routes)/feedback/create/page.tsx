'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import CreateEditFeedbackForm from '@/app/_components/create-edit-feedback-form';

export default function Page() {
  const router = useRouter();

  return (
    <div className=' flex flex-col'>
      <button onClick={() => router.back()} className='mb-14 font-bold desktop:mb-16'>
        <Image
          src='/shared/icon-arrow-left.svg'
          width={10}
          height={4}
          alt='go back arrow'
          className='mr-4 inline-block'
        />
        <span className='text-sm text-grayish-blue'>Go Back</span>
      </button>

      <div className='relative  w-full rounded-primary bg-white px-6 pb-6 pt-11 desktop:p-10'>
        <Image
          src={'/shared/icon-new-feedback.svg'}
          width={40}
          height={40}
          alt='new feedback'
          className='absolute top-[-1.25rem]'
        />
        <CreateEditFeedbackForm isEditingForm={true} />
      </div>
    </div>
  );
}
  