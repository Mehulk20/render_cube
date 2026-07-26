import { Globe, Link, AtSign, X, Check } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter, FaGlobe } from 'react-icons/fa6';
export const SOCIAL_PLATFORMS = [
  {
    key: 'twitter',
    label: 'twitter',
    icon: FaXTwitter,
  },
  {
    key: 'instagram',
    label: 'Instagram',
    icon: FaInstagram,
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    icon: FaLinkedin,
  },
  {
    key: 'website',
    label: 'Website',
    icon: FaGlobe,
  },
];

export const EMPTY_LINKS = {
  twitter: '',
  instagram: '',
  linkedin: '',
  website: '',
};

export const SOCIAL_ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  twitter: FaXTwitter,
  website: FaGlobe,
};
