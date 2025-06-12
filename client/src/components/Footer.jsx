import { FaFacebook, FaTwitter, FaInstagram, FaDribbble, FaGithub } from 'react-icons/fa';
import NewsLetter from './NewsLetter';
import FooterNav from './FooterNav';

function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300 px-8 pt-16 pb-10 relative overflow-hidden">
      {/* Glowing abstract background effect (optional) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
        <img
          src="/assets/hero-section-bg.png"
          alt="Abstract Glow"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1: Logo + Newsletter */}
        <NewsLetter />
        {/* Column 2: Navigation */}
        <FooterNav
          title="Explore"
          items={['Browse Assets', 'rending Templates', 'Sell Your Work', 'Support']}
        />

        {/* Column 3: Company */}
        <FooterNav
          title="Company"
          items={['About Us', 'Careers', 'Terms & Conditions', 'Privacy Policy']}
        />

        {/* Column 4: Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect with us</h3>
          <div className="flex space-x-4 text-xl text-gray-400">
            <a href="#">
              <FaFacebook className="hover:text-white" />
            </a>
            <a href="#">
              <FaTwitter className="hover:text-white" />
            </a>
            <a href="#">
              <FaInstagram className="hover:text-white" />
            </a>
            <a href="#">
              <FaDribbble className="hover:text-white" />
            </a>
            <a href="#">
              <FaGithub className="hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} Premium Templates. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
