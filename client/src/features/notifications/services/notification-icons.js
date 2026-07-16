import {
  BadgeCheck,
  Bell,
  Download,
  ShieldAlert,
  Star,
  UserPlus,
  Wallet,
  XCircle,
} from 'lucide-react';

import { NotificationType } from './notification-types';

/**
 * Every notification type maps to one icon + one semantic color
 * token pair from the design system (theme.css). Using the
 * shared success/warning/danger/info/security/violet tokens
 * instead of ad-hoc Tailwind colors means these stay correct
 * in dark mode automatically, and any future palette change
 * only has to happen in one place.
 */
export const notificationIconConfig = {
  [NotificationType.SALE]: {
    icon: Wallet,
    iconColor: 'text-success',
    iconBg: 'bg-success-soft',
  },

  [NotificationType.PAYOUT]: {
    icon: Wallet,
    iconColor: 'text-success',
    iconBg: 'bg-success-soft',
  },

  [NotificationType.APPROVED]: {
    icon: BadgeCheck,
    iconColor: 'text-success',
    iconBg: 'bg-success-soft',
  },

  [NotificationType.DOWNLOAD]: {
    icon: Download,
    iconColor: 'text-violet',
    iconBg: 'bg-violet/10',
  },

  [NotificationType.REVIEW]: {
    icon: Star,
    iconColor: 'text-warning',
    iconBg: 'bg-warning-soft',
  },

  [NotificationType.FOLLOWER]: {
    icon: UserPlus,
    iconColor: 'text-info',
    iconBg: 'bg-info-soft',
  },

  [NotificationType.REJECTED]: {
    icon: XCircle,
    iconColor: 'text-danger',
    iconBg: 'bg-danger-soft',
  },

  [NotificationType.SECURITY]: {
    icon: ShieldAlert,
    iconColor: 'text-security',
    iconBg: 'bg-security-soft',
  },

  [NotificationType.SYSTEM]: {
    icon: Bell,
    iconColor: 'text-ink-muted',
    iconBg: 'bg-ink-muted/10',
  },
};

export const defaultNotificationIcon = notificationIconConfig[NotificationType.SYSTEM];

export function getNotificationIcon(type) {
  return notificationIconConfig[type] || defaultNotificationIcon;
}
