import { useState } from 'react';
import { Minus, Plus, Camera } from 'lucide-react';
import { Card, Input, Textarea, Button, Avatar } from '../ui';
import { AuroraCover } from '../components';

export default function ProfileEditForm({ user, showCreatorInfo = false, onSave, onCancel }) {
  const [form, setForm] = useState({
    name: user.name,
    username: user.username,
    bio: user.bio,
    location: user.location,
    website: user.website,
    storeName: user.storeName ?? '',
    storeUrl: user.username,
  });
  const [social, setSocial] = useState(user.social);

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function updateSocial(i, value) {
    setSocial((s) => s.map((item, idx) => (idx === i ? { ...item, handle: value } : item)));
  }

  function removeSocial(i) {
    setSocial((s) => s.filter((_, idx) => idx !== i));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSave({ ...form, social });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Card className="overflow-hidden p-0">
        <div className="relative">
          <AuroraCover className="h-32 sm:h-40" />
          <button
            type="button"
            className="
              absolute right-3 top-3 flex items-center gap-1.5 rounded-lg bg-black/40 px-3 py-1.5
              text-xs font-medium text-white backdrop-blur-sm
              transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]
              hover:bg-black/60
            "
          >
            <Camera size={13} /> Change Cover
          </button>
        </div>
        <div className="flex items-center gap-4 px-5 pb-5 pt-4 sm:px-6">
          <span className="relative -mt-14">
            <Avatar src={user.avatar} size="xl" ring />
            <button
              type="button"
              className="
                absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full
                bg-primary text-white ring-4 ring-surface
                transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]
                hover:bg-primary-hover
              "
            >
              <Camera size={12} />
            </button>
          </span>
          <p className="text-xs text-foreground-faint">JPG, PNG or WEBP. Max size 2MB.</p>
        </div>
      </Card>

      <Card className="space-y-4 p-5 sm:p-6">
        <h3 className="font-display text-sm font-semibold text-foreground">Personal Information</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            label="Display Name"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
          />
          <Input
            label="Username"
            value={form.username}
            onChange={(e) => update('username', e.target.value)}
          />
        </div>
        <Textarea
          label="Bio"
          rows={3}
          maxLength={160}
          value={form.bio}
          onChange={(e) => update('bio', e.target.value)}
          hint={`${form.bio.length}/160`}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            label="Location"
            value={form.location}
            onChange={(e) => update('location', e.target.value)}
          />
          <Input
            label="Website"
            value={form.website}
            onChange={(e) => update('website', e.target.value)}
          />
        </div>
      </Card>

      <Card className="space-y-3 p-5 sm:p-6">
        <h3 className="font-display text-sm font-semibold text-foreground">Social Links</h3>
        {social.map((s, i) => (
          <div key={s.platform} className="flex items-center gap-2">
            <span className="w-20 shrink-0 text-sm text-foreground-soft">{s.platform}</span>
            <Input
              className="flex-1"
              value={s.handle}
              onChange={(e) => updateSocial(i, e.target.value)}
            />
            <button
              type="button"
              onClick={() => removeSocial(i)}
              className="
                flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-foreground-faint
                transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]
                hover:bg-surface-raised hover:text-danger
              "
              aria-label={`Remove ${s.platform}`}
            >
              <Minus size={15} />
            </button>
          </div>
        ))}
        <button
          type="button"
          className="flex items-center gap-1.5 text-sm font-medium text-primary transition-colors duration-[var(--duration-fast)] hover:text-primary-hover"
        >
          <Plus size={14} /> Add Social Link
        </button>
      </Card>

      {showCreatorInfo && (
        <Card className="space-y-4 p-5 sm:p-6">
          <h3 className="font-display text-sm font-semibold text-foreground">
            Creator Information
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              label="Store Name"
              value={form.storeName}
              onChange={(e) => update('storeName', e.target.value)}
            />
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-foreground-soft">
                Store URL
              </span>
              <div
                className="
                  flex items-center rounded-xl border border-border bg-surface-raised px-3.5 py-2.5 text-sm
                  transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]
                  focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20
                "
              >
                <span className="text-foreground-faint">motionenvato.com/</span>
                <input
                  className="flex-1 bg-transparent text-foreground outline-none"
                  value={form.storeUrl}
                  onChange={(e) => update('storeUrl', e.target.value)}
                />
              </div>
            </label>
          </div>
        </Card>
      )}

      <div className="flex justify-end gap-3">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="gradient">
          Save changes
        </Button>
      </div>
    </form>
  );
}
