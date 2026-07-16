import { Compass, Layers, Music2, Star, Users } from 'lucide-react';

export const quickActions = [
  {
    label: 'Browse All Assets',
    icon: Compass,
    to: '/explore',
  },
  {
    label: 'Explore Templates',
    icon: Layers,
    to: '/explore',
  },
  {
    label: 'Sound Effects',
    icon: Music2,
    to: '/explore',
  },
  {
    label: 'Free Assets',
    icon: Star,
    to: '/explore',
  },
  {
    label: 'Top Authors',
    icon: Users,
    to: '/explore',
  },
];
