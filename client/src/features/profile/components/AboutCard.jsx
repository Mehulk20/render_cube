import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

import {
  selectIsEditingProfile,
  setActiveProfileTab,
  setEditingProfile,
  useUpdateAboutMutation,
} from '../../user/services';

import { Card, EditTrigger, ActionButton } from '../../../shared/components';
import { cx } from '../../../utils/cn';

const expandTransition = {
  duration: 0.3,
  ease: [0.16, 1, 0.3, 1],
};

const AboutCard = ({ about }) => {
  const dispatch = useDispatch();
  const [draft, setDraft] = useState();
  const [updateAbout, { isLoading, error }] = useUpdateAboutMutation();
  const isEditingProfile = useSelector(selectIsEditingProfile);

  const startEdit = () => {
    dispatch(setActiveProfileTab('about'));
    dispatch(setEditingProfile(true));
  };

  const handleSave = async () => {
    try {
      await updateAbout({ bio: draft }).unwrap();

      dispatch(setEditingProfile(false));
    } catch (err) {
      console.error(err);
    }
  };

  const cancel = () => {
    dispatch(setEditingProfile(false));
  };

  return (
    <Card isLoading={isLoading}>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-ink-900">About</h3>

        {!isEditingProfile && <EditTrigger onClick={startEdit} />}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {isEditingProfile ? (
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
            className="overflow-hidden w-full min-w-0 sm:min-w-sm"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSave();
              }}
            >
              <textarea
                autoFocus
                rows={4}
                maxLength={280}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Tell people about yourself..."
                className="w-full resize-none rounded-2xl border border-ink-300 p-3 text-[15px] text-ink-700 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
              />

              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs text-slate-400">{draft?.length || 0}/280</span>

                <div className="flex gap-2">
                  <ActionButton variant="ghost" onClick={cancel}>
                    <X size={14} />
                    Cancel
                  </ActionButton>

                  <ActionButton type="submit">
                    <Check size={14} />
                    Save
                  </ActionButton>
                </div>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.p
            key="view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cx('text-[15px]', about ? 'text-ink-400' : 'italic text-ink-400')}
          >
            {about || 'No bio added yet.'}
          </motion.p>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default AboutCard;
