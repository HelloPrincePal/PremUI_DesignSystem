import React from 'react';
import { Avatar, AvatarProps } from './Avatar';

export interface AvatarGroupProps {
  /** Size of avatars in the group */
  size?: number;
  /** List of avatars to display */
  members: AvatarProps[];
  /** Extra count to show (e.g., +9) */
  extraCount?: number | string;
  /** Whether to show the extra count indicator */
  showMore?: boolean;
  /** Spacing between avatars (can be negative for overlap) */
  spacing?: number;
  className?: string;
}

export const AvatarGroup = ({
  size = 64,
  members = [],
  extraCount,
  showMore = true,
  spacing,
  className = ''
}: AvatarGroupProps) => {
  // Default negative spacing for overlap if not provided
  const overlapSpacing = spacing !== undefined ? spacing : -(size * 0.25);

  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      {members.map((member, index) => (
        <div
          key={index}
          style={{
            marginLeft: index === 0 ? 0 : overlapSpacing,
            zIndex: index,
            position: 'relative'
          }}
        >
          <Avatar
            {...member}
            size={size}
            style={{
              outline: `2px var(--stroke-white-0, white) solid`,
              borderRadius: '999px'
            }}
          />
        </div>
      ))}

      {showMore && extraCount && (
        <div style={{
          marginLeft: overlapSpacing,
          zIndex: members.length,
          width: size,
          height: size,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'var(--bg-weak-50, #F7F7F7)',
          borderRadius: 999,
          outline: '2px var(--stroke-white-0, white) solid',
          position: 'relative'
        }}>
          <div style={{
            alignSelf: 'stretch',
            textAlign: 'center',
            color: 'var(--text-sub-600, #5C5C5C)',
            fontSize: size * 0.35,
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            lineHeight: 1
          }}>
            {typeof extraCount === 'number' ? `+${extraCount}` : extraCount}
          </div>
        </div>
      )}
    </div>
  );
};
