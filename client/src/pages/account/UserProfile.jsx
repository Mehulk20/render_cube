import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Card, Button } from '../../components/ui';
import { ProfileHeader, SocialLinksCard, ProfileEditForm } from '../../components/account';
import { useAuth } from '../../context/AuthContext';

export default function UserProfile() {
  const { user, isCreator, updateProfile } = useAuth();
  const [editing, setEditing] = useState(false);

  function handleSave(patch) {
    updateProfile(patch);
    setEditing(false);
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-ink">My Profile</h1>
        <p className="text-sm text-ink-faint">
          Manage your personal information and account details.
        </p>
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
              showCreatorInfo={false}
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

            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="p-5">
                <h3 className="mb-2 font-display text-sm font-semibold text-ink">About</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{user.bio}</p>
              </Card>
              <SocialLinksCard social={user.social} />
            </div>

            {!isCreator && (
              <Card className="border-violet/25 bg-gradient-to-br from-violet/10 to-fuchsia/10 p-6 text-center sm:text-left">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet/20 text-violet">
                      <Sparkles size={20} />
                    </span>
                    <div>
                      <p className="font-display text-sm font-semibold text-ink">
                        You're not a creator yet
                      </p>
                      <p className="text-xs text-ink-faint">
                        Open a store and start sharing assets with the community.
                      </p>
                    </div>
                  </div>
                  <Button as={Link} to="/creator/become" variant="gradient" className="shrink-0">
                    Become a Creator
                  </Button>
                </div>
              </Card>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
