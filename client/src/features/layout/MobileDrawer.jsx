import { AnimatePresence, motion } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom';
import { X, LogOut } from 'lucide-react';
import { Logo } from '../../shared/components';
import { Avatar } from '../../shared/ui';
import { useAuth } from '../../context/AuthContext';

export default function MobileDrawer({ open, onClose, links = [] }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-overlay backdrop-blur-sm lg:hidden"
          />
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-surface lg:hidden"
          >
            <div className="flex h-16 items-center justify-between border-b border-border-soft px-5">
              <Logo />
              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-ink-soft hover:bg-surface-raised focus-ring"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex items-center gap-3 border-b border-border-soft px-5 py-4">
              <Avatar src={user?.avatar} verified={user?.verified} />
              <div>
                <p className="text-sm font-medium text-ink">{user?.name}</p>
                <p className="text-xs text-ink-faint">@{user?.username}</p>
              </div>
            </div>
            <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 py-3">
              {links.map((l) => (
                <NavLink
                  key={l.label}
                  to={l.to}
                  end={l.end}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium ${isActive ? 'bg-violet/15 text-violet' : 'text-ink-soft hover:bg-surface-raised hover:text-ink'}`
                  }
                >
                  <l.icon size={17} />
                  {l.label}
                </NavLink>
              ))}
            </nav>
            <button
              onClick={() => {
                logout();
                onClose();
                navigate('/');
              }}
              className="m-3 flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium text-rose hover:bg-rose/10"
            >
              <LogOut size={17} /> Log out
            </button>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
