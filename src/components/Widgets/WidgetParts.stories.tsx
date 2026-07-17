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
import { TransactionItem, TxnBrand } from './TransactionItem';
import { TransactionDetailTabs } from './TransactionDetailTabs';
import { CardChip } from './CardChip';
import type { CardChipColor } from './CardChip';
import { CreditCard } from './CreditCard';
import { CardDetailsTab } from './CardDetailsTab';
import { DonationDetailsTab } from './DonationDetailsTab';
import { PromotionalCard } from './PromotionalCard';
import { SavedActionItem } from './SavedActionItem';
import { ContactChip } from './ContactChip';
import { StackedBarChart } from './StackedBarChart';
import { PaymentIcon } from '../PaymentIcon/PaymentIcon';
import { KeyIcon } from '../KeyIcon/KeyIcon';
import { Avatar } from '../Avatars/Avatar';

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

/** Transaction Items [Recent Transactions] — the 4 leading types. */
export const TransactionItems: Story = {
  name: 'Transaction Item',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, maxWidth: 340 }}>
      <TransactionItem leading={<PaymentIcon type="electricity" />} title="Electricity Bill" description="3 days later" amount="-$86.00" date="Sep 21" />
      <TransactionItem leading={<Avatar persona="James Brown" type="Illustration" size={40} />} title="James Brown" description="Sent you money" amount="$120.00" date="Sep 18" />
      <TransactionItem leading={<TxnBrand name="Spotify" />} title="Spotify Premium" description="Monthly subscription" amount="-$9.99" date="Sep 15" />
      <TransactionItem leading={<KeyIcon icon="tools-line" color="gray" style="stroke" size="md" />} title="Car Repairing" description="RepairMyCar Co." amount="-$640.00" date="Sep 08" />
    </div>
  ),
};

/** Transaction Detail Tabs — Incoming / Outgoing / Pending. */
export const TransactionTabs: Story = {
  name: 'Transaction Detail Tabs',
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <div style={{ width: 320 }}><TransactionDetailTabs defaultTab="incoming" /></div>
      <div style={{ width: 320 }}><TransactionDetailTabs defaultTab="outgoing" /></div>
      <div style={{ width: 320 }}><TransactionDetailTabs defaultTab="pending" /></div>
    </div>
  ),
};

const CHIP_COLORS: CardChipColor[] = ['white', 'gray', 'purple', 'red', 'orange', 'yellow', 'blue', 'teal', 'pink', 'green'];

/** Chips [My Cards] — the EMV chip in 10 colors. */
export const Chips: Story = {
  name: 'Card Chip',
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      {CHIP_COLORS.map((c) => <CardChip key={c} color={c} width={48} />)}
    </div>
  ),
};

/** Credit Cards [My Cards] — Virtual and Physical. */
export const CreditCards: Story = {
  name: 'Credit Card',
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      <div style={{ width: 320 }}><CreditCard variant="virtual" /></div>
      <div style={{ width: 320 }}><CreditCard variant="physical" /></div>
    </div>
  ),
};

/** Card Details Tab [My Cards] — Virtual and Physical. */
export const CardDetails: Story = {
  name: 'Card Details Tab',
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <div style={{ width: 320 }}><CardDetailsTab variant="virtual" /></div>
      <div style={{ width: 320 }}><CardDetailsTab variant="physical" /></div>
    </div>
  ),
};

/** Donation Details Tab — Overview / Goal / Statistic. */
export const DonationDetails: Story = {
  name: 'Donation Details Tab',
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <div style={{ width: 320 }}><DonationDetailsTab defaultTab="overview" /></div>
      <div style={{ width: 320 }}><DonationDetailsTab defaultTab="goal" /></div>
      <div style={{ width: 320 }}><DonationDetailsTab defaultTab="statistic" /></div>
    </div>
  ),
};

const PROMO_BRANDS = ['Apple Music', 'Spotify', 'Grove Shark', 'Youtube Music', 'Netflix', 'Microsoft Office', 'Creative Cloud', 'Twitch', 'Mailchimp'];

/** Promotional Cards [My Subscriptions] — all 9 brand variants. */
export const PromotionalCards: Story = {
  name: 'Promotional Card',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 320px)', gap: 16 }}>
      {PROMO_BRANDS.map((b) => <PromotionalCard key={b} brand={b} />)}
    </div>
  ),
};

/** Saved Actions Items [Saved Actions]. */
export const SavedActionItems: Story = {
  name: 'Saved Action Item',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, maxWidth: 340 }}>
      <SavedActionItem leading={<KeyIcon icon="home-5-fill" color="green" style="lighter" size="md" />} title="Rent Payment" subtitle="Monthly rent payment." amount="$940.00" />
      <SavedActionItem leading={<Avatar persona="James Brown" type="Illustration" size={40} />} title="Send to James" subtitle="Personal transfer." amount="$120.00" />
    </div>
  ),
};

/** My Contacts [Quick Transfer] — Default / Selected. */
export const ContactChips: Story = {
  name: 'Contact Chip',
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <ContactChip name="Natalia" avatar={<Avatar persona="Natalia Nowak" type="Solid BG" size={24} />} />
      <ContactChip name="James" avatar={<Avatar persona="James Brown" type="Illustration" size={24} />} selected />
    </div>
  ),
};

/** Stacked Bar Chart [Budget Overview] — 12 / 7 / 6 / 4-bar variants. */
export const StackedBarCharts: Story = {
  name: 'Stacked Bar Chart',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 700 }}>
      <StackedBarChart bars={12} />
      <StackedBarChart bars={7} />
      <StackedBarChart bars={6} />
      <StackedBarChart bars={4} />
    </div>
  ),
};
