import React from 'react';
import { PlaceholderBrand, PlaceholderCompany } from './PlaceholderBrand';
import 'remixicon/fonts/remixicon.css';

export interface PlaceholderMetadata {
  brandName: string;
  category: string;
  location: string;
  size: string;
  email: string;
  resource: string;
}

export const PLACEHOLDER_DATA: Record<PlaceholderCompany, PlaceholderMetadata> = {
  Synergy: { 
    brandName: 'Synergy HR', 
    category: 'Human Resources and Staffing', 
    location: 'Lyon, France', 
    size: 'Medium Enterprise', 
    email: 'hello@synergy.com', 
    resource: 'LogoIpsum' 
  },
  Apex: { 
    brandName: 'Apex Financial', 
    category: 'Finance & Banking', 
    location: 'New York City, USA', 
    size: 'Large Enterprise', 
    email: 'hello@apex.com', 
    resource: 'LogoIpsum' 
  },
  Catalyst: { 
    brandName: 'Catalyst Marketing', 
    category: 'Sales & Marketing', 
    location: 'Madrid, Spain', 
    size: 'Small Enterprise', 
    email: 'hello@catalyst.com', 
    resource: 'LogoIpsum' 
  },
  Pulse: { 
    brandName: 'Pulse Medical', 
    category: 'Medical & Healthcare', 
    location: 'Madrid, Spain', 
    size: 'Small Enterprise', 
    email: 'hello@pulse.com', 
    resource: 'LogoIpsum' 
  },
  Aurora: { 
    brandName: 'Aurora Solutions', 
    category: 'Environment', 
    location: 'Vancouver, Canada', 
    size: 'Large Enterprise', 
    email: 'hello@aurora.com', 
    resource: 'LogoIpsum' 
  },
  Solaris: { 
    brandName: 'Solaris Energy', 
    category: 'Energy & Utilities', 
    location: 'California, USA', 
    size: 'Medium Enterprise', 
    email: 'hello@solaris.com', 
    resource: 'LogoIpsum' 
  },
  Horizon: { 
    brandName: 'Horizon Tutoring', 
    category: 'Education', 
    location: 'London, UK', 
    size: 'Small Enterprise', 
    email: 'hello@horizon.com', 
    resource: 'LogoIpsum' 
  },
  Orandis: { 
    brandName: 'Orandis Tech', 
    category: 'Technology', 
    location: 'Silicon Valley, USA', 
    size: 'Small Enterprise', 
    email: 'hello@orandis.com', 
    resource: 'LogoIpsum' 
  },
  Phoenix: { 
    brandName: 'Phoenix Marketplace', 
    category: 'E-commerce', 
    location: 'Los Angeles, USA', 
    size: 'Small Enterprise', 
    email: 'hello@phoenix.com', 
    resource: 'LogoIpsum' 
  },
  Empty: { 
    brandName: 'Empty', 
    category: 'Placeholder', 
    location: 'Unknown', 
    size: 'Unknown', 
    email: 'hello@empty.com', 
    resource: 'LogoIpsum' 
  }
};

export const PlaceholderBrandTile = ({ company }: { company: PlaceholderCompany }) => {
  const data = PLACEHOLDER_DATA[company];

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
        
        {/* Header containing Logo + Title/Subtitle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <PlaceholderBrand company={company} style="Original" size={48} />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '4px' }}>
            <h3 style={{ 
              fontSize: '20px', 
              fontWeight: 600, 
              color: 'var(--text-strong-950, #0A0D14)', 
              margin: 0,
              lineHeight: '24px'
            }}>
              {data.brandName}
            </h3>
            <p style={{ 
              fontSize: '14px', 
              color: 'var(--text-sub-600, #5C5C5C)', 
              margin: 0,
              lineHeight: '20px'
            }}>
              {data.category}
            </p>
          </div>
        </div>

        {/* Brand Variant Previews */}
        <div style={{ display: 'flex', gap: '12px' }}>
          
          {/* Original Preview */}
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
            <PlaceholderBrand company={company} style="Original" size={32} />
            <span style={{ fontSize: '11px', fontWeight: 500, color: 'var(--text-sub-600, #5C5C5C)' }}>Original</span>
          </div>

          {/* Black Preview */}
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            height: '110px',
            borderRadius: '12px',
            background: '#F5F5F5'
          }}>
            <PlaceholderBrand company={company} style="Black" size={32} />
            <span style={{ fontSize: '11px', fontWeight: 500, color: 'var(--text-sub-600, #5C5C5C)' }}>Black</span>
          </div>

          {/* White Preview */}
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            height: '110px',
            borderRadius: '12px',
            background: '#25282D'
          }}>
            <PlaceholderBrand company={company} style="White" size={32} />
            <span style={{ fontSize: '11px', fontWeight: 500, color: 'var(--text-white-0, #FFFFFF)' }}>White</span>
          </div>
        </div>
      </div>

      {/* Vertical Divider */}
      <div style={{ width: '1px', background: 'var(--stroke-soft-200, #E6E6E6)', height: 'auto' }} />

      {/* Right Pane - Details Table */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* Row 1: Location */}
        <div style={{ display: 'flex', padding: '16px 0', borderBottom: '1px dashed var(--stroke-soft-200, #E6E6E6)', alignItems: 'center' }}>
          <div style={{ width: '160px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-strong-950, #0A0D14)', fontSize: '13px', fontWeight: 600 }}>
            <i className="ri-map-pin-line" style={{ color: 'var(--icon-soft-400, #999999)', fontSize: '16px' }} />
            Location
          </div>
          <div style={{ flex: 1, color: 'var(--text-sub-600, #5C5C5C)', fontSize: '13px', fontWeight: 400 }}>
            {data.location}
          </div>
        </div>

        {/* Row 2: Company Size */}
        <div style={{ display: 'flex', padding: '16px 0', borderBottom: '1px dashed var(--stroke-soft-200, #E6E6E6)', alignItems: 'center' }}>
          <div style={{ width: '160px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-strong-950, #0A0D14)', fontSize: '13px', fontWeight: 600 }}>
            <i className="ri-group-line" style={{ color: 'var(--icon-soft-400, #999999)', fontSize: '16px' }} />
            Company Size
          </div>
          <div style={{ flex: 1, color: 'var(--text-sub-600, #5C5C5C)', fontSize: '13px', fontWeight: 400 }}>
            {data.size}
          </div>
        </div>

        {/* Row 3: Email Address */}
        <div style={{ display: 'flex', padding: '16px 0', borderBottom: '1px dashed var(--stroke-soft-200, #E6E6E6)', alignItems: 'center' }}>
          <div style={{ width: '160px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-strong-950, #0A0D14)', fontSize: '13px', fontWeight: 600 }}>
            <i className="ri-mail-line" style={{ color: 'var(--icon-soft-400, #999999)', fontSize: '16px' }} />
            Email Address
          </div>
          <div style={{ flex: 1, color: 'var(--text-sub-600, #5C5C5C)', fontSize: '13px', fontWeight: 400 }}>
            {data.email}
          </div>
        </div>

        {/* Row 4: Resource */}
        <div style={{ display: 'flex', padding: '16px 0', alignItems: 'center' }}>
          <div style={{ width: '160px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-strong-950, #0A0D14)', fontSize: '13px', fontWeight: 600 }}>
            <i className="ri-link" style={{ color: 'var(--icon-soft-400, #999999)', fontSize: '16px' }} />
            Resource
          </div>
          <div style={{ flex: 1, color: 'var(--text-sub-600, #5C5C5C)', fontSize: '13px', fontWeight: 400 }}>
            <a 
              href="https://logoipsum.com" 
              target="_blank" 
              rel="noreferrer"
              style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '4px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
            >
              LogoIpsum <i className="ri-arrow-right-line" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
