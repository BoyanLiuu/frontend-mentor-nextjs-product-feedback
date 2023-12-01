'use client';
import clsx from 'clsx';
import { FeatureType } from '../types/feature';
import { RoadmapType } from '../types/road-map';
import Badge from './badge';
import LikeCounterButton from './like-counter-button';
import CommentsCounterButton from './comment-counter-button';

export interface CardTemplateProps {
    roadMapType?: RoadmapType;
    title: string;
    description: string;
    type: FeatureType;
    onCounterClick: () => void;
    numberOfDiscussion: number;
    numberOfLikes:number
}

const CardTemplate: React.FC<CardTemplateProps> = ({ title, description, roadMapType, type, onCounterClick, numberOfDiscussion }) => (
    <div className={clsx(
        'rounded-primary bg-white h-[12.5rem] w-[21rem] ',
        roadMapType ? 'pt-4 px-6 pb-6 ' : 'p-6'
    )}>
        {roadMapType && <div className='mb-4'>
            <div className={`w-3 h-3 rounded-primary  inline-block bg-primary-purple mr-4`} />
            <span className="text-base text-grayish-blue">{roadMapType}</span>
        </div>}
        <div className='font-bold text-night-sky-blue text-sm cursor-pointer'>{title}</div>
       
        <p className='font-normal text-grayish-blue text-sm my-3 cursor-pointer line-clamp-2'>{description}</p>
        <Badge text={type} className='mb-4'/>
        <div className='flex justify-between items-center'>
            <LikeCounterButton numberOfLikes={111} onClick={()=>{} }/>
            <CommentsCounterButton id={'1222'} numberOfComments={2}/>
        </div>



    </div>
);

export default CardTemplate;
