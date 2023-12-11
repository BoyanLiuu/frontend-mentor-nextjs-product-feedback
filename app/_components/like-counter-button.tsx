'use client';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

export interface LikeCounterButtonProps {
  isRoadMapButton?: boolean;
  numberOfLikes: number;
  onClick: () => void;
  className?: string;
}

const LikeCounterButton: React.FC<LikeCounterButtonProps> = ({
  numberOfLikes,
  onClick,
  className,
  isRoadMapButton
}) => {
  const [isButtonHighlight, setIsButtonHighlight] = useState(false);
  return (
    <button
      onClick={() => {
        setIsButtonHighlight((prev) => !prev);
        onClick();
      }}
      className={clsx(
        'flex h-8 w-fit cursor-pointer items-center rounded-primary bg-blueish-grey px-3.5 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
        className?.length !== 0 && className,
        !isRoadMapButton && 'tablet:mr-10 tablet:h-fit tablet:flex-col tablet:p-2',
        isButtonHighlight && 'bg-dark-blue'
      )}
    >
      <Image
        src={isButtonHighlight ? '/shared/icon-arrow-up-white.svg' : '/shared/icon-arrow-up.svg'}
        width={12}
        height={6}
        alt='arrow up'
      />
      <span
        className={clsx(
          'ml-2.5 inline-block text-sm font-bold text-night-sky-blue ',
          isButtonHighlight && 'text-white',
          !isRoadMapButton && 'tablet:ml-0 tablet:mt-1.5'
        )}
      >
        {numberOfLikes}
      </span>
    </button>
  );
};

export default LikeCounterButton;
