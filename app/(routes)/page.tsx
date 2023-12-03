'use client';
import BadgesContainer from '../_components/badges-container';
import CardTemplate from '../_components/card-template';
import MobileHeader from '../_components/mobile-header';
import NoFeedbacks from '../_components/no-feedbacks';
import RoadMapContainer from '../_components/road-map-container';


export default function Home() {
  return (
    <main className=' h-full w-full px-6 bg-light-grey '>
      <div className='pt-8 pb-14 flex flex-col  gap-y-4'>
      <CardTemplate title='Add tags for solutions' description="Easier to search for solutions based on a specific stack." type='Enhancement' onCounterClick={()=>{}} numberOfDiscussion={2} numberOfLikes={112}/>
    <CardTemplate title='Add tags for solutions' description="Easier to search for solutions based on a specific stack." type='Enhancement' onCounterClick={()=>{}} numberOfDiscussion={2} numberOfLikes={112}/>
    <CardTemplate title='Add tags for solutions' description="Easier to search for solutions based on a specific stack." type='Enhancement' onCounterClick={()=>{}} numberOfDiscussion={2} numberOfLikes={112}/>
    <CardTemplate title='Add tags for solutions' description="Easier to search for solutions based on a specific stack." type='Enhancement' onCounterClick={()=>{}} numberOfDiscussion={2} numberOfLikes={112}/>
    <NoFeedbacks/>
      </div>

    
      {/* <BadgesContainer />
      <RoadMapContainer/>


       */}

    </main>
  );
}
