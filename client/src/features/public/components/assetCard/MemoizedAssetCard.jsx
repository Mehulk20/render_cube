import React, { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../../../store';
import { addItemToCart } from '../../../cart/services';

import AssetThumbnail from './AssetThumbnail';
import AssetContent from './AssetContent';

function AssetCard({ id, title, creator, price, gradient, badge, rating = 4.8, reviews = 124 }) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const navigateToAsset = useCallback(() => {
    const path = `/asset/${id}`;

    if (document.startViewTransition) {
      document.startViewTransition(() => navigate(path));
      return;
    }

    navigate(path);
  }, [navigate, id]);

  const handleAddToCart = useCallback(
    (e) => {
      e.stopPropagation();

      dispatch(
        addItemToCart({
          id,
          title,
          creator,
          price: Number(price),
          gradient,
        })
      );
    },
    [dispatch, id, title, creator, price, gradient]
  );

  const handleBookmark = useCallback((e) => {
    e.stopPropagation();

    // TODO:
    // wishlist action
  }, []);

  const handlePreview = useCallback(
    (e) => {
      e.stopPropagation();

      navigateToAsset();
    },
    [navigateToAsset]
  );

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={navigateToAsset}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          navigateToAsset();
        }
      }}
      className="
        asset-card
        card
        motion-card

        group
        relative

        flex
        h-full
        flex-col

        overflow-hidden

        rounded-[var(--radius-card)]

        cursor-pointer

        animate-card
      "
    >
      {/* Ambient Glow */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-0

            h-72
            w-72

            -translate-x-1/2

            rounded-full

            bg-primary/10

            blur-3xl
          "
        />
      </div>

      <AssetThumbnail
        gradient={gradient}
        badge={badge}
        onBookmark={handleBookmark}
        onPreview={handlePreview}
        onCart={handleAddToCart}
      />

      <AssetContent
        title={title}
        creator={creator}
        rating={rating}
        reviews={reviews}
        price={price}
      />
    </article>
  );
}

const MemoizedAssetCard = memo(AssetCard);

MemoizedAssetCard.displayName = 'AssetCard';

export default MemoizedAssetCard;
