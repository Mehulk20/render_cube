import { motion } from 'framer-motion';

import { ProfileEditForm } from '../components';

export default function ProfileEditSection({ user, showCreatorInfo = false, onSave, onCancel }) {
  return (
    <motion.div
      key="edit"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <ProfileEditForm
        user={user}
        showCreatorInfo={showCreatorInfo}
        onSave={onSave}
        onCancel={onCancel}
      />
    </motion.div>
  );
}
