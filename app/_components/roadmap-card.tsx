'use client';
import clsx from 'clsx';

import { FeatureType } from '../types/feature';
import { RoadmapType } from '../types/road-map';

import Badge from './badge';
import CommentsCounterButton from './comment-counter-button';
import LikeCounterButton from './like-counter-button';

export interface RoadMapCardProps {
  roadMapType: RoadmapType;
  title: string;
  description: string;
  type: FeatureType;
  onCounterClick: () => void;
  onCardNavigate?: () => void;
  numberOfDiscussion: number;
  numberOfLikes: number;
}

const RoadMapCard: React.FC<RoadMapCardProps> = ({
  title,
  description,
  roadMapType,
  type,
  onCardNavigate,
  onCounterClick,
  numberOfDiscussion
}) => {
  return (
    <div className='flex h-[14.5rem] flex-col rounded-primary rounded-t-md border-t-[6px] border-primary-purple bg-white px-6 pb-6 pt-4  tablet:h-[16rem] '>
      {roadMapType && (
        <div className='mb-4'>
          <div className={`mr-4 inline-block h-3  w-3 rounded-primary bg-primary-purple`} />
          <span className='text-base text-grayish-blue'>{roadMapType}</span>
        </div>
      )}

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
        <Badge text={type} className='mb-4' />
      </div>
      <div className='flex items-center justify-between'>
        <LikeCounterButton numberOfLikes={111} onClick={() => {}} isRoadMapButton={true} />
        <CommentsCounterButton id={'1222'} numberOfComments={2} />
      </div>
    </div>
  );
};

export default RoadMapCard;
