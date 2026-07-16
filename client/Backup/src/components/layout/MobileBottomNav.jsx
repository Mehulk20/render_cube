import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { Home, Layers, Plus, BarChart3, Menu, User } from 'lucide-react';

export default function MobileBottomNav({ mode = 'account', onMenuClick }) {
  const items = mode === 'creator'
    ? [
        { to: '/creator/dashboard', icon: Home, label: 'Overview', end: true },
        { to: '/explore', icon: Layers, label: 'Assets' },
        { icon: Plus, label: '', action: true },
        { to: '/explore', icon: BarChart3, label: 'Analytics' },
      ]
    : [
        { to: '/account/dashboard', icon: Home, label: 'Overview', end: true },
        { to: '/explore', icon: Layers, label: 'Explore' },
        { icon: Plus, label: '', action: true },
        { to: '/account/profile', icon: User, label: 'Profile' },
      ];

  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 flex items-center justify-around border-t border-border-soft bg-void/95 px-2 py-2 backdrop-blur-md lg:hidden">
      {items.map((item) =>
        item.action ? (
          <button
            key="action"
            onClick={onMenuClick}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet to-fuchsia text-white shadow-glow active:scale-95 transition-transform"
            aria-label="Create"
          >
            <Plus size={20} />
          </button>
        ) : (
          <NavLink
            key={item.label}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              clsx('flex flex-col items-center gap-0.5 rounded-lg px-3 py-1 text-[10px] font-medium', isActive ? 'text-violet' : 'text-ink-faint')
            }
          >
            <item.icon size={19} />
            {item.label}
          </NavLink>
        )
      )}
      <button onClick={onMenuClick} className="flex flex-col items-center gap-0.5 rounded-lg px-3 py-1 text-[10px] font-medium text-ink-faint">
        <Menu size={19} />
        Menu
      </button>
    </nav>
  );
}
