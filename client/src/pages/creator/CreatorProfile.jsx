import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Mail, Rocket, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, Button } from '../../components/ui';

import { ProfileHeader, SocialLinksCard, ProfileEditForm } from '../../components/account';
import { useAuth } from '../../context/AuthContext';

const statusItems = [
  { label: 'Email Verified', icon: Mail },
  { label: 'Identity Verified', icon: ShieldCheck },
  { label: 'Active Creator', icon: Rocket },
];

export default function CreatorProfile() {
  const { user, updateProfile } = useAuth();
  const [editing, setEditing] = useState(false);
  const [tab, setTab] = useState('overview');

  function handleSave(patch) {
    updateProfile(patch);
    setEditing(false);
  }

  const tabs = ['overview', 'about', 'social links', 'creator info'];

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold text-ink">My Profile</h1>
          <p className="text-sm text-ink-faint">
            Manage your personal information and creator details.
          </p>
        </div>
        {!editing && (
          <div className="flex gap-2">
            <Button as={Link} to="/creator/dashboard" variant="secondary" className="gap-2">
              <LayoutDashboard size={15} /> Creator Studio
            </Button>
            <Button onClick={() => setEditing(true)} variant="gradient">
              Edit Profile
            </Button>
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {editing ? (
          <motion.div
            key="edit"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <ProfileEditForm
              user={user}
              showCreatorInfo
              onSave={handleSave}
              onCancel={() => setEditing(false)}
            />
          </motion.div>
        ) : (
          <motion.div
            key="view"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            <ProfileHeader user={user} onEdit={() => setEditing(true)} />

            <div className="flex gap-1 overflow-x-auto border-b border-border-soft">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`shrink-0 border-b-2 px-4 py-2.5 text-sm font-medium capitalize transition-colors ${tab === t ? 'border-violet text-violet' : 'border-transparent text-ink-faint hover:text-ink'}`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
              <div className="space-y-6">
                {(tab === 'overview' || tab === 'about') && (
                  <Card className="p-5">
                    <h3 className="mb-2 font-display text-sm font-semibold text-ink">About</h3>
                    <p className="text-sm leading-relaxed text-ink-soft">{user.bio}</p>
                  </Card>
                )}
                {(tab === 'overview' || tab === 'creator info') && (
                  <Card className="space-y-4 p-5">
                    <h3 className="font-display text-sm font-semibold text-ink">
                      Creator Information
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-xs text-ink-faint">Store Name</p>
                        <p className="mt-0.5 text-sm text-ink">{user.storeName}</p>
                      </div>
                      <div>
                        <p className="text-xs text-ink-faint">Store URL</p>
                        <p className="mt-0.5 text-sm text-violet">
                          motionenvato.com/{user.username}
                        </p>
                      </div>
                      <div className="sm:col-span-2">
                        <p className="text-xs text-ink-faint">Store Description</p>
                        <p className="mt-0.5 text-sm text-ink-soft">{user.storeDescription}</p>
                      </div>
                      <div>
                        <p className="text-xs text-ink-faint">Store Category</p>
                        <p className="mt-0.5 text-sm text-ink">{user.storeCategory}</p>
                      </div>
                    </div>
                  </Card>
                )}
                {(tab === 'overview' || tab === 'social links') && (
                  <div className="lg:hidden">
                    <SocialLinksCard social={user.social} />
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div className="hidden lg:block">
                  <SocialLinksCard social={user.social} />
                </div>
                <Card className="p-5">
                  <h3 className="mb-3 font-display text-sm font-semibold text-ink">
                    Creator Status
                  </h3>
                  <p className="mb-3 flex items-center gap-2 text-sm text-mint">
                    <CheckCircle2 size={16} /> You are a verified creator.
                  </p>
                  <ul className="space-y-2">
                    {statusItems.map((s) => (
                      <li key={s.label} className="flex items-center gap-2 text-sm text-ink-soft">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-mint/15 text-mint">
                          <CheckCircle2 size={12} />
                        </span>
                        {s.label}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
