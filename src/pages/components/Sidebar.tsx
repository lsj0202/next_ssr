import { cn } from '@/utils/style';
import Link from 'next/link';
import { FC } from 'react';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import IconButton from './IconComponent';

type SidebarProps = {
  isOpen: boolean;
};

const Sidebar: FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div
      className={cn(
        'min-h-screen flex-col gap-6 border-r bg-white p-10 pr-6 text-base lg:relative',
        isOpen ? 'flex' : 'hidden',
      )}
    >
      <Link href="/" className="w-48 font-medium text-gray-600 hover:underline">
        홈
      </Link>
      <Link
        href="/tag"
        className="w-48 font-medium text-gray-600 hover:underline"
      >
        태그
      </Link>
      <Link
        href="/category/Web-Development"
        className="w-48 font-medium text-gray-600 hover:underline"
      >
        Web Development
      </Link>
      <div className="mt-10 flex items-center gap-4">
        <IconButton
          Icon={AiFillInstagram}
          component={Link}
          href="https://www.instagram.com/lcfc0202"
        />
        <IconButton
          Icon={AiFillGithub}
          component={Link}
          href="https://github.com/lsj0202"
        />
      </div>
    </div>
  );
};

export default Sidebar;
