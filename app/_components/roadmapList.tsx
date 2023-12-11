'use client';
import { useRouter } from 'next/navigation';

import RoadMapCard from './roadmap-card';

export interface RoadMapListProps {
  title: string;
  description: string;
}
const RoadMapList: React.FC<RoadMapListProps> = ({ title, description }) => {
  const router = useRouter();
  return (
    <div className='w-full'>
      <div>
        <h1 className='text-lg font-bold text-night-sky-blue'>{title}</h1>
        <span className='text-grayish-blue'>{description}</span>
      </div>
      <div className='mt-6 flex w-full flex-col  gap-y-4 pb-24 desktop:gap-y-6'>
        <RoadMapCard
          roadMapType='In-Progress'
          title='Add tags for solutions'
          description='Easier to search for solutions based on a specific stack.'
          type='Enhancement'
          onCardNavigate={() => router.push('/feedback/123')}
          onCounterClick={() => {}}
          numberOfDiscussion={2}
          numberOfLikes={112}
        />
        <RoadMapCard
          roadMapType='In-Progress'
          title='Add tags for solutions'
          description='Easier to search for solutions based on a specific stack.'
          type='Enhancement'
          onCounterClick={() => {}}
          numberOfDiscussion={2}
          numberOfLikes={112}
        />
        <RoadMapCard
          roadMapType='In-Progress'
          title='Add tags for solutions'
          description='Easier to search for solutions based on a specific stack.'
          type='Enhancement'
          onCounterClick={() => {}}
          numberOfDiscussion={2}
          numberOfLikes={112}
        />
      </div>
    </div>
  );
};

export default RoadMapList;
