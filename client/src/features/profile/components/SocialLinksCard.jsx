import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Link, AtSign, X, Check } from 'lucide-react';

import { Card, EditTrigger, ActionButton } from '../../../shared/components';

const SOCIAL_PLATFORMS = [
  {
    key: 'twitter',
    label: 'X (Twitter)',
    icon: AtSign,
  },
  {
    key: 'instagram',
    label: 'Instagram',
    icon: Link,
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    icon: Link,
  },
  {
    key: 'website',
    label: 'Website',
    icon: Globe,
  },
];

const EMPTY_LINKS = {
  twitter: '',
  instagram: '',
  linkedin: '',
  website: '',
};

const expandTransition = {
  duration: 0.3,
  ease: [0.16, 1, 0.3, 1],
};

const SocialLinksCard = () => {
  const [links, setLinks] = useState(EMPTY_LINKS);
  const [draft, setDraft] = useState(EMPTY_LINKS);
  const [editing, setEditing] = useState(false);

  const startEdit = () => {
    setDraft({ ...links });
    setEditing(true);
  };

  const save = () => {
    setLinks({ ...draft });
    setEditing(false);
  };

  const cancel = () => {
    setEditing(false);
  };

  const handleChange = (key, value) => {
    setDraft((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const filled = SOCIAL_PLATFORMS.filter((platform) => links[platform.key]);

  return (
    <Card delay={0.05}>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">Social Links</h3>

        {!editing && <EditTrigger onClick={startEdit} />}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {editing ? (
          <motion.div
            key="edit"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={expandTransition}
            className="overflow-hidden"
          >
            <div className="space-y-3">
              {SOCIAL_PLATFORMS.map((platform) => {
                const Icon = platform.icon;

                return (
                  <label
                    key={platform.key}
                    className="flex items-center gap-2.5 rounded-2xl border border-slate-200 px-3 py-2 transition-colors focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-100"
                  >
                    <Icon size={16} className="shrink-0 text-slate-400" />

                    <input
                      value={draft[platform.key]}
                      onChange={(e) => handleChange(platform.key, e.target.value)}
                      placeholder={platform.label}
                      className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                    />
                  </label>
                );
              })}
            </div>

            <div className="mt-3 flex justify-end gap-2">
              <ActionButton variant="ghost" onClick={cancel}>
                <X size={14} />
                Cancel
              </ActionButton>

              <ActionButton onClick={save}>
                <Check size={14} />
                Save
              </ActionButton>
            </div>
          </motion.div>
        ) : filled.length === 0 ? (
          <motion.p
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-[15px] italic text-slate-400"
          >
            No links added yet.
          </motion.p>
        ) : (
          <motion.ul
            key="view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-2.5"
          >
            {filled.map((platform) => {
              const Icon = platform.icon;

              return (
                <li
                  key={platform.key}
                  className="flex items-center gap-2.5 text-[15px] text-slate-600"
                >
                  <Icon size={16} className="text-violet-500" />

                  {links[platform.key]}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default SocialLinksCard;
