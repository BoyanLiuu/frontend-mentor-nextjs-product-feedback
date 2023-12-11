'use client';

import RoadMapList from '@/app/_components/roadmapList';

export default function Page() {
  return (
    <>
      <div className='tablet:hidden'>
        <RoadMapList title='Planned (2)' description='Ideas prioritized for research' />
      </div>
      <div className='hidden  justify-between gap-x-3  tablet:flex desktop:gap-x-8'>
        <RoadMapList title='Planned (2)' description='Ideas prioritized for research' />
        <RoadMapList title='Planned (2)' description='Ideas prioritized for research' />
        <RoadMapList title='Planned (2)' description='Ideas prioritized for research' />
      </div>
    </>
  );
}
