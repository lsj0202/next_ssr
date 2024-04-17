import { cn } from '@/utils/style';
import Link from 'next/link';
import { FC } from 'react';
import { AiFillGithub, AiFillInstagram, AiOutlineClose } from 'react-icons/ai';

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
        <Link href="/https://www.instagram.com/lcfc0202">
          <AiFillInstagram className="h-6 w-6" />
        </Link>
        <Link href="/https://github.com/lsj0202">
          <AiFillGithub className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
