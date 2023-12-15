'use client';
import Link from 'next/link';
import { useState } from 'react';

import { Dropdown, DropdownButton, DropdownContent } from './drop-down';

export interface ActionDropDownProps {}

const ActionDropDown: React.FC<ActionDropDownProps> = ({}) => {
  const [isActionOpen, setIsActionOpen] = useState<boolean>(false);

  return (
    <Dropdown setOpen={setIsActionOpen} isOpen={isActionOpen}>
      <DropdownButton>
        <span className='cursor-pointer text-sm font-bold'>Actions</span>
      </DropdownButton>

      <DropdownContent className='left-[-8.1rem]'>
        <div className='flex flex-col  gap-2'>
          <div className='flex flex-col space-y-1 p-3'>
            <p className='font-medium'>Shawn Liu</p>
            <p className='text-muted-foreground  truncate text-sm'>lbyybl1996@gmail.com</p>
          </div>
          <div role='separator' aria-orientation='horizontal' className=' h-px bg-gray-400'></div>
          <Link href='/feedback/create' className='pl-3 text-sm'>
            Sign In / Sign up
          </Link>
          <Link href='/feedback/create' className='pb-3 pl-3 text-sm'>
            + Add Feedback
          </Link>
        </div>
      </DropdownContent>
    </Dropdown>
  );
};
export default ActionDropDown;
