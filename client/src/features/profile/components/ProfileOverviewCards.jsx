import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Link, AtSign, Store, MapPin, Pencil, CheckCircle2, X, Check } from 'lucide-react';

const cx = (...parts) => parts.filter(Boolean).join(' ');

/* ------------------------------------------------------------------ */
/*  Shared primitives                                                   */
/* ------------------------------------------------------------------ */
function Card({ children, delay = 0, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay }}
      className={cx('rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 sm:p-7', className)}
    >
      {children}
    </motion.div>
  );
}

function EditTrigger({ onClick, size = 15, className }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.9 }}
      className={cx(
        'flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-violet-50 hover:text-violet-600',
        className
      )}
      aria-label="Edit"
    >
      <Pencil size={size} />
    </motion.button>
  );
}

function ActionButton({ variant = 'solid', onClick, children }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      className={cx(
        'flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors',
        variant === 'solid'
          ? 'bg-violet-600 text-white hover:bg-violet-700'
          : 'border border-slate-200 text-slate-600 hover:bg-slate-50'
      )}
    >
      {children}
    </motion.button>
  );
}

const expandTransition = { duration: 0.3, ease: [0.16, 1, 0.3, 1] };

/* ------------------------------------------------------------------ */
/*  About                                                               */
/* ------------------------------------------------------------------ */
function AboutCard() {
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
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
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
                <ActionButton variant="ghost" onClick={() => setEditing(false)}>
                  <X size={14} /> Cancel
                </ActionButton>
                <ActionButton onClick={save}>
                  <Check size={14} /> Save
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
}

/* ------------------------------------------------------------------ */
/*  Social Links                                                        */
/* ------------------------------------------------------------------ */
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

function SocialLinksCard() {
  const empty = { twitter: '', instagram: '', linkedin: '', website: '' };
  const [links, setLinks] = useState(empty);
  const [draft, setDraft] = useState(empty);
  const [editing, setEditing] = useState(false);

  const startEdit = () => {
    setDraft(links);
    setEditing(true);
  };
  const save = () => {
    setLinks(draft);
    setEditing(false);
  };

  const filled = SOCIAL_PLATFORMS.filter((p) => links[p.key]);

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
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={expandTransition}
            className="overflow-hidden"
          >
            <div className="space-y-3">
              {SOCIAL_PLATFORMS.map((p) => (
                <label
                  key={p.key}
                  className="flex items-center gap-2.5 rounded-2xl border border-slate-200 px-3 py-2 transition-colors focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-100"
                >
                  <p.icon size={16} className="shrink-0 text-slate-400" />
                  <input
                    value={draft[p.key]}
                    onChange={(e) => setDraft((d) => ({ ...d, [p.key]: e.target.value }))}
                    placeholder={p.label}
                    className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                  />
                </label>
              ))}
            </div>
            <div className="mt-3 flex justify-end gap-2">
              <ActionButton variant="ghost" onClick={() => setEditing(false)}>
                <X size={14} /> Cancel
              </ActionButton>
              <ActionButton onClick={save}>
                <Check size={14} /> Save
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
            {filled.map((p) => (
              <li key={p.key} className="flex items-center gap-2.5 text-[15px] text-slate-600">
                <p.icon size={16} className="text-violet-500" />
                {links[p.key]}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/*  Per-field editable row (used by Creator Information)                */
/* ------------------------------------------------------------------ */
function EditableField({
  label,
  value,
  onSave,
  placeholder = 'Not set',
  multiline = false,
  prefix,
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);

  useEffect(() => {
    if (!editing) setDraft(value);
  }, [value, editing]);

  const startEdit = () => {
    setDraft(value);
    setEditing(true);
  };
  const save = () => {
    onSave(draft);
    setEditing(false);
  };

  return (
    <div className="group border-b border-slate-100 py-4 last:border-0">
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-400">{label}</span>
        {!editing && (
          <EditTrigger
            onClick={startEdit}
            size={13}
            className="h-7 w-7 opacity-0 transition-opacity group-hover:opacity-100"
          />
        )}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {editing ? (
          <motion.div
            key="edit"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={expandTransition}
            className="overflow-hidden pt-2"
          >
            {multiline ? (
              <textarea
                autoFocus
                rows={3}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder={placeholder}
                className="w-full resize-none rounded-xl border border-slate-200 p-2.5 text-sm text-slate-700 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
              />
            ) : (
              <div className="flex items-center rounded-xl border border-slate-200 px-3 focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-100">
                {prefix && <span className="text-sm text-slate-400">{prefix}</span>}
                <input
                  autoFocus
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder={placeholder}
                  className="w-full bg-transparent py-2 text-sm text-slate-700 outline-none"
                />
              </div>
            )}
            <div className="mt-2 flex justify-end gap-2">
              <ActionButton variant="ghost" onClick={() => setEditing(false)}>
                <X size={13} />
              </ActionButton>
              <ActionButton onClick={save}>
                <Check size={13} />
              </ActionButton>
            </div>
          </motion.div>
        ) : (
          <motion.p
            key="view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cx(
              'mt-1 text-[15px]',
              value ? 'font-medium text-slate-800' : 'italic text-slate-400'
            )}
          >
            {value ? `${prefix ?? ''}${value}` : placeholder}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Creator Information                                                 */
/* ------------------------------------------------------------------ */
function CreatorInfoCard() {
  const [info, setInfo] = useState({
    storeName: '',
    storeUrl: 'mehulk_20',
    storeDescription: '',
    storeCategory: '',
  });

  const set = (key) => (val) => setInfo((i) => ({ ...i, [key]: val }));

  return (
    <Card delay={0.1}>
      <div className="mb-2 flex items-center gap-2">
        <Store size={18} className="text-violet-600" />
        <h3 className="text-lg font-semibold text-slate-900">Creator Information</h3>
      </div>

      <div>
        <EditableField
          label="Store Name"
          value={info.storeName}
          onSave={set('storeName')}
          placeholder="Add a store name"
        />
        <EditableField
          label="Store URL"
          value={info.storeUrl}
          onSave={set('storeUrl')}
          placeholder="your-store"
          prefix="rendercube.com/"
        />
        <EditableField
          label="Store Description"
          value={info.storeDescription}
          onSave={set('storeDescription')}
          placeholder="Describe what you sell"
          multiline
        />
        <EditableField
          label="Store Category"
          value={info.storeCategory}
          onSave={set('storeCategory')}
          placeholder="Choose a category"
        />
      </div>
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/*  Creator Status — read only                                          */
/* ------------------------------------------------------------------ */
function CreatorStatusCard() {
  const items = ['Email Verified', 'Identity Verified', 'Active Creator'];
  return (
    <Card delay={0.15}>
      <h3 className="mb-3 text-lg font-semibold text-slate-900">Creator Status</h3>

      <div className="mb-3 flex items-center gap-2 text-[15px] text-slate-700">
        <CheckCircle2 size={18} className="text-violet-600" />
        You are a verified creator.
      </div>

      <ul className="space-y-2.5 border-t border-slate-100 pt-3">
        {items.map((label, i) => (
          <motion.li
            key={label}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * i + 0.2 }}
            className="flex items-center gap-2.5 text-sm text-slate-600"
          >
            <CheckCircle2 size={15} className="text-emerald-500" />
            {label}
          </motion.li>
        ))}
      </ul>
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/*  Demo page                                                           */
/* ------------------------------------------------------------------ */
function Tabs() {
  const tabs = ['Overview', 'About', 'Social Links', 'Creator Info'];
  const [active, setActive] = useState('Overview');
  return (
    <div className="mb-6 flex gap-6 border-b border-slate-200">
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => setActive(t)}
          className={cx(
            'relative pb-3 text-sm font-medium transition-colors',
            active === t ? 'text-violet-600' : 'text-slate-400 hover:text-slate-600'
          )}
        >
          {t}
          {active === t && (
            <motion.div
              layoutId="tab-underline"
              className="absolute -bottom-px left-0 right-0 h-0.5 rounded-full bg-violet-600"
            />
          )}
        </button>
      ))}
    </div>
  );
}

export default function Demo() {
  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-10">
      <div className="mx-auto max-w-5xl">
        <Tabs />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          <div className="space-y-6">
            <AboutCard />
            <CreatorInfoCard />
          </div>
          <div className="space-y-6">
            <SocialLinksCard />
            <CreatorStatusCard />
          </div>
        </div>
      </div>
    </div>
  );
}
