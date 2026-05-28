// import { Github, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaYoutube, FaGithub } from 'react-icons/fa';
const footerLinks = {
  Marketplace: [
    { label: 'All Assets', to: '/marketplace' },
    { label: 'Top Creators', to: '/creators' },
    { label: 'New Releases', to: '/marketplace?sort=new' },
    { label: 'Categories', to: '/marketplace' },
  ],
  Resources: [
    { label: 'Documentation', to: '#' },
    { label: 'Tutorials', to: '#' },
    { label: 'Blog', to: '#' },
    { label: 'Help Center', to: '#' },
  ],
  Company: [
    { label: 'About Us', to: '#' },
    { label: 'Careers', to: '#' },
    { label: 'Press Kit', to: '#' },
    { label: 'Contact', to: '#' },
  ],
  Legal: [
    { label: 'Terms of Service', to: '#' },
    { label: 'Privacy Policy', to: '#' },
    { label: 'Refund Policy', to: '#' },
    { label: 'Licensing', to: '#' },
  ],
};

/**
 * Footer — site-wide footer with navigation links and social icons.
 * Dark mode aware. Uses React Router Links.
 */
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 py-14 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9L9 3L15 9L9 15L3 9Z" fill="white" fillOpacity="0.9" />
                  <path d="M6 9L9 6L12 9L9 12L6 9Z" fill="white" />
                </svg>
              </div>
              <span
                className="font-display font-bold text-xl text-gray-900 dark:text-white"
                style={{ fontFamily: 'Syne' }}
              >
                RenderCube
              </span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              The ultimate marketplace for digital assets. Create, share, and sell premium digital
              content with the world.
            </p>
            <div className="flex items-center gap-4">
              {[FaInstagram, FaGithub, FaTwitter, FaYoutube].map((Icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8 text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-gray-500 dark:text-gray-400 text-sm hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            © 2025 RenderCube. All rights reserved.
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-sm flex items-center gap-1.5">
            Made with <span className="text-red-500">♥</span> for creators worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
