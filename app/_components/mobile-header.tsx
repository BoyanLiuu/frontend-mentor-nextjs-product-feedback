'use client';
import { useState } from "react";
import Image from 'next/image'
import BadgesContainer from "./badges-container";
import RoadMapContainer from "./road-map-container";



const MobileHeader: React.FC = () => {

    const [showSidebar, setShowSidebar] = useState(false);

    return <div className="relative">
        <div className="w-full  bg-mobile-board-pattern flex items-center  justify-between bg-no-repeat px-6 h-[4.75rem] bg-cover">
            <div className="text-white inline-block">
                <div className="text-base font-bold">
                    Frontend Mentor
                </div>
                <div className="text-sm font-medium">Feedback Board</div>
            </div>
            <Image
                onClick={() => setShowSidebar((prev) => !prev)}
                src={showSidebar ? "/shared/mobile/icon-close.svg" : "/shared/mobile/icon-hamburger.svg"}
                width={20}
                height={17}
                alt={showSidebar ? "Open side bar icon" : " close side bar icon"}
                className='cursor-pointer inline-block '
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




}


export default MobileHeader;
