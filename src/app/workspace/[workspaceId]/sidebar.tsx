import UserButton from '@/features/auth/components/user-button';
import WorkspaceSwitcher from './workspace-switcher';
import SidebarButton from './sidebar-button';
import { BellIcon, Home, MessagesSquare, MoreHorizontal } from 'lucide-react';

export default function Sidebar() {
  return (
    <>
      <aside className='w-[70px] h-full bg-[#481349] flex flex-col items-center gap-y-4 pt-[9px] pb-4'>
        <WorkspaceSwitcher />
        <SidebarButton icon={Home} label='Home' isActive />
        <SidebarButton icon={MessagesSquare} label='DMs' />
        <SidebarButton icon={BellIcon} label='Activity' />
        <SidebarButton icon={MoreHorizontal} label='More' />
        <div className='flex flex-col items-center justify-center gap-y-1 mt-auto'>
          <UserButton />
        </div>
      </aside>
    </>
  );
}
