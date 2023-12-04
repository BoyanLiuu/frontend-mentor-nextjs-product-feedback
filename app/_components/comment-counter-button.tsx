import Link from "next/link";
import Image from 'next/image'

export interface CommentsCounterButtonProps {
  id: string;
  numberOfComments: number;
}

const CommentsCounterButton: React.FC<CommentsCounterButtonProps> = ({ numberOfComments, id }) => (
  <div>

    <Link href={`/feedback/${id}`} className=" text-base font-bold flex items-center">
      <Image
        src="/shared/icon-comments.svg"
        width={18}
        height={16}
        alt="arrow up"
        className="mr-2 inline-block"

      />
      {numberOfComments}
    </Link>

  </div>
);

export default CommentsCounterButton;
