import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ActivityFeed } from './ActivityFeed';
import { ActivityFeedItem } from './ActivityFeedItem';
import { ActivityFeedFileItem } from './ActivityFeedFileItem';
import { ActivityFeedCommentItem } from './ActivityFeedCommentItem';
import { ActivityFeedTaskItem } from './ActivityFeedTaskItem';
import { ActivityFeedFilter } from './ActivityFeedFilter';
import { Avatar, PERSONA_COLORS } from '../Avatars/Avatar';
import { AvatarGroup } from '../Avatars/AvatarGroup';

const meta: Meta = {
  title: 'Components/ActivityFeed',
  component: ActivityFeedItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Activity Feed Category
    type: {
      control: 'select',
      options: ['Default', 'File', 'Comment', 'AvatarGroup', 'Task', 'Filter'],
      table: { category: 'Activity Feed' },
    },
    showAvatar: { control: 'boolean', table: { category: 'Activity Feed' } },
    showButton: { control: 'boolean', table: { category: 'Activity Feed' } },
    showTimestamp: { control: 'boolean', table: { category: 'Activity Feed', name: 'Show Last Text' } },
    actor: { control: 'text', name: 'Text Left', table: { category: 'Activity Feed' } },
    action: { control: 'text', name: 'Text Center', table: { category: 'Activity Feed' } },
    subject: { control: 'text', name: 'Text Right', table: { category: 'Activity Feed' } },
    timestamp: { control: 'text', table: { category: 'Activity Feed' } },

    // Avatar Category
    persona: {
      control: 'select',
      options: Object.keys(PERSONA_COLORS),
      table: { category: 'Avatar' },
      if: { arg: 'showAvatar', eq: true }
    },
    avatarSize: {
      control: 'select',
      options: [16, 20, 24, 32, 40, 48, 56, 64],
      table: { category: 'Avatar', name: 'Size' },
      if: { arg: 'showAvatar', eq: true }
    },
    avatarType: {
      control: 'select',
      options: ['Image', 'Icon', 'Illustration', 'Text', 'Persona', 'Memoji'],
      table: { category: 'Avatar', name: 'Type' },
      if: { arg: 'showAvatar', eq: true }
    },
    showImage: { control: 'boolean', table: { category: 'Avatar', name: 'Image' }, if: { arg: 'showAvatar', eq: true } },
    solidBg: { control: 'boolean', table: { category: 'Avatar', name: 'Solid BG' }, if: { arg: 'showAvatar', eq: true } },
    showMemoji: { control: 'boolean', table: { category: 'Avatar', name: 'Memoji' }, if: { arg: 'showAvatar', eq: true } },
    showIllustration: { control: 'boolean', table: { category: 'Avatar', name: 'Illustration' }, if: { arg: 'showAvatar', eq: true } },
    showText: { control: 'boolean', table: { category: 'Avatar', name: 'Text' }, if: { arg: 'showAvatar', eq: true } },
    showIcon: { control: 'boolean', table: { category: 'Avatar', name: 'Icon' }, if: { arg: 'showAvatar', eq: true } },
    topStatus: { control: 'boolean', table: { category: 'Avatar' }, if: { arg: 'showAvatar', eq: true } },
    bottomStatus: { control: 'boolean', table: { category: 'Avatar' }, if: { arg: 'showAvatar', eq: true } },

    // Filter Category
    filterState: {
      control: 'select',
      options: ['default', 'active', 'inactive'],
      table: { category: 'Filter Controls', name: 'State' },
      if: { arg: 'type', eq: 'Filter' }
    },
    filterText: {
      control: 'text',
      table: { category: 'Filter Controls', name: 'Edit Text' },
      if: { arg: 'type', eq: 'Filter' }
    },

    // File Category
    fileState: {
      control: 'select',
      options: ['default', 'hover'],
      table: { category: 'File Controls', name: 'State' },
      if: { arg: 'type', eq: 'File' }
    },
    fileName: {
      control: 'text',
      table: { category: 'File Controls', name: 'Edit Text' },
      if: { arg: 'type', eq: 'File' }
    },
    fileSize: {
      control: 'text',
      table: { category: 'File Controls', name: 'Edit Sublabel' },
      if: { arg: 'type', eq: 'File' }
    },
    doubleFile: {
      control: 'boolean',
      table: { category: 'File Controls' },
      if: { arg: 'type', eq: 'File' }
    },

    // Comment Category
    commentState: {
      control: 'select',
      options: ['default', 'hover'],
      table: { category: 'Comment Controls', name: 'State' },
      if: { arg: 'type', eq: 'Comment' }
    },
    commentText: {
      control: 'text',
      table: { category: 'Comment Controls', name: 'Edit Text' },
      if: { arg: 'type', eq: 'Comment' }
    },
    replyText: {
      control: 'text',
      table: { category: 'Comment Controls', name: 'Reply Text' },
      if: { arg: 'type', eq: 'Comment' }
    },

    // Task Category
    taskStatus: {
      control: 'select',
      options: ['success', 'warning', 'away', 'error'],
      table: { category: 'Task Controls', name: 'State' },
      if: { arg: 'type', eq: 'Task' }
    },
    taskLabel: {
      control: 'text',
      table: { category: 'Task Controls', name: 'Edit Text' },
      if: { arg: 'type', eq: 'Task' }
    },

    // Avatar Group Category
    groupSize: {
      control: { type: 'select' },
      options: [16, 20, 24, 32, 40],
      table: { category: 'Avatar Group' },
      if: { arg: 'type', eq: 'AvatarGroup' }
    },
    groupExtraCount: {
      control: 'number',
      table: { category: 'Avatar Group', name: 'Extra Count' },
      if: { arg: 'type', eq: 'AvatarGroup' }
    },
    groupSpacing: {
      control: 'number',
      table: { category: 'Avatar Group', name: 'Spacing' },
      if: { arg: 'type', eq: 'AvatarGroup' }
    },
  },
};

export default meta;

export const Playground: StoryObj = {
  name: 'Default',
  args: {
    type: 'File',
    showAvatar: true,
    showButton: true,
    showTimestamp: true,
    actor: 'Wei Chen',
    action: 'uploaded',
    subject: 'Q2 financial report',
    timestamp: '4 min ago',
    persona: 'Wei Chen',
    avatarSize: 32,
    avatarType: 'Memoji',
    showImage: false,
    solidBg: false,
    showMemoji: true,
    showIllustration: false,
    showText: false,
    showIcon: false,
    topStatus: false,
    bottomStatus: false,
    // Filter
    filterState: 'active',
    filterText: 'Selected',
    // File
    fileState: 'default',
    fileName: 'apex-report.pdf',
    fileSize: '4mb',
    doubleFile: true,
    // Comment
    commentState: 'default',
    commentText: 'How are you qualifying enterprise leads?',
    replyText: 'Reply',
    // Task
    taskStatus: 'success',
    taskLabel: '12 tasks completed',
    // Avatar Group
    groupSize: 24,
    groupExtraCount: 4,
    groupSpacing: -6,
  },
  render: (args: any) => {
    // 1. Prepare Avatar props
    const avatarType = args.showImage ? 'Image' :
      args.showMemoji ? 'Memoji' :
        args.showIllustration ? 'Illustration' :
          args.showText ? 'Text' :
            args.showIcon ? 'Icon' : 'Persona';

    const avatarProps = {
      size: args.avatarSize,
      type: avatarType as any,
      solid: args.solidBg,
      topStatus: args.topStatus,
      bottomStatus: args.bottomStatus,
    };

    // 2. Prepare Children based on type
    let children = null;
    if (args.type === 'File') {
      children = (
        <>
          <ActivityFeedFileItem name={args.fileName} size={args.fileSize} />
          {args.doubleFile && <ActivityFeedFileItem name={args.fileName} size={args.fileSize} />}
        </>
      );
    } else if (args.type === 'Comment') {
      children = <ActivityFeedCommentItem text={args.commentText} state={args.commentState} onReply={() => { }} />;
    } else if (args.type === 'AvatarGroup') {
      children = (
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 'var(--spacing-6, 6px)',
          padding: '2px 8px 2px 2px',
          background: 'var(--color-bg-white)',
          boxShadow: 'var(--shadow-regular-x-small)',
          borderRadius: 'var(--radius-full, 999px)',
          outline: '1px solid var(--color-stroke-soft)',
        }}>
          <AvatarGroup
            size={args.groupSize}
            members={[
              { persona: 'James Brown', type: 'Persona' },
              { persona: 'Wei Chen', type: 'Persona' },
              { persona: 'Sophia Williams', type: 'Persona' },
            ]}
            extraCount={args.groupExtraCount}
            spacing={args.groupSpacing}
          />
        </div>
      );
    } else if (args.type === 'Task') {
      children = <ActivityFeedTaskItem label={args.taskLabel} status={args.taskStatus} />;
    } else if (args.type === 'Filter') {
      children = <ActivityFeedFilter label={args.filterText} state={args.filterState} />;
    }

    return (
      <div style={{ width: 640 }}>
        <ActivityFeedItem
          {...args}
          avatarProps={avatarProps}
        >
          {children}
        </ActivityFeedItem>
      </div>
    );
  },
};

export const Variants: StoryObj = {
  name: 'Variants',
  render: () => (
    <ActivityFeed style={{ width: 720, padding: 40 }}>
      <ActivityFeedItem
        persona="James Brown"
        actor="James Brown"
        action="viewed"
        subject="Project Roadmap"
        timestamp="Just now"
      />
      <ActivityFeedItem
        persona="Wei Chen"
        actor="Wei Chen"
        action="uploaded"
        subject="Q2 financial report"
        timestamp="4 min ago"
      >
        <ActivityFeedFileItem name="apex-report.pdf" size="4mb" />
        <ActivityFeedFileItem name="budget-2024.xlsx" size="2mb" />
      </ActivityFeedItem>
      <ActivityFeedItem
        persona="Wei Chen"
        actor="Wei Chen"
        action="commented on"
        subject="Q2 financial report"
        timestamp="4 min ago"
      >
        <ActivityFeedCommentItem text="How are you qualifying enterprise leads?" />
      </ActivityFeedItem>
      <ActivityFeedItem
        persona="Sophia Williams"
        actor="Sophia Williams"
        action="shared with"
        subject="the core team"
        timestamp="1 hour ago"
      >
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 'var(--spacing-6, 6px)',
          padding: '2px 8px 2px 2px',
          background: 'var(--color-bg-white)',
          boxShadow: 'var(--shadow-regular-x-small)',
          borderRadius: 'var(--radius-full, 999px)',
          outline: '1px solid var(--color-stroke-soft)',
        }}>
          <AvatarGroup
            size={24}
            members={[
              { persona: 'James Brown', type: 'Persona' },
              { persona: 'Wei Chen', type: 'Persona' },
              { persona: 'Sophia Williams', type: 'Persona' },
            ]}
            extraCount={4}
            spacing={-6}
          />
        </div>
      </ActivityFeedItem>
      <ActivityFeedItem
        persona="Arthur Taylor"
        actor="Arthur Taylor"
        action="updated"
        subject="sprint tasks"
        timestamp="2 hours ago"
      >
        <ActivityFeedTaskItem label="12 tasks completed" status="success" />
        <ActivityFeedTaskItem label="3 tasks pending" status="warning" />
      </ActivityFeedItem>
    </ActivityFeed>
  ),
};

export const ItemDefault: StoryObj = {
  name: 'Item / Default',
  render: () => (
    <ActivityFeedItem
      persona="Wei Chen"
      actor="Wei Chen"
      action="uploaded"
      subject="Q2 financial report"
      timestamp="4 min ago"
    />
  ),
};

export const ItemFile: StoryObj = {
  name: 'Item / File',
  render: () => <ActivityFeedFileItem name="apex-report.pdf" size="4mb" />,
};

export const ItemComment: StoryObj = {
  name: 'Item / Comment',
  render: () => <ActivityFeedCommentItem text="How are you qualifying enterprise leads?" />,
};

export const ItemTask: StoryObj = {
  name: 'Item / Task',
  render: () => <ActivityFeedTaskItem label="12 tasks completed" status="success" />,
};

export const ItemFilter: StoryObj = {
  name: 'Item / Filter',
  render: () => <ActivityFeedFilter label="All Activity" state="active" />,
};
