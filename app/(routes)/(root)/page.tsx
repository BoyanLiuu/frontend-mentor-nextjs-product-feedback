'use client';
import BadgesContainer from '@/app/_components/badges-container';
import CardTemplate from '@/app/_components/card-template';
import HomepageHeader from '@/app/_components/home-page-header';
import NoFeedbacks from '@/app/_components/no-feedbacks';
import RoadMapContainer from '@/app/_components/road-map-container';


export default function Home() {
  return (
    <main className=' h-full w-full px-6 tablet:px-0'>
      <div className='flex  flex-col gap-y-4  pt-8'>
        <CardTemplate
          title='Add tags for solutions'
          description='Easier to search for solutions based on a specific stack.'
          type='Enhancement'
          onCounterClick={() => {}}
          numberOfDiscussion={2}
          numberOfLikes={112}
        />
        <CardTemplate
          title='Add tags for solutions'
          description='Easier to search for solutions based on a specific stack.'
          type='Enhancement'
          onCounterClick={() => {}}
          numberOfDiscussion={2}
          numberOfLikes={112}
        />
        <CardTemplate
          title='Add tags for solutions'
          description='Easier to search for solutions based on a specific stack.'
          type='Enhancement'
          onCounterClick={() => {}}
          numberOfDiscussion={2}
          numberOfLikes={112}
        />
        <CardTemplate
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
