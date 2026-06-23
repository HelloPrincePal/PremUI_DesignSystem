import React from 'react';
import { AppstoreBadge, AppstoreCompany } from './AppstoreBadge';
import 'remixicon/fonts/remixicon.css';

export interface AppstoreMetadata {
  displayName: string;
  companyName: string;
  description: string;
  content: string;
  guidelinesLink: string;
  icon?: string;
}

export const APPSTORE_DATA: Record<AppstoreCompany, AppstoreMetadata> = {
  'App Store': {
    displayName: 'App Store',
    companyName: 'Apple',
    description: 'Official app store for iOS and iPadOS. Adhere to Apple\'s branding guidelines for badge usage.',
    content: 'Download on the App Store',
    guidelinesLink: 'https://developer.apple.com/app-store/marketing/guidelines/',
    icon: 'ri-apple-fill'
  },
  'Mac App Store': {
    displayName: 'Mac App Store',
    companyName: 'Apple',
    description: 'Official app store for macOS applications. Adhere to Apple\'s branding guidelines for badge usage.',
    content: 'Download on the Mac App Store',
    guidelinesLink: 'https://developer.apple.com/app-store/marketing/guidelines/',
    icon: 'ri-apple-fill'
  },
  'Amazon Appstore': {
    displayName: 'Amazon Appstore',
    companyName: 'Amazon',
    description: 'Official app store for Amazon Fire devices. Comply with Amazon\'s branding guidelines for badge usage.',
    content: 'Available at Amazon Appstore',
    guidelinesLink: 'https://developer.amazon.com/support/legal/tuabg',
    icon: 'ri-amazon-fill'
  },
  'Galaxy Store': {
    displayName: 'Galaxy Store',
    companyName: 'Samsung',
    description: 'Official app store for Samsung Galaxy devices. Follow Samsung\'s branding guidelines for badge usage.',
    content: 'Available on Galaxy Store',
    guidelinesLink: 'https://developer.samsung.com/galaxy-store/gsb-promotion.html',
    icon: 'ri-smartphone-line'
  },
  'Huawei AppGallery': {
    displayName: 'AppGallery',
    companyName: 'Huawei',
    description: 'Official app store for Huawei and Honor devices. Adhere to Huawei\'s branding guidelines for usage.',
    content: 'Explore it on AppGallery',
    guidelinesLink: 'https://developer.huawei.com/consumer/en/doc/development/AppGallery-connect-Guides/agdlink-getlink-agc-0000001164321881',
    icon: 'ri-handbag-line'
  },
  'F-Droid': {
    displayName: 'F-Droid Store',
    companyName: 'F-Droid',
    description: 'Open-source app store for Android. Adhere to F-Droid\'s branding guidelines for badge usage.',
    content: 'Get it on F-Droid',
    guidelinesLink: 'https://f-droid.org/en/2016/05/29/get-it-on-f-droid-badges.html',
    icon: 'ri-android-line'
  },
  'Google Play Store': {
    displayName: 'Google Play Store',
    companyName: 'Google',
    description: 'Official app store for Android. Usage of badge must comply with Google\'s branding guidelines.',
    content: 'Get it on Google Play',
    guidelinesLink: 'https://partnermarketinghub.withgoogle.com/brands/google-play/visual-identity/badge-guidelines/',
    icon: 'ri-google-play-fill'
  },
  'Microsoft Store': {
    displayName: 'Microsoft Store',
    companyName: 'Microsoft',
    description: 'Official app store for Windows. Comply with Microsoft\'s branding guidelines when using the badge.',
    content: 'Get it from Microsoft',
    guidelinesLink: 'https://github.com/microsoft/app-store-badge',
    icon: 'ri-microsoft-fill'
  }
};

export const AppstoreBadgeTile = ({ company }: { company: AppstoreCompany }) => {
  const data = APPSTORE_DATA[company];

  return (
    <div style={{
      display: 'flex',
      alignItems: 'stretch',
      gap: '32px',
      padding: '32px',
      background: 'var(--bg-white-0, #FFFFFF)',
      borderRadius: '16px',
      border: '1px solid var(--stroke-soft-200, #E6E6E6)',
      maxWidth: '1000px',
      margin: '0 auto',
      fontFamily: 'var(--font-family, Inter, sans-serif)'
    }}>
      {/* Left Pane - Visuals */}
      <div style={{ width: '380px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        
        {/* Header containing Icon + Title/Subtitle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ 
            width: '48px', 
            height: '48px', 
            background: 'var(--bg-soft-200, #F5F5F5)', 
            borderRadius: '12px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <i className={data.icon || 'ri-apps-line'} style={{ color: 'var(--icon-strong-950, #0A0D14)', fontSize: '24px' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '4px' }}>
            <h3 style={{ 
              fontSize: '20px', 
              fontWeight: 600, 
              color: 'var(--text-strong-950, #0A0D14)', 
              margin: 0,
              lineHeight: '24px'
            }}>
              {data.displayName}
            </h3>
            <p style={{ 
              fontSize: '14px', 
              color: 'var(--text-sub-600, #5C5C5C)', 
              margin: 0,
              lineHeight: '20px'
            }}>
              {data.content}
            </p>
          </div>
        </div>

        {/* Badge Variant Previews */}
        <div style={{ display: 'flex', gap: '12px' }}>
          
          {/* Preferred Preview */}
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            height: '110px',
            border: '1px solid var(--stroke-soft-200, #E6E6E6)',
            borderRadius: '12px',
            background: 'var(--bg-white-0, #FFFFFF)'
          }}>
            <AppstoreBadge company={company} style="Preferred" height={32} />
            <span style={{ fontSize: '11px', fontWeight: 500, color: 'var(--text-sub-600, #5C5C5C)' }}>Preferred</span>
          </div>

          {/* Alternative Preview */}
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            height: '110px',
            border: '1px solid var(--stroke-soft-200, #E6E6E6)',
            borderRadius: '12px',
            background: 'var(--bg-white-0, #FFFFFF)'
          }}>
            <AppstoreBadge company={company} style="Alternative" height={32} />
            <span style={{ fontSize: '11px', fontWeight: 500, color: 'var(--text-sub-600, #5C5C5C)' }}>Alternative</span>
          </div>

        </div>
      </div>

      {/* Vertical Divider */}
      <div style={{ width: '1px', background: 'var(--stroke-soft-200, #E6E6E6)', height: 'auto' }} />

      {/* Right Pane - Details Table */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* Row 1: Company Name */}
        <div style={{ display: 'flex', padding: '16px 0', borderBottom: '1px dashed var(--stroke-soft-200, #E6E6E6)', alignItems: 'center' }}>
          <div style={{ width: '160px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-strong-950, #0A0D14)', fontSize: '13px', fontWeight: 600 }}>
            <i className="ri-building-line" style={{ color: 'var(--icon-soft-400, #999999)', fontSize: '16px' }} />
            Company name
          </div>
          <div style={{ flex: 1, color: 'var(--text-sub-600, #5C5C5C)', fontSize: '13px', fontWeight: 400 }}>
            {data.companyName}
          </div>
        </div>

        {/* Row 2: Description */}
        <div style={{ display: 'flex', padding: '16px 0', borderBottom: '1px dashed var(--stroke-soft-200, #E6E6E6)' }}>
          <div style={{ width: '160px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-strong-950, #0A0D14)', fontSize: '13px', fontWeight: 600 }}>
            <i className="ri-quill-pen-line" style={{ color: 'var(--icon-soft-400, #999999)', fontSize: '16px' }} />
            Description
          </div>
          <div style={{ flex: 1, color: 'var(--text-sub-600, #5C5C5C)', fontSize: '13px', fontWeight: 400, lineHeight: '1.5' }}>
            {data.description}
          </div>
        </div>

        {/* Row 3: Content */}
        <div style={{ display: 'flex', padding: '16px 0', borderBottom: '1px dashed var(--stroke-soft-200, #E6E6E6)', alignItems: 'center' }}>
          <div style={{ width: '160px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-strong-950, #0A0D14)', fontSize: '13px', fontWeight: 600 }}>
            <i className="ri-edit-line" style={{ color: 'var(--icon-soft-400, #999999)', fontSize: '16px' }} />
            Content
          </div>
          <div style={{ flex: 1, color: 'var(--text-sub-600, #5C5C5C)', fontSize: '13px', fontWeight: 400 }}>
            {data.content}
          </div>
        </div>

        {/* Row 4: Guidelines */}
        <div style={{ display: 'flex', padding: '16px 0', alignItems: 'center' }}>
          <div style={{ width: '160px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-strong-950, #0A0D14)', fontSize: '13px', fontWeight: 600 }}>
            <i className="ri-book-3-line" style={{ color: 'var(--icon-soft-400, #999999)', fontSize: '16px' }} />
            Guidelines
          </div>
          <div style={{ flex: 1, color: 'var(--text-sub-600, #5C5C5C)', fontSize: '13px', fontWeight: 400 }}>
            <a 
              href={data.guidelinesLink} 
              target="_blank" 
              rel="noreferrer"
              style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '4px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
            >
              Check Guidelines <i className="ri-arrow-right-line" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
