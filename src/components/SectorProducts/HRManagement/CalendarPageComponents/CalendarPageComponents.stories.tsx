import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { UpcomingStatus } from './UpcomingStatus';
import { CalendarUpcoming } from './CalendarUpcoming';
import { CalendarCard } from './CalendarCard';
import { CalendarCell } from './CalendarCell';
import { Calendar } from './Calendar';

const meta: Meta = {
  title: 'Sector Products/HR Management/Calendar Page Components',
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

/** The full weekly calendar grid with positioned Meeting/Event cards. */
export const CalendarGrid: Story = {
  name: 'Calendar',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ padding: 24 }}>
      <Calendar />
    </div>
  ),
};

/** Upcoming Status — Later / Cancelled / Conflicted / Today. */
export const UpcomingStatuses: Story = {
  name: 'Upcoming Status',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 264 }}>
      <UpcomingStatus status="later" />
      <UpcomingStatus status="cancelled" />
      <UpcomingStatus status="conflicted" />
      <UpcomingStatus status="today" />
    </div>
  ),
};

/** Calendar Upcoming — an upcoming-event summary card. */
export const Upcoming: Story = {
  name: 'Calendar Upcoming',
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <CalendarUpcoming title="Design Review" description="10:00 - 11:00 AM" status={{ status: 'today' }} />
      <CalendarUpcoming title="Team Retro" description="Feb 20, 2:00 PM" status={{ status: 'later' }} />
    </div>
  ),
};

/** Calendar Card — Meetings (blue) and Events (orange), sizes + completed. */
export const Cards: Story = {
  name: 'Calendar Card',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 184px)', gap: 16, alignItems: 'start' }}>
      <CalendarCard type="meeting" size="half" />
      <CalendarCard type="meeting" size="half" completed />
      <CalendarCard type="event" size="half" />
      <CalendarCard type="event" size="half" completed />
      <CalendarCard type="meeting" size="regular" />
      <CalendarCard type="meeting" size="regular" completed />
      <CalendarCard type="event" size="regular" />
      <CalendarCard type="event" size="regular" completed />
      <CalendarCard type="meeting" size="large" />
      <CalendarCard type="meeting" size="large" completed />
      <CalendarCard type="event" size="large" />
      <CalendarCard type="event" size="large" completed />
    </div>
  ),
};

/** Card Positioning — empty, disabled, and card placements within a time cell. */
export const Positioning: Story = {
  name: 'Card Positioning',
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <CalendarCell empty />
      <CalendarCell disabled />
      <CalendarCell positioning="half-top"><CalendarCard type="meeting" size="half" /></CalendarCell>
      <CalendarCell positioning="half-bottom"><CalendarCard type="event" size="half" /></CalendarCell>
      <CalendarCell positioning="regular"><CalendarCard type="meeting" size="regular" /></CalendarCell>
    </div>
  ),
};
