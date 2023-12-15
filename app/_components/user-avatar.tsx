import Image from 'next/image';
interface UserAvatarProps {
  name: string;
  imageSrc?: string;
}

export function UserAvatar({ name, imageSrc }: UserAvatarProps) {
  return (
    <span>
      <span className='sr-only'>{name}</span>
      <Image
        src={imageSrc || '/shared/user.svg'}
        width={24}
        height={24}
        alt='user avatar'
        className='aspect-square rounded-full'
      />
    </span>
  );
}
