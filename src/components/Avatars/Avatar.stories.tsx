/// <reference types="vite/client" />
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarType, TopStatusType, BottomStatusType } from './Avatar';

const personas = [
  'James Brown',
  'Wei Chen',
  'Sophia Williams',
  'Juma Omondi',
  'Arthur Taylor',
  'Lena Müller',
  'Emma Wright',
  'Natalia Nowak',
  'Matthew Johnson',
  'Ravi Patel',
  'Laura Perez',
  'Nuray Aksoy'
];

const types: AvatarType[] = ['Image', 'Solid BG', 'Memoji', 'Illustration', 'Text', 'Icon'];
const topStatuses: TopStatusType[] = ['Verified', 'Remove', 'Add', 'Favorite', 'Pin', 'Notification'];
const bottomStatuses: BottomStatusType[] = ['Online', 'Offline', 'Busy', 'Away', 'Company'];

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatars',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  args: {
    persona: 'Wei Chen',
    size: 64,
    type: 'Image',
    topStatus: 'Verified',
    bottomStatus: 'Online',
  },
  argTypes: {
    persona: {
      control: 'select',
      options: personas,
    },
    type: {
      control: 'select',
      options: types,
    },
    size: {
      control: { type: 'select' },
      options: [16, 20, 24, 32, 40, 48, 56, 64, 80, 128, 160],
    },
    topStatus: {
      control: 'select',
      options: [undefined, ...topStatuses],
    },
    bottomStatus: {
      control: 'select',
      options: [undefined, ...bottomStatuses],
    },
    company: {
      control: 'select',
      options: ['Apex', 'Aurora', 'Catalyst', 'Empty', 'Horizon', 'Orandis', 'Phoenix', 'Pulse', 'Solaris', 'Synergy'],
      if: { arg: 'bottomStatus', eq: 'Company' },
    },
    companyStyle: {
      control: 'select',
      options: ['Original', 'Black', 'White'],
      if: { arg: 'bottomStatus', eq: 'Company' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};

export const GridView: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', 
      gap: '24px', 
      padding: '40px',
      background: '#F9F9FB',
      minHeight: '100vh',
      alignContent: 'start'
    }}>
      {personas.map((persona) => (
        <div key={persona} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          padding: '24px',
          background: 'white',
          borderRadius: '16px',
          border: '1px solid #E6E6E6',
          boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
          height: 'fit-content'
        }}>
          <Avatar persona={persona} size={64} type="Image" topStatus="Verified" bottomStatus="Online" />
          <span style={{ fontSize: '12px', fontWeight: 600, textAlign: 'center' }}>{persona}</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
  },
};

export const AvatarStyles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '40px', background: '#F9F9FB' }}>
      {personas.map(persona => (
        <div key={persona} style={{ display: 'flex', gap: '20px', alignItems: 'center', padding: '16px', background: 'white', borderRadius: '12px', border: '1px solid #EEE' }}>
          <h4 style={{ width: '120px', margin: 0, fontSize: '14px' }}>{persona}</h4>
          <div style={{ display: 'flex', gap: '24px' }}>
            {types.map(type => (
              <div key={type} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Avatar persona={persona} size={48} type={type} />
                <span style={{ fontSize: '10px', color: '#666' }}>{type}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
};

export const TopStatusGrid: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', 
      gap: '24px', 
      padding: '40px' 
    }}>
      {topStatuses.map(status => (
        <div key={status} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <Avatar persona="Wei Chen" size={64} topStatus={status} />
          <span style={{ fontSize: '11px', fontWeight: 500 }}>{status}</span>
        </div>
      ))}
    </div>
  )
};

export const BottomStatusGrid: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', 
      gap: '24px', 
      padding: '40px' 
    }}>
      {bottomStatuses.map(status => (
        <div key={status} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <Avatar persona="Wei Chen" size={64} bottomStatus={status} />
          <span style={{ fontSize: '11px', fontWeight: 500 }}>{status}</span>
        </div>
      ))}
    </div>
  )
};

export const CompanyStatusGrid: Story = {
  render: () => {
    return (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', 
        gap: '24px', 
        padding: '40px' 
      }}>
        {['Synergy', 'Apex', 'Aurora', 'Catalyst', 'Orandis', 'Phoenix'].map(company => (
          <div key={company} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <Avatar persona="Wei Chen" size={64} bottomStatus="Company" company={company as any} />
            <span style={{ fontSize: '11px', fontWeight: 500 }}>{company}</span>
          </div>
        ))}
      </div>
    );
  }
};

export const DocumentationTile: Story = {
  render: () => (
    <div style={{ padding: '60px', background: '#F9F9FB' }}>
      <div style={{
        display: 'flex',
        alignItems: 'stretch',
        gap: '40px',
        padding: '40px',
        background: 'white',
        borderRadius: '24px',
        border: '1px solid #E6E6E6',
        maxWidth: '900px',
        margin: '0 auto',
        fontFamily: 'Inter, sans-serif'
      }}>
        {/* Visual Aspect */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '320px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
             <Avatar persona="Wei Chen" size={80} type="Image" topStatus="Verified" bottomStatus="Online" />
             <div>
               <h3 style={{ margin: 0, fontSize: '20px' }}>Wei Chen</h3>
               <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Visual Preview</p>
             </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            {['Image', 'Solid BG', 'Memoji'].map(type => (
              <div key={type} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '12px', background: '#F9F9FB', borderRadius: '12px' }}>
                <Avatar persona="Wei Chen" size={40} type={type as AvatarType} />
                <span style={{ fontSize: '10px' }}>{type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: '1px', background: '#EEE' }} />

        {/* Info Aspect */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Description</h4>
            <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.6', color: '#333' }}>
              Avatars are used to represent users, entities, or personas. They support multiple visual styles including photography, solid backgrounds, memojis, and icons. Interactive statuses can be applied to both top and bottom positions.
            </p>
          </div>
          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Properties</h4>
            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', color: '#555', lineHeight: '1.8' }}>
              <li>Multiple sizes from 16px to 160px</li>
              <li>6 distinct background types</li>
              <li>Top status indicators (Verified, Pin, etc.)</li>
              <li>Bottom status indicators (Online, Busy, etc.)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};
