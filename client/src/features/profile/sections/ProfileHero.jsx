import { motion } from 'framer-motion';
import { LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '../../../shared/ui';

export default function ProfileHero({ editing, onEdit }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <h1 className="font-display text-2xl font-semibold text-ink">My Profile</h1>

        <p className="text-sm text-ink-faint">
          Manage your personal information and creator details.
        </p>
      </div>

      {!editing && (
        <div className="flex gap-2">
          <Button as={Link} to="/creator/dashboard" variant="secondary" className="gap-2">
            <LayoutDashboard size={15} />
            Creator Studio
          </Button>

          <Button onClick={onEdit} variant="gradient">
            Edit Profile
          </Button>
        </div>
      )}
    </motion.section>
  );
}
