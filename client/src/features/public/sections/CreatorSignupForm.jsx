import { useState } from 'react';

import { SignupForm, SignupSuccess } from '../components/form';

export default function CreatorSignupForm({ onClose }) {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    specialty: '',
  });

  const update = (field) => (e) =>
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return submitted ? (
    <SignupSuccess onClose={onClose} onReset={() => setSubmitted(false)} />
  ) : (
    <SignupForm form={form} update={update} onClose={onClose} onSubmit={handleSubmit} />
  );
}
