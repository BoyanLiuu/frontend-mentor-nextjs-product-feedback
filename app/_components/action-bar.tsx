'use client';
import Image from 'next/image'
import { useState } from "react";
import Button from "./button";
import { SORT_BY_TYPE_ARRAY } from '../constants/sort';

const ActionBar: React.FC = () => {
    const [showSortByDropDown, setShowSortByDropDown] = useState(false);
    return <div
        className='h-14 bg-night-sky-blue px-6 flex justify-between items-center text-white relative'>
        <div className="text-sm ">

            <span>Sort by : </span>
            <span className="font-bold">Most Upvotes</span>
            <Image
                onClick={() => setShowSortByDropDown((prev) => !prev)}
                src={showSortByDropDown ? "/shared/icon-arrow-down-white.svg" : "/shared/icon-arrow-up-white.svg"}
                width={12}
                height={6}
                alt={showSortByDropDown ? "open sort dropdown" : "close sort dropdown"}
                className='cursor-pointer inline-block ml-2'
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

        <Button variant={"primary"} onClick={function (): void {
            throw new Error("Function not implemented.");
        }}>
            + Add Feedback</Button>
    </div>
}
export default ActionBar;
