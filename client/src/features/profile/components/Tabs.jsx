import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { cx } from '../../../utils/cn';
import { selectIsEditingProfile, setActiveProfileTab } from '../../user/services';

const Tabs = ({ tabs, active }) => {
  const dispatch = useDispatch();
  const isEditingProfile = useSelector(selectIsEditingProfile);

  const handleAtiveProfileTab = (id) => {
    if (!isEditingProfile) {
      dispatch(setActiveProfileTab(id));
    }
  };

  return (
    <div className="mb-6 flex gap-6 border-b border-slate-200">
      {tabs.map((tab) => {
        const isActive = active === tab.id;

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => handleAtiveProfileTab(tab.id)}
            className={cx(
              'relative pb-3 text-sm font-medium transition-colors',
              isActive ? 'text-violet-600' : 'text-slate-400 hover:text-slate-600'
            )}
          >
            {tab.label}

            {isActive && (
              <motion.div
                layoutId="tab-underline"
                className="absolute -bottom-px left-0 right-0 h-0.5 rounded-full bg-violet-600"
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
