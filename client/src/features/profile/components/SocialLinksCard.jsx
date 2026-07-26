import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6';

import { X, Check } from 'lucide-react';

import {
  selectIsEditingProfile,
  setActiveProfileTab,
  setEditingProfile,
  useUpdateSocialMutation,
} from '../../user/services';
import { Card, EditTrigger, ActionButton } from '../../../shared/components';
import { SOCIAL_PLATFORMS, EMPTY_LINKS, SOCIAL_ICONS } from '../constants';

const expandTransition = {
  duration: 0.3,
  ease: [0.16, 1, 0.3, 1],
};

const SocialLinksCard = ({ socials }) => {
  const [links, setLinks] = useState(EMPTY_LINKS);
  const [draft, setDraft] = useState(EMPTY_LINKS);

  const dispatch = useDispatch();
  const [updateSocial, { isLoading, error }] = useUpdateSocialMutation();

  const isEditingProfile = useSelector(selectIsEditingProfile);

  const startEdit = () => {
    dispatch(setActiveProfileTab('social'));
    dispatch(setEditingProfile(true));
  };

  const cancel = () => {
    dispatch(setEditingProfile(false));
  };

  const handleChange = (key, value) => {
    setDraft((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const socials = Object.entries(draft)
      .filter(([, url]) => url.trim() !== '')
      .map(([platform, url]) => ({
        platform,
        url,
      }));

    try {
      if (!socials.length) return;

      await updateSocial({ socials }).unwrap();

      dispatch(setEditingProfile(false));
    } catch (err) {
      console.log('RTK Error:', err);
      console.log('Status:', err?.status);
      console.log('Data:', err?.data);
    }
  };

  useEffect(() => {
    const mapped = { ...EMPTY_LINKS };

    socials.forEach(({ platform, url }) => {
      mapped[platform] = url;
    });

    setLinks(mapped);
    setDraft(mapped);
  }, [socials]);

  const filled = SOCIAL_PLATFORMS.filter((platform) => links[platform.key]);

  return (
    <Card delay={0.05}>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-ink-900">Social Links</h3>

        {!isEditingProfile && <EditTrigger onClick={startEdit} />}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {isEditingProfile ? (
          <form onSubmit={(e) => handleSave(e)}>
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
                {SOCIAL_PLATFORMS.map((obj) => {
                  const Icon = obj.icon;

                  return (
                    <label
                      key={obj.key}
                      className="flex items-center gap-2.5 rounded-2xl border border-slate-200 px-3 py-2 transition-colors focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-100"
                    >
                      <Icon size={16} className="shrink-0 text-slate-400" />

                      <input
                        value={draft[obj.key]}
                        onChange={(e) => handleChange(obj.key, e.target.value)}
                        placeholder={obj.label}
                        className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                      />
                    </label>
                  );
                })}
              </div>

              <div className="mt-3 flex justify-end gap-2">
                <ActionButton variant="ghost" type="button" onClick={cancel}>
                  <X size={14} />
                  Cancel
                </ActionButton>

                <ActionButton type="submit">
                  <Check size={14} />
                  Save
                </ActionButton>
              </div>
            </motion.div>
          </form>
        ) : socials.length === 0 ? (
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
            {socials.map((obj) => {
              console.log(obj);
              const Icon = SOCIAL_ICONS[obj.platform];
              return (
                <li key={obj.url} className="flex items-center gap-2.5 text-[15px] text-slate-600">
                  <Icon size={24} className="text-violet-500" />

                  <a href={obj.url} target="_blank" rel="noopener noreferrer">
                    {obj.url}
                  </a>
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
