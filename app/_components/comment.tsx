import Image from 'next/image';
import { useState } from 'react';

import Button from './button';

export interface CommentProps {
  onReplyComment: () => void;
}

const Comment: React.FC<CommentProps> = ({ onReplyComment }) => {
  const [isCommentFormOpen, setIsCommentFormOpen] = useState<boolean>(false);
  return (
    <div className='flex w-full flex-col border-b border-[#8C92B3]/25 bg-inherit pb-8'>
      <div className='flex'>
        <Image
          src={'/image-zena.jpg'}
          width={40}
          height={40}
          alt='user avatar'
          className='mr-4 hidden h-fit rounded-full tablet:inline-block'
        />

        <div className='inline-block flex-1'>
          <div className='mb-4 flex items-center'>
            <Image
              src={'/image-zena.jpg'}
              width={40}
              height={40}
              alt='user avatar'
              className='mr-4 inline-block rounded-full tablet:hidden'
            />

            <div className='flex flex-col'>
              <span className='text-sm font-bold text-night-sky-blue'>Elijah Moss</span>
              <span className='text-sm font-normal text-grayish-blue'>@hexagon.bestagon</span>
            </div>

            <button
              onClick={() => setIsCommentFormOpen(true)}
              className='ml-auto cursor-pointer text-sm font-semibold text-primary-blue'
            >
              Reply
            </button>
          </div>
          <span className='text-sm font-normal text-grayish-blue'>
            Also, please allow styles to be applied based on system preferences. I would love to be
            able to browse Frontend Mentor in the evening after my device’s dark mode turns on
            without the bright background it currently has.
          </span>
          {isCommentFormOpen && (
            <form className='mt-6'>
              <div className='flex flex-col tablet:flex-row tablet:items-center'>
                <label htmlFor='comment' className='sr-only'>
                  Your comment
                </label>
                <textarea
                  id='comment'
                  rows={4}
                  className='light-grey flex-1 resize-none rounded-md border border-gray-300 bg-light-grey
            px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-blue-500'
                  placeholder='Type your comment here'
                  required
                ></textarea>
                <Button
                  variant='primary'
                  onClick={onReplyComment}
                  className='ml-auto mt-4 block w-fit target:ml-4 tablet:ml-4 tablet:mt-0 tablet:h-fit'
                >
                  Post Reply
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
