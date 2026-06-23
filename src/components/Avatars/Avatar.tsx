/// <reference types="vite/client" />
import React from 'react';

// Import all Persona SVGs
const personaAssets = import.meta.glob('./Persona/*.svg', { 
  eager: true, 
  query: '?url',
  import: 'default'
}) as Record<string, string>;

// Import Status SVGs
const topStatusAssets = import.meta.glob('./Top Status/*.svg', { 
  eager: true, 
  query: '?url',
  import: 'default'
}) as Record<string, string>;

const bottomStatusAssets = import.meta.glob('./Bottom Status/*.svg', { 
  eager: true, 
  query: '?url',
  import: 'default'
}) as Record<string, string>;

import { PlaceholderBrand, PlaceholderCompany, PlaceholderStyle } from '../../assets/Placeholder/PlaceholderBrand';

export type AvatarType = 'Image' | 'Solid BG' | 'Memoji' | 'Illustration' | 'Text' | 'Icon' | 'Persona';

export type TopStatusType = 'Verified' | 'Remove' | 'Add' | 'Favorite' | 'Pin' | 'Notification';
export type BottomStatusType = 'Online' | 'Offline' | 'Busy' | 'Away' | 'Company';

export const PERSONA_COLORS: Record<string, string> = {
  'James Brown': 'var(--color-neutral-gray-200, #EBEBEB)',
  'Wei Chen': 'var(--color-neutral-gray-200, #EBEBEB)',
  'Sophia Williams': 'var(--color-yellow-100, #FFEFCC)',
  'Juma Omondi': 'var(--color-yellow-100, #FFEFCC)',
  'Arthur Taylor': 'var(--color-blue-100, #D5E2FF)',
  'Lena Müller': 'var(--color-blue-100, #D5E2FF)',
  'Emma Wright': 'var(--color-sky-100, #D5F1FF)',
  'Natalia Nowak': 'var(--color-sky-100, #D5F1FF)',
  'Matthew Johnson': 'var(--color-purple-100, #DCD5FF)',
  'Ravi Patel': 'var(--color-purple-100, #DCD5FF)',
  'Laura Perez': 'var(--color-pink-100, #FFD5EA)',
  'Nuray Aksoy': 'var(--color-pink-100, #FFD5EA)',
};

export const PERSONA_TEXT_COLORS: Record<string, string> = {
  'James Brown': 'var(--color-neutral-gray-800, #262626)',
  'Wei Chen': 'var(--color-neutral-gray-800, #262626)',
  'Sophia Williams': 'var(--color-yellow-900, #86661D)',
  'Juma Omondi': 'var(--color-yellow-900, #86661D)',
  'Arthur Taylor': 'var(--color-blue-900, #182F8B)',
  'Lena Müller': 'var(--color-blue-900, #182F8B)',
  'Emma Wright': 'var(--color-sky-900, #18658B)',
  'Natalia Nowak': 'var(--color-sky-900, #18658B)',
  'Matthew Johnson': 'var(--color-purple-900, #3D1D86)',
  'Ravi Patel': 'var(--color-purple-900, #3D1D86)',
  'Laura Perez': 'var(--color-pink-900, #8B1852)',
  'Nuray Aksoy': 'var(--color-pink-900, #8B1852)',
};

export interface AvatarProps {
  /** Persona name */
  persona?: string;
  /** Size in pixels */
  size?: number;
  /** Background type */
  type?: AvatarType;
  /** URL for custom image (overrides persona SVG for 'Image' type) */
  src?: string;
  /** Top status indicator type */
  topStatus?: TopStatusType;
  /** Bottom status indicator type */
  bottomStatus?: BottomStatusType;
  /** Company for Company status */
  company?: PlaceholderCompany;
  /** Style for Company status */
  companyStyle?: PlaceholderStyle;
  className?: string;
  style?: React.CSSProperties;
}

const TOP_STATUS_ICONS: Record<TopStatusType, string> = {
  Verified: '✅ Verified',
  Remove: '❌ Remove',
  Add: '➕ Add',
  Favorite: '⭐️ Favorite',
  Pin: '📌 Pin',
  Notification: '🔔 Notification'
};

const BOTTOM_STATUS_ICONS: Record<BottomStatusType, string> = {
  Online: '🟢 Online',
  Offline: '⚪️ Offline',
  Busy: '🔴 Busy',
  Away: '🟡 Away',
  Company: '🏢 Company'
};

export const Avatar = ({ 
  persona = 'James Brown', 
  size = 64, 
  type = 'Image', 
  src, 
  topStatus, 
  bottomStatus,
  company = 'Synergy',
  companyStyle = 'Original',
  className = '',
  style
}: AvatarProps) => {
  
  // Construct key for persona SVG
  const personaKey = `./Persona/👤 Persona=${persona}, 📏 Size=80, 🏞️ Image=${type === 'Image' ? 'On' : 'Off'}, ⚪️ Solid BG=${type === 'Solid BG' ? 'On' : 'Off'}, 👨🏻 Memoji=${type === 'Memoji' ? 'On' : 'Off'}, 🖌️ Illustration=${type === 'Illustration' ? 'On' : 'Off'}, ✏️ Text=${type === 'Text' ? 'On' : 'Off'}, 💠 Icon=${type === 'Icon' ? 'On' : 'Off'}.svg`;
  
  const personaUrl = personaAssets[personaKey];
  
  // Status asset keys
  const topStatusKey = topStatus ? `./Top Status/🧩 Type=${TOP_STATUS_ICONS[topStatus]}.svg` : '';
  const bottomStatusKey = bottomStatus ? `./Bottom Status/🧩 Type=${BOTTOM_STATUS_ICONS[bottomStatus]}.svg` : '';
  
  const topStatusUrl = topStatusAssets[topStatusKey];
  const bottomStatusUrl = bottomStatusAssets[bottomStatusKey];

  // Scale positioning
  const statusSize = (28 / 64) * size;
  const statusLeft = (44 / 64) * size;
  const bottomStatusTop = (36 / 64) * size;

  // Initials for Text mode
  const initials = persona.split(' ').map(n => n[0]).join('').toUpperCase();
  const bgColor = PERSONA_COLORS[persona] || 'var(--color-neutral-gray-200, #EBEBEB)';
  const textColor = PERSONA_TEXT_COLORS[persona] || 'var(--color-neutral-gray-600, #5C5C5C)';

  return (
    <div 
      className={className}
      style={{
        width: size,
        height: size,
        position: 'relative',
        display: 'inline-block',
        ...style
      }}
    >
      {/* Main Avatar Content */}
      <div style={{
        width: '100%',
        height: '100%',
        background: bgColor,
        borderRadius: 999,
        position: 'relative'
      }}>
        {type === 'Image' && src ? (
          <img 
            src={src} 
            alt={persona} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 999 }} 
          />
        ) : personaUrl ? (
          <img 
            src={personaUrl} 
            alt={persona} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 999 }} 
          />
        ) : type === 'Text' ? (
          <div style={{ 
            width: '100%', 
            height: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            fontSize: size * 0.35,
            fontWeight: 600,
            color: textColor,
            fontFamily: 'Inter, sans-serif'
          }}>
            {initials}
          </div>
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: textColor }}>
             <i className="ri-user-line" style={{ fontSize: size * 0.5 }} />
          </div>
        )}
      </div>

      {/* Top Status */}
      {topStatus && topStatusUrl && (
        <div 
          style={{
            width: statusSize,
            height: statusSize,
            left: statusLeft,
            top: 0,
            position: 'absolute',
            zIndex: 1
          }}
        >
          <img src={topStatusUrl} alt={topStatus} style={{ width: '100%', height: '100%' }} />
        </div>
      )}

      {/* Bottom Status */}
      {bottomStatus && (
        <div 
          style={{
            width: statusSize,
            height: statusSize,
            left: statusLeft,
            top: bottomStatusTop,
            position: 'absolute',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {bottomStatus === 'Company' ? (
            <div style={{
              width: '100%',
              height: '100%',
              background: companyStyle === 'White' ? 'var(--bg-strong-950, #0A0D14)' : 'var(--bg-white-0, #FFFFFF)',
              borderRadius: '50%',
              border: '1px solid var(--stroke-soft-200, #E6E6E6)',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2px', // Slight padding for the logo
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}>
              <PlaceholderBrand company={company} style={companyStyle} size="90%" />
            </div>
          ) : bottomStatusUrl ? (
            <img src={bottomStatusUrl} alt={bottomStatus} style={{ width: '100%', height: '100%' }} />
          ) : null}
        </div>
      )}
    </div>
  );
};
