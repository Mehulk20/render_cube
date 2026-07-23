import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

import { EditTrigger, ActionButton } from '../../../shared/components';
import { cx } from '../../../utils/cn';

const expandTransition = {
  duration: 0.3,
  ease: [0.16, 1, 0.3, 1],
};

const EditableField = ({
  label,
  value,
  onSave,
  placeholder = 'Not set',
  multiline = false,
  prefix,
}) => {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);

  useEffect(() => {
    if (!editing) {
      setDraft(value);
    }
  }, [value, editing]);

  const startEdit = () => {
    setDraft(value);
    setEditing(true);
  };

  const save = () => {
    onSave(draft);
    setEditing(false);
  };

  const cancel = () => {
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
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
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
              <ActionButton variant="ghost" onClick={cancel}>
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
};

export default EditableField;
