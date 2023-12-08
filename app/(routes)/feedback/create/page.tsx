'use client';
import Image from 'next/image';
import Link from 'next/link';

import CreateEditFeedbackForm from '@/app/_components/create-edit-feedback-form';

export default function Page() {
  return (
    <div className='flex flex-col'>
      <Link href='/' className='mb-14 font-bold'>
        <Image
          src='/shared/icon-arrow-left.svg'
          width={10}
          height={4}
          alt='go back arrow'
          className='mr-4 inline-block'
        />
        <span className='text-sm text-grayish-blue'>Go Back</span>
      </Link>
      <div className='w-full rounded-primary bg-white px-6 pb-6 pt-11'>
        <CreateEditFeedbackForm isEditingForm={true} />
      </div>
    </div>
  );
}
  