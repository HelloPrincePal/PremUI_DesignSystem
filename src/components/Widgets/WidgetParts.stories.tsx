import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GaugeBar } from './GaugeBar';
import { NoteItem } from './NoteItem';
import { EmployeeSpotlightTabs } from './EmployeeSpotlightTabs';
import { DaySelection } from './DaySelection';
import { ScheduleCard } from './ScheduleCard';
import { ScheduleDetailTabs } from './ScheduleDetailTabs';
import { TimeTrackerDropdown } from './TimeTrackerDropdown';
import { Timer } from './Timer';

const meta: Meta = {
  title: 'Product Components/Widgets/Parts',
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

/** Gauge Bar [Time Off] — 0 / 25 / 50 / 75 / 100 %. */
export const GaugeBarStates: Story = {
  name: 'Gauge Bar',
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      <GaugeBar value={0} max={20} percentage={0} muted />
      <GaugeBar value={5} max={20} percentage={25} />
      <GaugeBar value={10} max={20} percentage={50} />
      <GaugeBar value={15} max={20} percentage={75} />
      <GaugeBar value={20} max={20} percentage={100} />
    </div>
  ),
};

/** Notes Content — Default and Checked states. */
export const NoteItemStates: Story = {
  name: 'Note Item',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 320 }}>
      <NoteItem
        title="Text Inputs for Design System"
        description="Search for inspiration to provide a rich collection of input styles."
        tags={[{ label: 'Today', color: 'red' }, { label: 'To-do', color: 'orange' }]}
        date="Aug 03"
      />
      <NoteItem
        title="Meeting with Arthur Taylor"
        description="Discuss the MVP version of Apex Mobile app design."
        tags={[{ label: 'Today' }, { label: 'Meeting' }]}
        date="Aug 02"
        checked
      />
    </div>
  ),
};

/** Employee Spotlight Tabs — click to switch Overview / Comments / Rewards. */
export const SpotlightTabs: Story = {
  name: 'Employee Spotlight Tabs',
  render: () => (
    <div style={{ maxWidth: 320 }}>
      <EmployeeSpotlightTabs />
    </div>
  ),
};

/** All three Spotlight tabs shown at once. */
export const SpotlightTabsAll: Story = {
  name: 'Employee Spotlight Tabs — all',
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <div style={{ width: 320 }}><EmployeeSpotlightTabs defaultTab="overview" /></div>
      <div style={{ width: 320 }}><EmployeeSpotlightTabs defaultTab="comments" /></div>
      <div style={{ width: 320 }}><EmployeeSpotlightTabs defaultTab="rewards" /></div>
    </div>
  ),
};

/** Day Selection [Schedule] — click a day to select it. */
export const DaySelectionStory: Story = {
  name: 'Day Selection',
  render: () => (
    <div style={{ maxWidth: 320 }}>
      <DaySelection />
    </div>
  ),
};

/** Schedule Cards [Schedule] — Meetings, Events and Holiday. */
export const ScheduleCards: Story = {
  name: 'Schedule Cards',
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <div style={{ width: 320 }}>
        <ScheduleCard type="meetings" title="Meeting with James Brown" meta="8:00 - 8:45 AM (UTC)" on="On Google Meet" tag={{ label: 'Marketing', color: 'orange' }} />
      </div>
      <div style={{ width: 320 }}>
        <ScheduleCard type="events" title="Tesla 4th year Celebration Party" meta="7:00 - 11:00 PM (UTC)" location="341 Windy Ridge Road, LA" by="by Sofia Williams" going="16/25" />
      </div>
      <div style={{ width: 320 }}>
        <ScheduleCard type="holiday" title="Christmas Holiday" meta="DEC 25 - DEC 27" breakBadge={{ label: '2-days break', color: 'purple' }} emoji="🎄" greeting="Happy Christmas!" holidayType="Religious Holiday" />
      </div>
    </div>
  ),
};

/** Schedule Detail Tabs [Schedule] — populated and empty, per tab. */
export const ScheduleDetailTabsStory: Story = {
  name: 'Schedule Detail Tabs',
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <div style={{ width: 320 }}><ScheduleDetailTabs defaultTab="meetings" /></div>
      <div style={{ width: 320 }}><ScheduleDetailTabs defaultTab="events" /></div>
      <div style={{ width: 320 }}><ScheduleDetailTabs defaultTab="holiday" /></div>
      <div style={{ width: 320 }}><ScheduleDetailTabs defaultTab="meetings" empty /></div>
    </div>
  ),
};

/** Time Tracker Dropdown [Time Tracker] — Default / Hover / Focus / Active. */
export const TimeTrackerDropdownStory: Story = {
  name: 'Time Tracker Dropdown',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 320 }}>
      <TimeTrackerDropdown state="default" />
      <TimeTrackerDropdown state="hover" />
      <TimeTrackerDropdown state="focus" />
      <TimeTrackerDropdown state="active" />
    </div>
  ),
};

/** Timer [Time Tracker] — Default (awaiting) and Ongoing (running). */
export const TimerStory: Story = {
  name: 'Timer',
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      <div style={{ width: 320 }}><Timer type="default" /></div>
      <div style={{ width: 320 }}><Timer type="ongoing" /></div>
    </div>
  ),
};
