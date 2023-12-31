'use client';
import { useRouter } from 'next/navigation';

import FeedbackCard from '@/app/_components/feedback-card';
import NoFeedbacks from '@/app/_components/no-feedbacks';

export default function Home() {
  const router = useRouter();
  return (
    <main className=' h-full w-full px-6 tablet:px-0'>
      <div className='flex  flex-col gap-y-4  pt-8'>
        <FeedbackCard
          title='Add tags for solutions'
          description='Easier to search for solutions based on a specific stack.'
          type='Enhancement'
          onCardNavigate={() => router.push('/feedback/123')}
          onCounterClick={() => {}}
          numberOfDiscussion={2}
          numberOfLikes={112}
        />
        <FeedbackCard
          title='Add tags for solutions'
          description='Easier to search for solutions based on a specific stack.'
          type='Enhancement'
          onCounterClick={() => {}}
          numberOfDiscussion={2}
          numberOfLikes={112}
        />
        <FeedbackCard
          title='Add tags for solutions'
          description='Easier to search for solutions based on a specific stack.'
          type='Enhancement'
          onCounterClick={() => {}}
          numberOfDiscussion={2}
          numberOfLikes={112}
        />
        <FeedbackCard
          title='Add tags for solutions'
          description='Easier to search for solutions based on a specific stack.'
          type='Enhancement'
          onCounterClick={() => {}}
          numberOfDiscussion={2}
          numberOfLikes={112}
        />
        <NoFeedbacks />
      </div>
    </main>
  );
}
