import { NotificationType } from './notification-types';

export const notifications = [
  {
    id: 1,
    read: false,
    type: NotificationType.SALE,
    title: 'New Sale',
    message: 'Motion Graphics Bundle was purchased.',
    time: '2026-07-10T09:30:00',
  },

  {
    id: 2,
    read: false,
    type: NotificationType.DOWNLOAD,
    title: 'New Download',
    message: 'Free Icon Pack has been downloaded.',
    time: '2026-07-10T08:00:00',
  },

  {
    id: 3,
    read: false,
    type: NotificationType.REVIEW,
    title: 'New Review',
    message: '★★★★★ Excellent quality!',
    time: '2026-07-10T07:40:00',
  },

  {
    id: 4,
    read: true,
    type: NotificationType.APPROVED,
    title: 'Asset Approved',
    message: 'Your Modern UI Kit is now live.',
    time: '2026-07-09T19:10:00',
  },

  {
    id: 5,
    read: true,
    type: NotificationType.FOLLOWER,
    title: 'New Follower',
    message: 'Alex started following you.',
    time: '2026-07-09T17:30:00',
  },

  {
    id: 6,
    read: true,
    type: NotificationType.PAYOUT,
    title: 'Payout Sent',
    message: '₹5,420 has been transferred.',
    time: '2026-07-09T14:00:00',
  },

  {
    id: 7,
    read: true,
    type: NotificationType.SECURITY,
    title: 'Security Alert',
    message: 'New login from Bengaluru.',
    time: '2026-07-08T11:30:00',
  },

  {
    id: 8,
    read: true,
    type: NotificationType.SYSTEM,
    title: 'Platform Update',
    message: 'Creator analytics has been improved.',
    time: '2026-07-07T13:00:00',
  },
];
