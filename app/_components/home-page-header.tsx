'use client';
import Image from 'next/image';
import { useState } from 'react';

import BadgesContainer from './badges-container';
import RoadMapContainer from './road-map-container';

const HomepageHeader: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className='relative'>
      {/* Table & Desktop Header */}
      <div className='hidden justify-between tablet:flex desktop:flex-col desktop:gap-y-6'>
        <div className='desktop:desktop-board-pattern flex flex-col justify-end rounded-primary bg-tablet-board-pattern  bg-cover   bg-no-repeat pb-6 pl-6 text-white tablet:h-[11.2rem] tablet:w-[14rem]'>
          <div className='text-xl font-bold'>Frontend Mentor</div>
          <div className='text-base font-medium'>Feedback Board</div>
        </div>
        <BadgesContainer />
        <RoadMapContainer />
      </div>

      {/* Mobile Header */}
      <div className='flex h-[4.75rem] w-full items-center  justify-between bg-mobile-board-pattern bg-cover bg-no-repeat px-6 tablet:hidden'>
        <div className='inline-block text-white'>
          <div className='text-base font-bold'>Frontend Mentor</div>
          <div className='text-sm font-medium'>Feedback Board</div>
        </div>
        <Image
          onClick={() => setShowSidebar((prev) => !prev)}
          src={showSidebar ? '/shared/mobile/icon-close.svg' : '/shared/mobile/icon-hamburger.svg'}
          width={20}
          height={17}
          alt={showSidebar ? 'Open side bar icon' : ' close side bar icon'}
          className='inline-block cursor-pointer '
        />
      </div>
      {/* <div>
            {showSidebar && <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-[-1]" />}
            <div
                className={`bot-0 right-0 w-[17rem]  flex flex-col items-center pt-6 gap-y-4 bg-light-grey  absolute h-[calc(100vh-4.75rem)]  z-40  ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"
                    }`}
            >
                <BadgesContainer />
                <RoadMapContainer />
            </div>
        </div> */}
    </div>
  );
};

export default HomepageHeader;
