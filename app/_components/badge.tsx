import clsx from 'clsx';

export interface BadgeProps {
  text: string;
  isSelected?: boolean;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ text, isSelected, className }) => (
  <div
    className={clsx(
      'rounded-primary focus:ring-ring max-w-14 inline-flex cursor-pointer items-center truncate border-transparent bg-blueish-grey px-4  py-1.5 text-sm font-semibold text-primary-blue transition-colors focus:outline-none   focus:ring-2 focus:ring-offset-2 ',
      isSelected && 'bg-primary-blue text-white',
      className && className
    )}
  >
    {text}
  </div>
);

export default Badge;
