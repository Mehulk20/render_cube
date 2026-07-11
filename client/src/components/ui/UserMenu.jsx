import {
  User,
  Settings,
  CreditCard,
  Bell,
  Heart,
  Download,
  ShoppingBag,
  LogOut,
  Moon,
  ArrowUpRight,
  HelpCircle,
  Sparkles,
} from 'lucide-react';

import MenuItem from './MenuItem';
import { WorkspaceSwitch } from '../dashboard';
import { ThemeToggle } from '../public';

const user = {
  name: 'John Doe',
  username: '@johndoe',
  email: 'john@email.com',
  avatar: 'https://i.pravatar.cc/150?img=8',
  role: 'creator',
};

export default function UserMenu({ role, isCreatorDashboard, setIsCreatorDashboard }) {
  return (
    <div className="w-80 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl">
      {/* Header */}
      <div className="flex items-center gap-4 border-b border-zinc-800 p-5">
        <img src={user.avatar} alt="" className="h-14 w-14 rounded-full object-cover" />

        <div className="flex-1">
          <h3 className="font-semibold text-white">{user.name}</h3>

          <p className="text-sm text-zinc-400">{user.username}</p>

          <p className="text-xs text-zinc-500">{user.email}</p>
        </div>

        {user.role === 'creator' && (
          <span className="rounded-full bg-violet-500/15 px-2 py-1 text-xs font-medium text-violet-400">
            Creator
          </span>
        )}
      </div>

      {/* Menu */}
      <div className="p-2">
        <MenuItem icon={User} text="My Profile" />
      </div>

      {/* Creator Card */}
      {user.role === 'creator' && (
        // <div className="mx-3 mb-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 p-4">
        //   <div className="flex items-center justify-between">
        //     <div>
        //       <div className="flex items-center gap-2 text-white">
        //         <Sparkles size={18} />
        //         <span className="font-semibold">Creator Studio</span>
        //       </div>

        //       <p className="mt-1 text-sm text-violet-100">Manage assets, earnings and analytics.</p>
        //     </div>

        //     <ArrowUpRight className="text-white" size={20} />
        //   </div>
        // </div>
        <WorkspaceSwitch
          role={role}
          setIsCreatorDashboard={setIsCreatorDashboard}
          isCreatorDashboard={isCreatorDashboard}
        />
      )}

      {/* Footer */}
      <div className="border-t border-zinc-800 p-2">
        <MenuItem icon={HelpCircle} text="Help Center" />

        <div className="flex items-center justify-between rounded-lg px-3 py-2 text-zinc-300 hover:bg-zinc-900">
          <div className="flex items-center gap-3">
            <Moon size={18} />

            <span>Dark Mode</span>
          </div>

          <ThemeToggle />
        </div>

        <MenuItem icon={LogOut} text="Logout" danger />
      </div>
    </div>
  );
}
