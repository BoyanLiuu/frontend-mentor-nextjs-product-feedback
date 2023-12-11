'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import AddCommentContainer from '@/app/_components/add-comment-container';
import Button from '@/app/_components/button';
import Comment from '@/app/_components/comment';
import FeedbackCard from '@/app/_components/feedback-card';

export default function Page() {
  const router = useRouter();

  return (
    <div className='flex h-full w-full flex-col '>
      <div className='mb-6 flex items-center justify-between'>
        <button onClick={() => router.back()} className='font-bold '>
          <Image
            src='/shared/icon-arrow-left.svg'
            width={10}
            height={4}
            alt='go back arrow'
            className='mr-4 inline-block'
          />
          <span className='text-sm text-grayish-blue'>Go Back</span>
        </button>
        <Button variant='secondary' onClick={() => {}} className='h-fit'>
          Edit Feedback
        </Button>
      </div>
      <div className='mb-6'>
        <FeedbackCard
          title='Add tags for solutions'
          description='Easier to search for solutions based on a specific stack.'
          type='Enhancement'
          onCounterClick={() => {}}
          numberOfDiscussion={2}
          numberOfLikes={112}
        />
      </div>
      <div className='mb-6 flex flex-col bg-white p-6'>
        <h2 className='mb-6 text-lg font-bold'>4 Comments</h2>
        <div>
          <Comment
            onReplyComment={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
      </div>

      <AddCommentContainer onAddComment={() => {}} />
    </div>
  );
}
