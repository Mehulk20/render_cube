import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import Button from '../Button';

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      <Link to="/marketplace">
        <Button variant="primary" size="lg" className="group">
          Explore Assets
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Button>
      </Link>

      <Link to="/signup">
        <Button variant="outline" size="lg">
          Become a Creator
        </Button>
      </Link>
    </div>
  );
}
