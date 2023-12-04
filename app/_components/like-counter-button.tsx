'use client';
import Image from 'next/image'
import clsx from 'clsx';
import { useState } from 'react';

export interface LikeCounterButtonProps {
  numberOfLikes: number;
  onClick: () => void;
  className?: string
}

const LikeCounterButton: React.FC<LikeCounterButtonProps> = ({ numberOfLikes, onClick, className }) => {
  const [isButtonHighlight, setIsButtonHighlight] = useState(false);
  return <button
    onClick={() => {
      setIsButtonHighlight((prev) => !prev);
      onClick();
    }}
    className=
    {clsx(
      'h-8 flex items-center bg-blueish-grey cursor-pointer w-fit px-3.5 py-2 rounded-primary tablet:flex-col tablet:p-2 tablet:h-fit tablet:mr-10 transition-colors focus:outline-none   focus:ring-2 focus:ring-offset-2 ',
      className?.length !== 0 && className,
      isButtonHighlight && 'bg-dark-blue'
    )}
  >
    <Image
      src= { isButtonHighlight? "/shared/icon-arrow-up-white.svg": "/shared/icon-arrow-up.svg" }
      width={12}
      height={6}
      alt="arrow up"

    />
    <span
      className=
      {clsx(
        'ml-2.5 text-sm text-night-sky-blue font-bold tablet:ml-0 tablet:mt-1.5 inline-block',
        isButtonHighlight && 'text-white'
      )}
    >
      {numberOfLikes}
    </span>

  </button>
}

export default LikeCounterButton;
