import React from 'react';
import { MajorBrand, MajorBrandCompany } from './MajorBrand';
import 'remixicon/fonts/remixicon.css';

export interface MajorBrandMetadata {
  subtitle: string;
  fullName: string;
  description: string;
  guidelinesLink: string;
  resourceLink: string;
}

export const MAJOR_BRAND_DATA: Record<MajorBrandCompany, MajorBrandMetadata> = {
  Adobe: { subtitle: 'Software and Creative Solutions', fullName: 'Adobe Inc.', description: 'Adobe, a global software leader, empowers individuals and businesses to create, deliver, and optimize digital experiences.', guidelinesLink: 'https://brand.adobe.com', resourceLink: 'https://en.wikipedia.org/wiki/Adobe_Inc.' },
  Amazon: { subtitle: 'E-commerce and Cloud Computing', fullName: 'Amazon.com, Inc.', description: 'Amazon is a multinational technology company focusing on e-commerce, cloud computing, online advertising, and digital streaming.', guidelinesLink: 'https://brand.amazon.com', resourceLink: 'https://en.wikipedia.org/wiki/Amazon_(company)' },
  Apple: { subtitle: 'Consumer Electronics & Software', fullName: 'Apple Inc.', description: 'Apple designs, manufactures, and sells smartphones, personal computers, tablets, wearables, and accessories worldwide.', guidelinesLink: 'https://www.apple.com', resourceLink: 'https://en.wikipedia.org/wiki/Apple_Inc.' },
  Bitcoin: { subtitle: 'Decentralized Digital Currency', fullName: 'Bitcoin', description: 'Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer network.', guidelinesLink: 'https://bitcoin.org', resourceLink: 'https://en.wikipedia.org/wiki/Bitcoin' },
  Discord: { subtitle: 'Voice, Video and Text Chat', fullName: 'Discord Inc.', description: 'Discord is a voice, video and text communication service used by over a hundred million people to hang out and talk with their friends and communities.', guidelinesLink: 'https://discord.com/branding', resourceLink: 'https://en.wikipedia.org/wiki/Discord' },
  Dropbox: { subtitle: 'File Hosting Service', fullName: 'Dropbox, Inc.', description: 'Dropbox is a file hosting service that offers cloud storage, file synchronization, personal cloud, and client software.', guidelinesLink: 'https://dropbox.design', resourceLink: 'https://en.wikipedia.org/wiki/Dropbox' },
  Facebook: { subtitle: 'Social Media Network', fullName: 'Meta Platforms, Inc.', description: 'Facebook is an online social media and social networking service owned by Meta Platforms.', guidelinesLink: 'https://design.facebook.com/brand/', resourceLink: 'https://en.wikipedia.org/wiki/Facebook' },
  Figma: { subtitle: 'Collaborative Interface Design', fullName: 'Figma, Inc.', description: 'Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications.', guidelinesLink: 'https://www.figma.com/brand/', resourceLink: 'https://en.wikipedia.org/wiki/Figma' },
  Framer: { subtitle: 'Website Design and Deployment', fullName: 'Framer B.V.', description: 'Framer is a tool to design, build, and publish stunning interactive websites without knowing how to write code.', guidelinesLink: 'https://www.framer.com', resourceLink: 'https://en.wikipedia.org/wiki/Framer' },
  GitHub: { subtitle: 'Software Collaboration Platform', fullName: 'GitHub, Inc.', description: 'GitHub provides hosting for software development and version control using Git. It offers distributed version control and source code management.', guidelinesLink: 'https://github.com/logos', resourceLink: 'https://en.wikipedia.org/wiki/GitHub' },
  Google: { subtitle: 'Internet Search & Technology', fullName: 'Google LLC', description: 'Google specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, and software.', guidelinesLink: 'https://about.google/brand-resource-center/', resourceLink: 'https://en.wikipedia.org/wiki/Google' },
  Instagram: { subtitle: 'Photo and Video Sharing', fullName: 'Instagram (Meta)', description: 'Instagram is a photo and video sharing social networking service owned by Meta Platforms.', guidelinesLink: 'https://about.instagram.com/brand', resourceLink: 'https://en.wikipedia.org/wiki/Instagram' },
  LinkedIn: { subtitle: 'Professional Networking', fullName: 'LinkedIn Corporation', description: 'LinkedIn is a business and employment-oriented online service that operates via websites and mobile apps.', guidelinesLink: 'https://brand.linkedin.com', resourceLink: 'https://en.wikipedia.org/wiki/LinkedIn' },
  Microsoft: { subtitle: 'Software and Cloud Technology', fullName: 'Microsoft Corporation', description: 'Microsoft is a multinational technology corporation which produces computer software, consumer electronics, personal computers, and related services.', guidelinesLink: 'https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks', resourceLink: 'https://en.wikipedia.org/wiki/Microsoft' },
  Netflix: { subtitle: 'Streaming Media', fullName: 'Netflix, Inc.', description: 'Netflix is an entertainment services provider, offering a wide variety of award-winning TV shows, movies, anime, documentaries, and more.', guidelinesLink: 'https://brand.netflix.com', resourceLink: 'https://en.wikipedia.org/wiki/Netflix' },
  Notion: { subtitle: 'Productivity Application', fullName: 'Notion Labs, Inc.', description: 'Notion is a single space where you can think, write, and plan. Capture thoughts, manage projects, or even run an entire company.', guidelinesLink: 'https://www.notion.so/brand', resourceLink: 'https://en.wikipedia.org/wiki/Notion_(software)' },
  PayPal: { subtitle: 'Online Payment System', fullName: 'PayPal Holdings, Inc.', description: 'PayPal operates a worldwide online payments system that supports online money transfers and serves as an electronic alternative to traditional paper methods.', guidelinesLink: 'https://www.paypal.com/us/webapps/mpp/logo-center', resourceLink: 'https://en.wikipedia.org/wiki/PayPal' },
  Pinterest: { subtitle: 'Image Sharing Service', fullName: 'Pinterest, Inc.', description: 'Pinterest is an image sharing and social media service designed to enable saving and discovery of information on the internet using images.', guidelinesLink: 'https://business.pinterest.com/en/brand-guidelines/', resourceLink: 'https://en.wikipedia.org/wiki/Pinterest' },
  Slack: { subtitle: 'Business Communication', fullName: 'Slack Technologies, LLC', description: 'Slack is a messaging app for business that connects people to the information they need.', guidelinesLink: 'https://slack.com/brand', resourceLink: 'https://en.wikipedia.org/wiki/Slack_(software)' },
  Spotify: { subtitle: 'Audio Streaming Provider', fullName: 'Spotify AB', description: 'Spotify is a proprietary audio streaming and media services provider, offering digital copyright restricted recorded music and podcasts.', guidelinesLink: 'https://developer.spotify.com/documentation/general/design-and-branding/', resourceLink: 'https://en.wikipedia.org/wiki/Spotify' },
  Stripe: { subtitle: 'Payment Processing Platform', fullName: 'Stripe, Inc.', description: 'Stripe is a technology company that builds economic infrastructure for the internet, offering payment processing software and application programming interfaces.', guidelinesLink: 'https://stripe.com/newsroom/brand', resourceLink: 'https://en.wikipedia.org/wiki/Stripe_(company)' },
  Telegram: { subtitle: 'Instant Messaging', fullName: 'Telegram Messenger LLP', description: 'Telegram is a freeware, cross-platform, cloud-based instant messaging software and application service.', guidelinesLink: 'https://telegram.org/faq#q-can-i-use-telegram-logo', resourceLink: 'https://en.wikipedia.org/wiki/Telegram_(software)' },
  Twitch: { subtitle: 'Live Streaming Platform', fullName: 'Twitch Interactive, Inc.', description: 'Twitch is an interactive livestreaming service for content spanning gaming, entertainment, sports, music, and more.', guidelinesLink: 'https://brand.twitch.tv', resourceLink: 'https://en.wikipedia.org/wiki/Twitch_(service)' },
  Webflow: { subtitle: 'Website Building and Hosting', fullName: 'Webflow, Inc.', description: 'Webflow is a cloud-based software as a service (SaaS) that allows people to build professional, custom websites in a completely visual canvas.', guidelinesLink: 'https://webflow.com/brand-guidelines', resourceLink: 'https://en.wikipedia.org/wiki/Webflow' },
  WhatsApp: { subtitle: 'Messaging and VoIP', fullName: 'WhatsApp LLC', description: 'WhatsApp is an internationally available freeware, cross-platform centralized messaging and voice-over-IP service owned by Meta.', guidelinesLink: 'https://whatsappbrand.com', resourceLink: 'https://en.wikipedia.org/wiki/WhatsApp' },
  Wise: { subtitle: 'Global Money Transfer', fullName: 'Wise plc', description: 'Wise (formerly TransferWise) is a British-based foreign exchange financial technology company.', guidelinesLink: 'https://wise.com/brand-assets', resourceLink: 'https://en.wikipedia.org/wiki/Wise_(company)' },
  X: { subtitle: 'Social Media Platform', fullName: 'X Corp.', description: 'X (formerly Twitter) is a social media network where users can post, interact with public messages, and stay informed on global conversations.', guidelinesLink: 'https://about.x.com/en/who-we-are/brand-toolkit', resourceLink: 'https://en.wikipedia.org/wiki/X_(social_network)' },
  YouTube: { subtitle: 'Video Sharing Platform', fullName: 'YouTube, LLC', description: 'YouTube is a global online video sharing and social media platform that allows users to upload, view, rate, share, and comment on videos.', guidelinesLink: 'https://brand.youtube.com/', resourceLink: 'https://en.wikipedia.org/wiki/YouTube' }
};

export const MajorBrandTile = ({ company }: { company: MajorBrandCompany }) => {
  const data = MAJOR_BRAND_DATA[company] || MAJOR_BRAND_DATA['Adobe']; // fallback

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
          <MajorBrand company={company} style="original" size={48} />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '4px' }}>
            <h3 style={{ 
              fontSize: '20px', 
              fontWeight: 600, 
              color: 'var(--text-strong-950, #0A0D14)', 
              margin: 0,
              lineHeight: '24px'
            }}>
              {company}
            </h3>
            <p style={{ 
              fontSize: '14px', 
              color: 'var(--text-sub-600, #5C5C5C)', 
              margin: 0,
              lineHeight: '20px'
            }}>
              {data.subtitle}
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
            <MajorBrand company={company} style="original" size={32} />
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
            background: '#F5F5F5' // Slightly lighter gray than image to pop dark logo
          }}>
            <MajorBrand company={company} style="black" size={32} />
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
            background: '#25282D' // Dark background for white logo
          }}>
            <MajorBrand company={company} style="white" size={32} />
            <span style={{ fontSize: '11px', fontWeight: 500, color: 'var(--text-white-0, #FFFFFF)' }}>White</span>
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
            {data.fullName}
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

        {/* Row 3: Guidelines */}
        <div style={{ display: 'flex', padding: '16px 0', borderBottom: '1px dashed var(--stroke-soft-200, #E6E6E6)', alignItems: 'center' }}>
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

        {/* Row 4: Resource */}
        <div style={{ display: 'flex', padding: '16px 0', alignItems: 'center' }}>
          <div style={{ width: '160px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-strong-950, #0A0D14)', fontSize: '13px', fontWeight: 600 }}>
            <i className="ri-link" style={{ color: 'var(--icon-soft-400, #999999)', fontSize: '16px' }} />
            Resource
          </div>
          <div style={{ flex: 1, color: 'var(--text-sub-600, #5C5C5C)', fontSize: '13px', fontWeight: 400 }}>
            <a 
              href={data.resourceLink} 
              target="_blank" 
              rel="noreferrer"
              style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '4px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
            >
              Wikipedia <i className="ri-arrow-right-line" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

