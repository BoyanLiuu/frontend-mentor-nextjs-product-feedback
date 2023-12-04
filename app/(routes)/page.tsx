'use client';
import BadgesContainer from '../_components/badges-container';
import CardTemplate from '../_components/card-template';
import HomepageHeader from '../_components/home-page-header';
import NoFeedbacks from '../_components/no-feedbacks';
import RoadMapContainer from '../_components/road-map-container';


export default function Home() {
  return (
    <main className=' h-full w-full px-6 tablet:px-0'>
      <div className='pt-8  flex flex-col  gap-y-4'>
        <CardTemplate title='Add tags for solutions' description="Easier to search for solutions based on a specific stack." type='Enhancement' onCounterClick={() => { }} numberOfDiscussion={2} numberOfLikes={112} />
        <CardTemplate title='Add tags for solutions' description="Easier to search for solutions based on a specific stack." type='Enhancement' onCounterClick={() => { }} numberOfDiscussion={2} numberOfLikes={112} />
        <CardTemplate title='Add tags for solutions' description="Easier to search for solutions based on a specific stack." type='Enhancement' onCounterClick={() => { }} numberOfDiscussion={2} numberOfLikes={112} />
        <CardTemplate title='Add tags for solutions' description="Easier to search for solutions based on a specific stack." type='Enhancement' onCounterClick={() => { }} numberOfDiscussion={2} numberOfLikes={112} />
        <NoFeedbacks />
      </div>
    </main>
  );
}
