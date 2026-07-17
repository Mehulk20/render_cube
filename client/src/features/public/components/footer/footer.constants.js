import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export const FOOTER_LINKS = {
  Marketplace: [
    { label: 'Browse Assets', to: '/marketplace' },
    { label: 'Collections', to: '/collections' },
    { label: 'Categories', to: '/categories' },
    { label: 'Free Assets', to: '/free-assets' },
  ],

  Creators: [
    { label: 'Become a Creator', to: '/creator/apply' },
    { label: 'Top Creators', to: '/creators' },
    { label: 'Creator Dashboard', to: '/creator/dashboard' },
    { label: 'Creator Guidelines', to: '/creator/guidelines' },
  ],

  Resources: [
    { label: 'Documentation', to: '/docs' },
    { label: 'Blog', to: '/blog' },
    { label: 'Help Center', to: '/help' },
    { label: 'API', to: '/api' },
  ],

  Company: [
    { label: 'About', to: '/about' },
    { label: 'Careers', to: '/careers' },
    { label: 'Contact', to: '/contact' },
    { label: 'Press Kit', to: '/press' },
  ],
};

export const SOCIALS = [
  {
    icon: FaInstagram,
    href: '#',
    label: 'Instagram',
  },
  {
    icon: FaGithub,
    href: '#',
    label: 'GitHub',
  },
  {
    icon: FaTwitter,
    href: '#',
    label: 'Twitter',
  },
  {
    icon: FaYoutube,
    href: '#',
    label: 'YouTube',
  },
];

export const FOOTER_LEGAL_LINKS = [
  { label: 'Status', to: '/status' },
  { label: 'Terms', to: '/terms' },
  { label: 'Privacy', to: '/privacy' },
  { label: 'Licenses', to: '/licenses' },
];
