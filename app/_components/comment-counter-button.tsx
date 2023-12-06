import Image from 'next/image';
import Link from 'next/link';

export interface CommentsCounterButtonProps {
  id: string;
  numberOfComments: number;
}

const CommentsCounterButton: React.FC<CommentsCounterButtonProps> = ({ numberOfComments, id }) => (
  <div>
    <Link href={`/feedback/${id}`} className=' flex items-center text-base font-bold'>
      <Image
        src='/shared/icon-comments.svg'
        width={18}
        height={16}
        alt='arrow up'
        className='mr-2 inline-block'
      />
      {numberOfComments}
    </Link>
  </div>
);

export default CommentsCounterButton;
