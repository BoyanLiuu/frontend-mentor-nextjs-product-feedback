import Link from "next/link";

import { RoadmapType } from "../types/road-map";

export type RoadMapConfig = {
    color: string;
    type: RoadmapType;
    count: number
}

const RoadMapContainer = () => {
    const ROAD_MAP_CONFIGS: RoadMapConfig[] = [{
        'color': 'orange',
        'count': 2,
        'type': 'Planned'

    }, {
        'color': 'primary-purple',
        'count': 3,
        'type': 'In-Progress'

    }, {
        'color': 'sky-blue',
        'count': 1,
        'type': 'Live'

    }];

    return (
      <div className='flex h-[12rem]   w-[14.4rem] flex-col rounded-primary bg-white p-6 tablet:h-[11.2rem] tablet:w-[14rem]'>
        <div className='mb-6 flex w-full items-center justify-between'>
          <span className='inline-block text-lg font-bold text-night-sky-blue'>Roadmap</span>
          <Link
            href='/roadmap/In-progress'
            className='text-sm font-semibold text-dark-blue underline'
          >
            View
          </Link>
        </div>
        <div className=' flex w-full flex-col gap-y-2'>
          {ROAD_MAP_CONFIGS.map(({ color, count, type }) => (
            <div key={type}>
              <div className={`inline-block h-3 w-3  rounded-primary bg-${color} mr-4`} />
              <span className='text-base text-grayish-blue'>{type}</span>
              <div className='float-right inline-block'>{count}</div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default RoadMapContainer;
