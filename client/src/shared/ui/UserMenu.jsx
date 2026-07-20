import { User, LogOut, Moon, HelpCircle } from 'lucide-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLogoutMutation, userLogout } from '../../features/auth/services';
import { baseApi } from '../../api/base-api';
import MenuItem from './MenuItem';
import { WorkspaceSwitch } from '../../features/dashboard/components';
import { ThemeToggle } from '../../features/public/components';

export default function UserMenu({ user, onClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logout, { isLoading }] = useLogoutMutation();

  const handleLogout = async (e) => {
    if (isLoading) return;

    e.preventDefault();

    try {
      await logout().unwrap(); // API call

      dispatch(userLogout());

      dispatch(baseApi.util.resetApiState());

      navigate('/login', { replace: true });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-80 overflow-hidden rounded-2xl border border-border bg-modal shadow-modal">
      {/* Header */}
      <div className="flex items-center gap-4 border-b border-border-soft p-5">
        <img
          src={user.avatar}
          alt=""
          className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-background"
        />

        <div className="min-w-0 flex-1">
          <h3 className="truncate font-display font-semibold text-foreground">{user.name}</h3>
          <p className="truncate text-sm text-foreground-muted">{user.username}</p>
          <p className="truncate text-xs text-foreground-faint">{user.email}</p>
        </div>

        {user.role === 'creator' && (
          <span className="shrink-0 rounded-full bg-primary/15 px-2 py-1 text-xs font-medium text-primary">
            Creator
          </span>
        )}
      </div>

      {/* Menu */}
      <div className="p-2">
        <MenuItem as={Link} to="/account/profile" icon={User} text="My Profile" />
      </div>

      {/* Creator workspace switch */}
      {user.role === 'creator' && <WorkspaceSwitch role={user.role} onClose={onClose} />}

      {/* Footer */}
      <div className="space-y-0.5 border-t border-border-soft p-2">
        <MenuItem as={Link} to="/help" icon={HelpCircle} text="Help Center" />

        <div
          className="
            flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-foreground-soft
            transition-colors duration-(--duration-fast) ease-(--ease-standard)
            hover:bg-surface-hover
          "
        >
          <div className="flex items-center gap-3">
            <Moon size={18} />
            <span>Dark Mode</span>
          </div>
          <ThemeToggle />
        </div>

        <MenuItem
          icon={LogOut}
          text={isLoading ? 'Logging out...' : 'Logout'}
          danger
          disabled={isLoading}
          onClick={handleLogout}
        />
      </div>
    </div>
  );
}
