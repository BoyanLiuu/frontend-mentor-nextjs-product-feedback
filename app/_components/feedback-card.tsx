'use client';
import clsx from 'clsx';

import { FeatureType } from '../types/feature';

import Badge from './badge';
import CommentsCounterButton from './comment-counter-button';
import LikeCounterButton from './like-counter-button';

export interface FeedbackCardProps {
  title: string;
  description: string;
  type: FeatureType;
  onCounterClick: () => void;
  onCardNavigate?: () => void;
  numberOfDiscussion: number;
  numberOfLikes: number;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  title,
  description,
  type,
  onCardNavigate,
  onCounterClick,
  numberOfDiscussion
}) => {
  return (
    <div className='flex h-[12.5rem] flex-col rounded-primary bg-white p-6 tablet:h-[9.5rem] tablet:flex-row'>
      <LikeCounterButton numberOfLikes={111} onClick={() => {}} className='hidden tablet:flex' />
      <div>
        <div
          className={clsx(
            'text-sm font-bold text-night-sky-blue tablet:text-lg',
            onCardNavigate && 'cursor-pointer '
          )}
          onClick={() => {
            if (onCardNavigate) onCardNavigate();
          }}
          // onClick={() => router.push('/feedback/123')}
        >
          {title}
        </div>
        <p
          className={clsx(
            'my-3 line-clamp-2  text-sm font-normal text-grayish-blue tablet:mt-1 tablet:text-base',
            onCardNavigate && 'cursor-pointer '
          )}
          onClick={() => {
            if (onCardNavigate) onCardNavigate();
          }}
        >
          {description}
        </p>
        <Badge text={type} className='mb-4 tablet:mb-0' />
      </div>
      <div className='flex items-center justify-between tablet:ml-auto'>
        <LikeCounterButton numberOfLikes={111} onClick={() => {}} className='tablet:hidden' />
        <CommentsCounterButton id={'1222'} numberOfComments={2} />
      </div>
    </div>
  );
};

export default FeedbackCard;
