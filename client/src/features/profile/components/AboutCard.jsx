import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

import { Card, EditTrigger, ActionButton } from '../../../shared/components';
import { cx } from '../../../utils/cn';

const expandTransition = {
  duration: 0.3,
  ease: [0.16, 1, 0.3, 1],
};

const AboutCard = () => {
  const [bio, setBio] = useState('');
  const [draft, setDraft] = useState('');
  const [editing, setEditing] = useState(false);

  const startEdit = () => {
    setDraft(bio);
    setEditing(true);
  };

  const save = () => {
    setBio(draft.trim());
    setEditing(false);
  };

  const cancel = () => {
    setEditing(false);
  };

  return (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">About</h3>

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
            <textarea
              autoFocus
              rows={4}
              maxLength={280}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Tell people about yourself..."
              className="w-full resize-none rounded-2xl border border-slate-200 p-3 text-[15px] text-slate-700 outline-none transition-colors focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
            />

            <div className="mt-2 flex items-center justify-between">
              <span className="text-xs text-slate-400">{draft.length}/280</span>

              <div className="flex gap-2">
                <ActionButton variant="ghost" onClick={cancel}>
                  <X size={14} />
                  Cancel
                </ActionButton>

                <ActionButton onClick={save}>
                  <Check size={14} />
                  Save
                </ActionButton>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.p
            key="view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cx('text-[15px]', bio ? 'text-slate-600' : 'italic text-slate-400')}
          >
            {bio || 'No bio added yet.'}
          </motion.p>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default AboutCard;
