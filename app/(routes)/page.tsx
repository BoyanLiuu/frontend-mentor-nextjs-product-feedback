'use client';
import BadgesContainer from '../_components/badges-container';
import CardTemplate from '../_components/card-template';
import NoFeedback from '../_components/no-feedback';
import RoadMapContainer from '../_components/road-map-container';

export default function Home() {
  return (
    <main className='flex flex-col  gap-y-8 h-screen w-full items-center justify-center bg-light-grey'>
      <BadgesContainer />
      <RoadMapContainer/>
      <CardTemplate title='Add tags for solutions' description="Easier to search for solutions based on a specific stack." type='Enhancement' onCounterClick={()=>{}} numberOfDiscussion={2} numberOfLikes={112}/>
      <NoFeedback/>
    </main>
  );
}
