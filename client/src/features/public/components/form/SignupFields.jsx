import { Briefcase, Lock, Mail, User } from 'lucide-react';

import { SPECIALTIES } from './signup.constants';
import { inputClass } from './signup.classes';

export default function SignupFields({ form, update }) {
  return (
    <>
      <div className="relative">
        <User
          size={16}
          className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-foreground-faint"
        />

        <input
          type="text"
          required
          placeholder="Full name"
          value={form.name}
          onChange={update('name')}
          className={inputClass}
        />
      </div>

      <div className="relative">
        <Mail
          size={16}
          className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-foreground-faint"
        />

        <input
          type="email"
          required
          placeholder="Email address"
          value={form.email}
          onChange={update('email')}
          className={inputClass}
        />
      </div>

      <div className="relative">
        <Lock
          size={16}
          className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-foreground-faint"
        />

        <input
          type="password"
          required
          minLength={8}
          placeholder="Password (minimum 8 characters)"
          value={form.password}
          onChange={update('password')}
          className={inputClass}
        />
      </div>

      <div className="relative">
        <Briefcase
          size={16}
          className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-foreground-faint"
        />

        <select
          required
          value={form.specialty}
          onChange={update('specialty')}
          className={`${inputClass} appearance-none pr-10`}
        >
          <option value="">What do you create?</option>

          {SPECIALTIES.map((specialty) => (
            <option key={specialty} value={specialty}>
              {specialty}
            </option>
          ))}
        </select>

        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-foreground-faint"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </>
  );
}
