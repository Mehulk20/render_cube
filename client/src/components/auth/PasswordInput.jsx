import { useState } from 'react';
import { Eye, EyeOff, Lock } from 'lucide-react';
import InputField from './InputField';
import { usePasswordStrength } from '../../dev-data/usePasswordStrength';

export default function PasswordInput({
  id,
  label = 'Password',
  showStrength = false,
  value = '',
  ...props
}) {
  const [visible, setVisible] = useState(false);
  const strength = usePasswordStrength(value);

  return (
    <div>
      <InputField
        id={id}
        label={label}
        icon={Lock}
        type={visible ? 'text' : 'password'}
        value={value}
        trailing={
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            aria-label={visible ? 'Hide password' : 'Show password'}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-400 transition-colors hover:text-ink-600 dark:text-ink-500 dark:hover:text-ink-300"
          >
            {visible ? (
              <EyeOff className="h-[18px] w-[18px]" strokeWidth={1.8} />
            ) : (
              <Eye className="h-[18px] w-[18px]" strokeWidth={1.8} />
            )}
          </button>
        }
        {...props}
      />
      {showStrength && value && (
        <div className="mt-2.5">
          <div className="flex h-1.5 gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`flex-1 rounded-full transition-colors duration-300 ${
                  i < strength.score ? strength.color : 'bg-ink-200 dark:bg-ink-700'
                }`}
              />
            ))}
          </div>
          <p className="mt-1.5 text-xs font-medium text-ink-500 dark:text-ink-400">
            {strength.label}
          </p>
        </div>
      )}
    </div>
  );
}
