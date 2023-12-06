'use client';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { SORT_BY_TYPE_ARRAY } from '../constants/sort';

import Button from './button';

export interface ActionBarProps {
  numberOfSuggestions: number;
}

const ActionBar: React.FC<ActionBarProps> = ({ numberOfSuggestions }) => {
  const [showSortByDropDown, setShowSortByDropDown] = useState(false);
  const router = useRouter();

  return (
    <div className='relative flex h-14 items-center justify-between bg-night-sky-blue px-6 text-white tablet:mt-10 tablet:h-[4.5rem] tablet:justify-start  tablet:rounded-primary tablet:px-3 desktop:mt-0'>
      <div className='hidden items-center  tablet:flex'>
        <Image
          src={'/suggestions/icon-suggestions.svg'}
          width={24}
          height={24}
          alt='Suggestions'
          className='inline-block'
        />
        <span className='ml-4 mr-9 inline-block'>
          {numberOfSuggestions > 0 ? `${numberOfSuggestions} Suggestions` : `1 Suggestion`}
        </span>
      </div>
      <div
        className='cursor-pointer text-sm'
        onClick={() => setShowSortByDropDown((prev) => !prev)}
      >
        <span>Sort by : </span>
        <span className='font-bold'>Most Upvotes</span>
        <Image
          src={
            showSortByDropDown
              ? '/shared/icon-arrow-up-white.svg'
              : '/shared/icon-arrow-down-white.svg'
          }
          width={12}
          height={6}
          alt={showSortByDropDown ? 'open sort dropdown' : 'close sort dropdown'}
          className=' ml-2 inline-block'
        />
      </div>
      {showSortByDropDown && (
        <div className='absolute top-[4.5rem] h-[12rem] w-[16rem] rounded-primary bg-white text-base font-normal text-grayish-blue shadow-[0_0_40_-7px_rgba(55,63,104,0.65)]'>
          {SORT_BY_TYPE_ARRAY.map((sortByValue) => (
            <div
              key={sortByValue}
              className='[&:not(:last-child)]:border-night-sky-blue/0.25 flex items-center justify-between px-6 py-3 [&:not(:last-child)]:border-b'
            >
              <span
                onClick={() => setShowSortByDropDown(false)}
                className=' inline-block w-full cursor-pointer text-base font-normal text-grayish-blue hover:text-primary-purple  '
              >
                {sortByValue}
              </span>
              <Image
                onClick={() => setShowSortByDropDown((prev) => !prev)}
                src='/shared/icon-check.svg'
                width={12}
                height={6}
                alt={showSortByDropDown ? 'open sort dropdown' : 'close sort dropdown'}
                className='ml-2 inline-block cursor-pointer'
              />
            </div>
          ))}
        </div>
      )}
      <Button
        className='tablet:ml-auto'
        variant={'primary'}
        onClick={() => router.push('/feedback/create')}
      >
        + Add Feedback
      </Button>
    </div>
  );
};
export default ActionBar;
