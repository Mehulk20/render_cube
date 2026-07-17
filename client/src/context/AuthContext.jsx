import { createContext, useContext, useState, useMemo, useCallback } from 'react';
import { currentUser as seedUser } from './data/mock';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // authStatus: 'guest' | 'authed'
  const [authStatus, setAuthStatus] = useState('authed');
  const [user, setUser] = useState({ ...seedUser, role: 'user' });

  const login = useCallback(() => setAuthStatus('authed'), []);
  const logout = useCallback(() => setAuthStatus('guest'), []);

  const becomeCreator = useCallback(() => {
    setUser((u) => ({ ...u, role: 'creator' }));
  }, []);

  const updateProfile = useCallback((patch) => {
    setUser((u) => ({ ...u, ...patch }));
  }, []);

  const value = useMemo(
    () => ({
      authStatus,
      isAuthed: authStatus === 'authed',
      user,
      isCreator: user.role === 'creator',
      login,
      logout,
      becomeCreator,
      updateProfile,
    }),
    [authStatus, user, login, logout, becomeCreator, updateProfile]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
