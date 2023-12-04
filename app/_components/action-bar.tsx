'use client';
import Image from 'next/image'
import { useState } from "react";
import Button from "./button";
import { SORT_BY_TYPE_ARRAY } from '../constants/sort';
import { useRouter } from 'next/navigation'

export interface ActionBarProps {
    numberOfSuggestions:number;
}

const ActionBar: React.FC<ActionBarProps> = ({
    numberOfSuggestions
}) => {
    const [showSortByDropDown, setShowSortByDropDown] = useState(false);
    const router = useRouter();

    return <div
        className='h-14 bg-night-sky-blue px-6 flex justify-between items-center text-white relative tablet:h-[4.5rem] tablet:px-3 tablet:mt-10  desktop:mt-0 tablet:rounded-primary tablet:justify-start'>
        <div className='hidden tablet:flex  items-center'>
        <Image
                src={"/suggestions/icon-suggestions.svg"}
                width={24}
                height={24}
                alt="Suggestions"
                className='inline-block'
            />
        <span className='inline-block ml-4 mr-9'>{numberOfSuggestions > 0 ?  `${numberOfSuggestions} Suggestions`: `1 Suggestion`
        }</span>
        </div>
        <div className="text-sm cursor-pointer" onClick={() => setShowSortByDropDown((prev) => !prev)}>

            <span>Sort by : </span>
            <span className="font-bold">Most Upvotes</span>
            <Image
                
                src={showSortByDropDown ?  "/shared/icon-arrow-up-white.svg" :"/shared/icon-arrow-down-white.svg" }
                width={12}
                height={6}
                alt={showSortByDropDown ? "open sort dropdown" : "close sort dropdown"}
                className=' inline-block ml-2'
            />
        </div>
       {
       showSortByDropDown&& <div className='w-[16rem] h-[12rem] top-[4.5rem] bg-white absolute rounded-primary shadow-[0_0_40_-7px_rgba(55,63,104,0.65)] font-normal text-base text-grayish-blue'>
        {SORT_BY_TYPE_ARRAY.map((sortByValue) => (
            <div className='flex justify-between items-center px-6 py-3 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-night-sky-blue/0.25'>
            <span onClick={()=>setShowSortByDropDown(false)} className=' font-normal text-base text-grayish-blue inline-block cursor-pointer hover:text-primary-purple w-full  '>{sortByValue}</span>
            <Image
                onClick={() => setShowSortByDropDown((prev) => !prev)}
                src="/shared/icon-check.svg" 
                width={12}
                height={6}
                alt={showSortByDropDown ? "open sort dropdown" : "close sort dropdown"}
                className='cursor-pointer inline-block ml-2'
            />
            </div>
        ))}
    </div>
       } 
        <Button  className='tablet:ml-auto'  variant={"primary"} onClick={() => router.push('/feedback/add')}>
            + Add Feedback</Button>
    </div>
}
export default ActionBar;
