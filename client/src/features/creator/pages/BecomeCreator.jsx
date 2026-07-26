import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Wallet, TrendingUp, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { Card, Button, Input, Textarea } from '../../../shared/ui';
import { categories } from '../../../context/data/mock';
import { useAuth } from '../../../context/AuthContext';

const perks = [
  {
    icon: Wallet,
    title: 'Earn from every download',
    text: 'Set your own pricing or offer assets free to build an audience.',
  },
  {
    icon: TrendingUp,
    title: 'Real-time analytics',
    text: 'Track downloads, favorites, and profile views as they happen.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified creator badge',
    text: 'Stand out with a verified badge once your identity is confirmed.',
  },
];

export default function BecomeCreator() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ storeName: '', category: categories[0], description: '' });
  const { becomeCreator } = useAuth();
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();
    becomeCreator();
    navigate('/creator/dashboard');
  }

  return (
    <div className="mx-auto max-w-2xl px-md py-2xl sm:px-lg">
      {step === 1 ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="inline-flex items-center gap-sm rounded-full border border-brand-500/30 bg-brand-500/10 px-md py-sm text-xs font-medium text-brand-500">
            <Sparkles size={13} /> Creator Studio
          </span>
          <h1 className="mt-sm font-display text-3xl font-semibold text-ink">Become a Creator</h1>
          <p className="mt-2 text-ink-soft">
            Open your own store, upload assets, and start building an audience of motion designers.
          </p>

          <div className="mt-8 space-y-3">
            {perks.map((p) => (
              <Card key={p.title} className="flex items-start gap-4 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet/15 text-violet">
                  <p.icon size={18} />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-ink">{p.title}</p>
                  <p className="text-sm text-ink-faint">{p.text}</p>
                </div>
              </Card>
            ))}
          </div>

          <Button
            size="lg"
            variant="gradient"
            className="mt-8 w-full gap-2"
            onClick={() => setStep(2)}
          >
            Set up my store <ArrowRight size={16} />
          </Button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="font-display text-2xl font-semibold text-ink">Tell us about your store</h1>
          <p className="mt-2 text-sm text-ink-faint">
            You can always change these details later from Store Settings.
          </p>

          <form onSubmit={submit} className="mt-6 space-y-4">
            <Card className="space-y-4 p-5">
              <Input
                label="Store name"
                placeholder="e.g. Jarvis Studio"
                required
                value={form.storeName}
                onChange={(e) => setForm((f) => ({ ...f, storeName: e.target.value }))}
              />
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-ink-soft">
                  Store category
                </span>
                <select
                  value={form.category}
                  onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                  className="w-full rounded-xl border border-border bg-surface-raised px-3.5 py-2.5 text-sm text-ink outline-none focus:border-violet focus:ring-2 focus:ring-violet/20"
                >
                  {categories.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>
              <Textarea
                label="Store description"
                rows={3}
                placeholder="What kind of assets will you share?"
                value={form.description}
                onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
              />
            </Card>

            <div className="flex items-center gap-2 text-sm text-ink-faint">
              <Check size={15} className="text-mint" /> No fees to open a store — you keep 100% on
              free assets.
            </div>

            <div className="flex gap-3">
              <Button type="button" variant="secondary" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button type="submit" variant="gradient" className="flex-1 gap-2">
                Launch my store <ArrowRight size={16} />
              </Button>
            </div>
          </form>
        </motion.div>
      )}
    </div>
  );
}
