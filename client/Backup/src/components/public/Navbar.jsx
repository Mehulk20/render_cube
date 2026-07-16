// import { ChevronDown, Menu, ShoppingCart, X } from 'lucide-react';
// import { useState, useEffect, useRef } from 'react';

// import { Link, NavLink } from 'react-router-dom';

// import { Cart } from '../common';
// import ThemeToggle from './ThemeToggle';
// import Logo from './Logo';

// /**
//  * Navbar — fixed top navigation.
//  *
//  * FIX: Hides when user scrolls DOWN (>8px movement), reappears instantly
//  * when user scrolls UP. Uses a ref to track previous scroll position to
//  * avoid stale-closure bugs inside the event listener.
//  *
//  * Also includes:
//  * - Dark/light mode toggle
//  * - Cart icon with item-count badge
//  * - Active route highlighting via NavLink
//  * - Responsive mobile menu
//  */
// const Navbar = ({ variant = 'default' }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [hidden, setHidden] = useState(false); // true  → slid up off screen
//   const [scrolled, setScrolled] = useState(false); // true  → add shadow/backdrop
//   const lastScrollY = useRef(0);

//   const isAuth = variant === 'auth';

//   useEffect(() => {
//     const THRESHOLD = 8; // px of movement before we react

//     const handleScroll = () => {
//       const currentY = window.scrollY;
//       const diff = currentY - lastScrollY.current;

//       // Scrolling DOWN past threshold → hide
//       if (diff > THRESHOLD && currentY > 80) {
//         setHidden(true);
//         setIsMenuOpen(false); // close mobile menu when hiding
//       }
//       // Scrolling UP → show
//       else if (diff < -THRESHOLD) {
//         setHidden(false);
//       }

//       // Add shadow once we've scrolled at all
//       setScrolled(currentY > 10);
//       lastScrollY.current = currentY;
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinkClass = ({ isActive }) =>
//     `text-sm font-medium transition-colors ${
//       isActive
//         ? 'text-primary'
//         : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white'
//     }`;

//   const navItems = [
//     { label: 'Marketplace', to: '/marketplace' },
//     { label: 'Creators', to: '/creators' },
//     { label: 'Pricing', to: '/pricing' },
//   ];

//   return (
//     <nav
//       className={`
//         fixed top-0 left-0 right-0 z-50
//         bg-white/90 dark:bg-gray-950/90 backdrop-blur-md
//         border-b border-gray-100 dark:border-gray-800
//         transition-all duration-300 ease-in-out
//         ${hidden ? '-translate-y-full shadow-none' : 'translate-y-0'}
//         ${scrolled ? 'shadow-sm' : ''}
//       `}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-2 shrink-0">
//             <div className="w-12 h-12 rounded-lg flex items-center justify-center">
//               <Logo />
//             </div>
//             <span
//               className="font-display font-bold text-xl text-gray-900 dark:text-white"
//               style={{ fontFamily: 'Syne' }}
//             >
//               RenderCube
//             </span>
//           </Link>

//           {/* Desktop nav links */}
//           {!isAuth && (
//             <div className="hidden md:flex items-center gap-8">
//               {navItems.map(({ label, to }) => (
//                 <NavLink key={to} to={to} className={navLinkClass}>
//                   {label}
//                 </NavLink>
//               ))}
//               <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white text-sm font-medium cursor-pointer transition-colors">
//                 Categories <ChevronDown size={14} />
//               </div>
//             </div>
//           )}

//           {/* Right controls */}
//           <div className="hidden md:flex items-center gap-3">
//             {/* Dark mode toggle */}
//             <ThemeToggle />

//             {/* Cart */}

//             <Cart icon={20} />

//             {!isAuth && (
//               <>
//                 <Link
//                   to="/login"
//                   className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white text-sm font-medium px-4 py-2 transition-colors"
//                 >
//                   Log in
//                 </Link>
//                 <Link
//                   to="/signup"
//                   className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-purple-200 dark:hover:shadow-purple-900"
//                 >
//                   Sign up
//                 </Link>
//               </>
//             )}
//           </div>

//           {/* Mobile right controls */}
//           <div className="md:hidden flex items-center gap-1">
//             <ThemeToggle />
//             {!isAuth && (
//               <>
//                 <Cart icon={20} />
//                 <button
//                   className="p-2 text-gray-600 dark:text-gray-300"
//                   onClick={() => setIsMenuOpen(!isMenuOpen)}
//                   aria-label="Toggle menu"
//                 >
//                   {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Mobile dropdown */}
//       {!isAuth && (
//         <div
//           className={`md:hidden bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 overflow-hidden transition-all duration-300 ease-in-out ${
//             isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//           }`}
//         >
//           <div className="px-4 py-4 space-y-1">
//             {navItems.map(({ label, to }) => (
//               <Link
//                 key={to}
//                 to={to}
//                 onClick={() => setIsMenuOpen(false)}
//                 className="block text-gray-700 dark:text-gray-200 font-medium py-2.5 hover:text-primary transition-colors"
//               >
//                 {label}
//               </Link>
//             ))}
//             <Link
//               to="/marketplace"
//               onClick={() => setIsMenuOpen(false)}
//               className="block text-gray-700 dark:text-gray-200 font-medium py-2.5"
//             >
//               Categories
//             </Link>
//             <div className="pt-3 flex flex-col gap-2 border-t border-gray-100 hover:text-primary dark:border-gray-800 mt-2">
//               <Link
//                 to="/login"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="text-gray-700 dark:text-gray-200 font-medium py-2"
//               >
//                 Log in
//               </Link>
//               <Link
//                 to="/signup"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="bg-primary text-white font-semibold py-2.5 rounded-full text-center"
//               >
//                 Sign up
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import { ChevronDown, Menu, ShoppingCart, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { Cart } from '../common';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

/**
 * Navbar — fixed top navigation.
 */
const Navbar = ({ variant = 'default' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const lastScrollY = useRef(0);

  const isAuth = variant === 'auth';

  useEffect(() => {
    const THRESHOLD = 8;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      if (diff > THRESHOLD && currentY > 80) {
        setHidden(true);
        setIsMenuOpen(false);
      } else if (diff < -THRESHOLD) {
        setHidden(false);
      }

      setScrolled(currentY > 10);

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `
      text-sm
      font-medium
      transition-colors
      duration-300
      ${isActive ? 'text-primary' : 'text-foreground-muted hover:text-primary'}
    `;

  const navItems = [
    { label: 'Marketplace', to: '/marketplace' },
    { label: 'Creators', to: '/creators' },
    { label: 'Pricing', to: '/pricing' },
  ];

  return (
    <nav
      className={`
        fixed
        inset-x-0
        top-0
        z-50

        border-b
        border-border

        bg-floating/90
        backdrop-blur-xl

        transition-all
        duration-300
        ease-in-out

        ${hidden ? '-translate-y-full shadow-none' : 'translate-y-0'}
        ${scrolled ? 'shadow-card' : ''}
      `}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}

          <Link to="/" className="group flex shrink-0 items-center gap-2.5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl">
              <Logo />
            </div>

            <span
              className="
                font-display
                text-xl
                font-bold
                text-foreground
                transition-colors
                duration-300
                group-hover:text-primary
              "
            >
              RenderCube
            </span>
          </Link>

          {/* Desktop Navigation */}

          {!isAuth && (
            <div className="hidden items-center gap-8 md:flex">
              {navItems.map(({ label, to }) => (
                <NavLink key={to} to={to} className={navLinkClass}>
                  {label}
                </NavLink>
              ))}

              <div
                className="
                  flex
                  cursor-pointer
                  items-center
                  gap-1
                  text-sm
                  font-medium
                  text-foreground-muted
                  transition-colors
                  duration-300
                  hover:text-primary
                "
              >
                Categories
                <ChevronDown size={14} />
              </div>
            </div>
          )}

          {/* ---------- PART 2 STARTS HERE ---------- */}
          {/* Right controls */}

          <div className="hidden items-center gap-3 md:flex">
            {/* Theme */}

            <ThemeToggle />

            {/* Cart */}

            <Cart icon={20} />

            {!isAuth && (
              <>
                {/* Login */}

                <Link
                  to="/login"
                  className="
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-foreground-muted
                    transition-colors
                    duration-300
                    hover:text-primary
                  "
                >
                  Log in
                </Link>

                {/* Signup */}

                <Link
                  to="/signup"
                  className="
                    rounded-full
                    bg-primary
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-white

                    shadow-card

                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:bg-primary-hover
                    hover:shadow-glow

                    active:translate-y-0
                    active:scale-[0.98]
                  "
                >
                  Sign up
                </Link>
              </>
            )}
          </div>

          {/* Mobile right controls */}

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />

            {!isAuth && (
              <>
                <Cart icon={20} />

                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center

                    rounded-xl

                    text-foreground-muted

                    transition-all
                    duration-300

                    hover:bg-surface-hover
                    hover:text-primary

                    active:scale-95
                  "
                >
                  {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </>
            )}
          </div>
        </div>

        {/* Mobile dropdown */}

        {!isAuth && (
          <div
            className={`
              md:hidden

              overflow-hidden

              border-t
              border-border

              bg-floating

              transition-all
              duration-300
              ease-in-out

              ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
            `}
          >
            <div className="space-y-1 px-4 py-4">
              {navItems.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    block

                    rounded-xl

                    py-2.5
                    px-3

                    text-sm
                    font-medium

                    text-foreground

                    transition-all
                    duration-300

                    hover:bg-surface-hover
                    hover:text-primary
                  "
                >
                  {label}
                </Link>
              ))}

              <Link
                to="/marketplace"
                onClick={() => setIsMenuOpen(false)}
                className="
                  block

                  rounded-xl

                  py-2.5
                  px-3

                  text-sm
                  font-medium

                  text-foreground

                  transition-all
                  duration-300

                  hover:bg-surface-hover
                  hover:text-primary
                "
              >
                Categories
              </Link>

              <div
                className="
                  mt-3

                  flex
                  flex-col
                  gap-2

                  border-t
                  border-border

                  pt-4
                "
              >
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    rounded-xl

                    py-2.5

                    text-center
                    text-sm
                    font-medium

                    text-foreground-muted

                    transition-colors
                    duration-300

                    hover:text-primary
                  "
                >
                  Log in
                </Link>

                <Link
                  to="/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    rounded-full

                    bg-primary

                    py-2.5

                    text-center
                    text-sm
                    font-semibold

                    text-white

                    shadow-card

                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:bg-primary-hover
                    hover:shadow-glow

                    active:scale-[0.98]
                  "
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
