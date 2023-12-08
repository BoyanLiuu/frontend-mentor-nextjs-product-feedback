'use client';
/* eslint-disable no-console */
import Image from 'next/image';
import { useState } from 'react';

import { ROADMAP_TYPE_ARRAY } from '../constants/road-map';
import { FeatureType } from '../types/feature';
import { RoadmapType } from '../types/road-map';

import { Dropdown, DropdownButton, DropdownContent, DropdownItem } from './drop-down';

import Button from '@/app/_components/button';

export interface CreateEditFeedbackFormProps {
  title?: string;
  category?: FeatureType;
  roadMapStatus?: RoadmapType;
  detail?: string;
  isEditingForm: boolean;
}

const CreateEditFeedbackForm: React.FC<CreateEditFeedbackFormProps> = ({
  title,
  category,
  roadMapStatus,
  detail,
  isEditingForm
}) => {
  const [planStatus, setPlanStatus] = useState<RoadmapType>('In-Progress');
  const [isOpen, setOpen] = useState<boolean>(false);
  console.log(planStatus);
  return (
    <div className='flex h-fit w-full flex-col'>
      <div>
        <div>
          <h1
            className='mb-6 text-lg font-bold text-night-sky-blue'
            onClick={() => console.log('adsadsadsadsadas')}
          >
            {isEditingForm ? `Editing ${title}` : 'Create New Feedback'}
          </h1>
          <div className='mb-6'>
            <label htmlFor='title' className='text-sm font-bold text-night-sky-blue'>
              Feedback Title
            </label>
            <div id='title-description' className='text-sm font-normal text-grayish-blue'>
              Add a short, descriptive headline
            </div>
            <textarea
              rows={2}
              id='title'
              name='title'
              value=''
              placeholder='Write your title here...'
              aria-describedby='title-description'
              className='light-grey  mt-4 w-full resize-none rounded-md border border-gray-300 bg-light-grey px-4
               py-6 text-sm outline-none focus:border-blue-500 focus:ring-blue-500'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='title' className='text-sm font-bold text-night-sky-blue'>
              Category
            </label>
            <div id='title-description' className='mb-4 text-sm font-normal text-grayish-blue'>
              Choose a category for your feedback
            </div>
          </div>
          {isEditingForm && (
            <div className='mb-6'>
              <label htmlFor='feature-state' className='text-sm font-bold text-night-sky-blue'>
                Update Status
              </label>
              <div
                id='feature-state-description'
                className='mb-4 text-sm font-normal text-grayish-blue'
              >
                Change feature state
              </div>
            </div>
          )}
          <div className='mb-10'>
            <label htmlFor='detail' className='text-sm font-bold text-night-sky-blue'>
              Feedback Detail
            </label>
            <div id='detail-description' className='text-sm font-normal text-grayish-blue'>
              Include any specific comments on what should be improved, added, etc.
            </div>

            <textarea
              rows={6}
              id='detail'
              name='detail'
              value=''
              placeholder='Write your feedback here...'
              aria-describedby='detail-description'
              className='light-grey mt-4 w-full resize-none rounded-md border border-gray-300 bg-light-grey px-4
               py-6 text-sm outline-none focus:border-blue-500 focus:ring-blue-500'
            />
          </div>
          <Dropdown setOpen={setOpen} isOpen={isOpen}>
            <DropdownButton>
              <button
                type='button'
                className='flex w-full items-center justify-between rounded-primary bg-light-grey px-6 py-3.5 text-base font-normal text-night-sky-blue'
              >
                {planStatus}

                <Image
                  src={isOpen ? '/shared/icon-arrow-down.svg' : '/shared/icon-arrow-up.svg'}
                  width={12}
                  height={6}
                  alt={isOpen ? 'open sort dropdown' : 'close sort dropdown'}
                  className=' ml-2 inline-block'
                />
              </button>
            </DropdownButton>
            <DropdownContent>
              {ROADMAP_TYPE_ARRAY.map((type) => (
                <DropdownItem key={type} onClick={() => setPlanStatus(type)}>
                  <div className='[&:not(:last-child)]:border-night-sky-blue/0.25 flex items-center justify-between border-b px-6 py-3 [&:not(:last-child)]:border-b'>
                    <span className=' inline-block w-full cursor-pointer text-base font-normal text-grayish-blue hover:text-primary-purple  '>
                      {type}
                    </span>
                    {planStatus === type && (
                      <Image
                        src='/shared/icon-check.svg'
                        width={12}
                        height={6}
                        alt='Selected'
                        className='ml-2 inline-block cursor-pointer'
                      />
                    )}
                  </div>
                </DropdownItem>
              ))}
            </DropdownContent>
          </Dropdown>
          <div className='flex flex-col gap-y-4'>
            {isEditingForm ? (
              <>
                <Button variant='primary' onClick={() => console.log('>>>>>>>>>>')}>
                  Save Changes
                </Button>
                <Button variant='info' onClick={() => console.log('>>>>>>>>>>')}>
                  Cancel
                </Button>
                <Button variant='error' onClick={() => console.log('>>>>>>>>>>')}>
                  Delete
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant='primary'
                  onClick={function (): void {
                    throw new Error('Function not implemented.');
                  }}
                >
                  Add Feedback
                </Button>

                <Button
                  variant='info'
                  onClick={function (): void {
                    throw new Error('Function not implemented.');
                  }}
                >
                  Cancel
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateEditFeedbackForm;

// <div style="width: 100%; height: 100%; background: white; box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.35); border-radius: 10px"></div>
