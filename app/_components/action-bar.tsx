'use client';
import Image from 'next/image';
import { useState } from 'react';

import { SORT_BY_TYPE_ARRAY } from '../constants/sort';
import { SortByType } from '../types/sort';

import ActionDropDown from './actions-drop-down';
import { Dropdown, DropdownButton, DropdownContent, DropdownItem } from './drop-down';
import { UserAvatar } from './user-avatar';

export interface ActionBarProps {
  numberOfSuggestions: number;
}

const ActionBar: React.FC<ActionBarProps> = ({ numberOfSuggestions }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [sortByStatus, setSortByStatus] = useState<SortByType>('Least Comments');

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

      <Dropdown setOpen={setOpen} isOpen={isOpen}>
        <DropdownButton>
          <div className='cursor-pointer text-sm'>
            <span>Sort by : </span>
            <span className='font-bold'>Most Upvotes</span>
            <Image
              src={isOpen ? '/shared/icon-arrow-up-white.svg' : '/shared/icon-arrow-down-white.svg'}
              width={12}
              height={6}
              alt={isOpen ? 'open sort dropdown' : 'close sort dropdown'}
              className=' ml-2 inline-block'
            />
          </div>
        </DropdownButton>

        <DropdownContent>
          {SORT_BY_TYPE_ARRAY.map((sortByValue) => (
            <DropdownItem key={sortByValue} onClick={() => setSortByStatus(sortByValue)}>
              <div
                key={sortByValue}
                className='[&:not(:last-child)]:border-night-sky-blue/0.25 flex items-center justify-between border-b px-6 py-3 [&:not(:last-child)]:border-b'
              >
                <span className=' inline-block w-full cursor-pointer text-base font-normal text-grayish-blue hover:text-primary-purple  '>
                  {sortByValue}
                </span>
                {sortByStatus === sortByValue && (
                  <Image
                    src='/shared/icon-check.svg'
                    width={12}
                    height={6}
                    alt={isOpen ? 'open sort dropdown' : 'close sort dropdown'}
                    className='ml-2 inline-block cursor-pointer'
                  />
                )}
              </div>
            </DropdownItem>
          ))}
        </DropdownContent>
      </Dropdown>

      <div className='ml-auto flex '>
        <div className='mr-2'>
          <UserAvatar name={''} />
        </div>

        <ActionDropDown />
      </div>
    </div>
  );
};
export default ActionBar;
