'use client';
import Image from 'next/image'

export interface LikeCounterButtonProps {
    numberOfLikes:number;
    onClick:() => void;
}

const LikeCounterButton: React.FC<LikeCounterButtonProps> = ({ numberOfLikes,onClick }) => (
  <div
   onClick={onClick}
    className='h-8 flex items-center bg-blueish-grey cursor-pointer w-fit px-3.5 py-2 rounded-primary'
  >
  <Image
      src="/shared/icon-arrow-up.svg"
      width={12}
      height={6}
      alt="arrow up"
    />
    <span className="ml-2.5 text-sm text-night-sky-blue font-bold">
    {numberOfLikes}
    </span>

  </div>
);

export default LikeCounterButton;
