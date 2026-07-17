import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StockMarketTrackerWidget } from './StockMarketTrackerWidget';
import { MyCardsWidget } from './MyCardsWidget';
import { MyCardsVerticalWidget } from './MyCardsVerticalWidget';
import { SpendingSummaryWidget } from './SpendingSummaryWidget';
import { ExchangeWidget } from './ExchangeWidget';
import { CurrencyListWidget } from './CurrencyListWidget';
import { RecentTransactionsWidget } from './RecentTransactionsWidget';
import { MySubscriptionsWidget } from './MySubscriptionsWidget';
import { QuickTransferWidget } from './QuickTransferWidget';
import { DonationProfileWidget } from './DonationProfileWidget';
import { SavedActionsWidget } from './SavedActionsWidget';
import { TotalBalanceWidget } from './TotalBalanceWidget';
import { TotalExpensesWidget } from './TotalExpensesWidget';
import { MajorExpensesWidget } from './MajorExpensesWidget';
import { CreditScoreWidget } from './CreditScoreWidget';
import { BudgetOverviewWidget } from './BudgetOverviewWidget';

const meta: Meta = {
  title: 'Product Components/Widgets/Finance & Banking',
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

const Pair = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>{children}</div>
);

/** Every Finance & Banking widget, populated. */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <StockMarketTrackerWidget />
      <MyCardsWidget />
      <SpendingSummaryWidget />
      <ExchangeWidget />
      <CurrencyListWidget />
      <SavedActionsWidget />
      <RecentTransactionsWidget />
      <MySubscriptionsWidget />
      <QuickTransferWidget />
      <DonationProfileWidget />
      <MyCardsVerticalWidget />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <TotalBalanceWidget />
        <TotalExpensesWidget />
        <MajorExpensesWidget />
        <CreditScoreWidget />
      </div>
      <BudgetOverviewWidget />
    </div>
  ),
};

/** Every Finance & Banking widget in its empty variant. */
export const EmptyStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <StockMarketTrackerWidget empty />
      <MyCardsWidget empty />
      <SpendingSummaryWidget empty />
      <ExchangeWidget empty />
      <CurrencyListWidget empty />
      <SavedActionsWidget empty />
      <RecentTransactionsWidget empty />
      <MySubscriptionsWidget empty />
      <QuickTransferWidget empty />
      <DonationProfileWidget empty />
      <MyCardsVerticalWidget empty />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <TotalBalanceWidget empty />
        <TotalExpensesWidget empty />
        <MajorExpensesWidget empty />
        <CreditScoreWidget empty />
      </div>
      <BudgetOverviewWidget empty />
    </div>
  ),
};

// ─── Per-widget (populated + empty) ─────────────────────────────────────────

export const StockMarketTracker: Story = { render: () => <Pair><StockMarketTrackerWidget /><StockMarketTrackerWidget empty /></Pair> };
export const MyCards: Story = { render: () => <Pair><MyCardsWidget /><MyCardsWidget empty /></Pair> };
export const MyCardsVertical: Story = { render: () => <Pair><MyCardsVerticalWidget /><MyCardsVerticalWidget empty /></Pair> };
export const SpendingSummary: Story = { render: () => <Pair><SpendingSummaryWidget /><SpendingSummaryWidget empty /></Pair> };
export const Exchange: Story = { render: () => <Pair><ExchangeWidget /><ExchangeWidget empty /></Pair> };
export const CurrencyList: Story = { render: () => <Pair><CurrencyListWidget /><CurrencyListWidget empty /></Pair> };
export const RecentTransactions: Story = { render: () => <Pair><RecentTransactionsWidget /><RecentTransactionsWidget empty /></Pair> };
export const MySubscriptions: Story = { render: () => <Pair><MySubscriptionsWidget /><MySubscriptionsWidget empty /></Pair> };
export const QuickTransfer: Story = { render: () => <Pair><QuickTransferWidget /><QuickTransferWidget empty /></Pair> };
export const DonationProfile: Story = { render: () => <Pair><DonationProfileWidget /><DonationProfileWidget empty /></Pair> };
export const SavedActions: Story = { render: () => <Pair><SavedActionsWidget /><SavedActionsWidget empty /></Pair> };
export const TotalBalance: Story = { render: () => <Pair><TotalBalanceWidget /><TotalBalanceWidget empty /></Pair> };
export const TotalExpenses: Story = { render: () => <Pair><TotalExpensesWidget /><TotalExpensesWidget empty /></Pair> };
export const MajorExpenses: Story = { render: () => <Pair><MajorExpensesWidget /><MajorExpensesWidget empty /></Pair> };
export const CreditScore: Story = { render: () => <Pair><CreditScoreWidget /><CreditScoreWidget empty /></Pair> };
export const BudgetOverview: Story = { render: () => <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}><BudgetOverviewWidget /><BudgetOverviewWidget empty /></div> };
