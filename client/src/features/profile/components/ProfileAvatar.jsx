import { useRef, useState } from 'react';
import { useUploadAvatarMutation } from '../../user/services';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera } from 'lucide-react';
import { getMediaUrl } from '../../../utils/media';
import clsx from 'clsx';

export default function ProfileAvatar({ user, editable, onEdit }) {
  const [uploadAvatar, { isLoading: isAvatarLoading }, error] = useUploadAvatarMutation();
  const [showSuccessRing, setShowSuccessRing] = useState(false);
  const fileInputRef = useRef(null);

  const avatar = getMediaUrl(user?.avatarUrl);

  const online = true;
  const sizes = {
    sm: 'h-12 w-12',
    md: 'h-16 w-16',
    lg: 'h-24 w-24',
    xl: 'h-28 w-28 sm:h-32 sm:w-32',
    '2xl': 'h-40 w-40',
  };

  const handleAvatarUpload = async (file) => {
    if (!file) return;
    try {
      const formData = new FormData();
      formData.append('avatar', file);

      await uploadAvatar(formData).unwrap();

      setShowSuccessRing(true);

      // Let the steady "success" ring hold for a moment, then fade back to normal.
      setTimeout(() => setShowSuccessRing(false), 1800);
    } catch (err) {
      console.error(error);
      // `error` from the mutation hook is already surfaced below; nothing else to do here.
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    e.target.value = ''; // allow re-selecting the same file later
    handleAvatarUpload(file);
  };

  const triggerFilePicker = () => {
    fileInputRef.current?.click();
    onEdit?.();
  };

  return (
    <motion.div
      className="group relative inline-block shrink-0"
      initial={{ scale: 0.4, opacity: 0, rotate: -8 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.25 }}
    >
      {/* Spinning glow ring while the upload is in flight */}
      <AnimatePresence>
        {isAvatarLoading && (
          <motion.div
            key="upload-spinner-ring"
            className="pointer-events-none absolute -inset-2 rounded-full"
            style={{
              background:
                'conic-gradient(from 0deg, transparent 0%, var(--color-brand-400, #a78bfa) 25%, var(--color-brand-500, #6366f1) 50%, transparent 75%)',
              WebkitMask:
                'radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 4px))',
              mask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 4px))',
              filter: 'drop-shadow(0 0 6px var(--color-brand-500, #6366f1))',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            transition={{
              rotate: { duration: 1.1, repeat: Infinity, ease: 'linear' },
              opacity: { duration: 0.2 },
            }}
          />
        )}
      </AnimatePresence>

      {/* Steady glowing ring shown briefly once the upload succeeds */}
      <motion.div
        className="pointer-events-none absolute -inset-1.5 rounded-full ring-4 ring-brand-500"
        style={{ boxShadow: '0 0 14px 2px var(--color-brand-500, #6366f1)' }}
        initial={false}
        animate={{
          opacity: showSuccessRing ? 1 : 0,
          scale: showSuccessRing ? 1 : 0.92,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      />

      <img
        src={avatar || '/images/default-avatar.png'}
        alt={user.name}
        className={clsx(
          sizes.xl,
          'relative z-dropdown rounded-full object-cover ring-4 ring-white shadow-card'
        )}
      />

      {online && (
        <span className="absolute bottom-2 right-2 z-modal flex h-4 w-4">
          <motion.span
            className="absolute inline-flex h-full w-full rounded-full bg-success/40"
            animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
          />
          <span className="relative inline-flex h-4 w-4 rounded-full bg-success ring-2 ring-white" />
        </span>
      )}

      {editable && (
        <>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          <motion.button
            type="button"
            onClick={triggerFilePicker}
            disabled={isAvatarLoading}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="
              absolute bottom-1 right-1 z-20
              flex h-9 w-9 items-center justify-center
              rounded-full bg-primary text-white shadow-lg
              opacity-0 transition-opacity duration-200
              group-hover:opacity-100
              disabled:cursor-not-allowed disabled:opacity-60
            "
          >
            <Camera size={15} />
          </motion.button>
        </>
      )}

      {error && (
        <p className="absolute -bottom-6 left-1/2 w-max -translate-x-1/2 text-xs text-red-500">
          Upload failed, try again
        </p>
      )}
    </motion.div>
  );
}
