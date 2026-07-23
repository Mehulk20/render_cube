import { useState } from 'react';
import { Store } from 'lucide-react';

import { Card } from '../../../shared/components';
import EditableField from './EditableField';

const CreatorInfoCard = () => {
  const [info, setInfo] = useState({
    storeName: '',
    storeUrl: 'mehulk_20',
    storeDescription: '',
    storeCategory: '',
  });

  const handleUpdate = (key) => (value) => {
    setInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <Card delay={0.1}>
      <div className="mb-2 flex items-center gap-2">
        <Store size={18} className="text-violet-600" />

        <h3 className="text-lg font-semibold text-slate-900">Creator Information</h3>
      </div>

      <div>
        <EditableField
          label="Store Name"
          value={info.storeName}
          onSave={handleUpdate('storeName')}
          placeholder="Add a store name"
        />

        <EditableField
          label="Store URL"
          value={info.storeUrl}
          onSave={handleUpdate('storeUrl')}
          placeholder="your-store"
          prefix="rendercube.com/"
        />

        <EditableField
          label="Store Description"
          value={info.storeDescription}
          onSave={handleUpdate('storeDescription')}
          placeholder="Describe what you sell"
          multiline
        />

        <EditableField
          label="Store Category"
          value={info.storeCategory}
          onSave={handleUpdate('storeCategory')}
          placeholder="Choose a category"
        />
      </div>
    </Card>
  );
};

export default CreatorInfoCard;
