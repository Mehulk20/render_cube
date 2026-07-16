import { Button } from '../../../shared/ui';
import { Pencil, Share2, UserPlus, MessageCircle } from 'lucide-react';

export default function ProfileActions({
  editable = false,
  following = false,
  showMessage = false,
  onEdit,
  onFollow,
  onShare,
  onMessage,
}) {
  if (editable) {
    return (
      <Button variant="gradient" onClick={onEdit} className="gap-2">
        <Pencil size={16} />
        Edit Profile
      </Button>
    );
  }

  return (
    <div className="flex flex-wrap gap-3">
      <Button variant={following ? 'secondary' : 'gradient'} onClick={onFollow} className="gap-2">
        <UserPlus size={16} />
        {following ? 'Following' : 'Follow'}
      </Button>

      {showMessage && (
        <Button variant="secondary" onClick={onMessage} className="gap-2">
          <MessageCircle size={16} />
          Message
        </Button>
      )}

      <Button variant="ghost" onClick={onShare} className="gap-2">
        <Share2 size={16} />
        Share
      </Button>
    </div>
  );
}
