import React from 'react';
import { Accordion, AccordionItem } from './Accordion';
import type { Meta, StoryObj } from '@storybook/react';
import { ICON_CONTROL } from '../../../.storybook/remixIcons';

const meta: Meta<typeof AccordionItem> = {
  title: 'Components/Accordion',
  component: AccordionItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    title: 'Insert your accordion title here',
    description: 'Insert the accordion description here. It would look better as two lines of text.',
    flipIcon: false,
    defaultOpen: false,
  },
  argTypes: {
    icon: ICON_CONTROL,
    children: {
      control: 'text',
      description: 'Any React content to show inside the expansion area'
    },
    onToggle: { action: 'toggled' },
    className: { table: { disable: true } },
  },
  render: (args) => (
    <Accordion>
      <AccordionItem {...args} />
    </Accordion>
  ),
};

export default meta;
type Story = StoryObj<typeof AccordionItem>;

/** 
 * Use this story to test all properties of a single Accordion Item.
 */
export const Playground: Story = {
  args: {
    icon: 'question-line',
  }
};

export const FlipIndicator: Story = {
  args: {
    flipIcon: false,
    icon: "question-line"
  }
};

/**
 * Demonstrates how you can put any React content (like buttons or forms) inside the accordion.
 */
export const CustomContent: Story = {
  args: {
    title: 'Advanced Settings',
    description: 'Adjust your preferences below.',
    icon: 'settings-4-line',
    children: (
      ""
    ),
    defaultOpen: true,
  }
};

/**
 * See how multiple accordions work together in a full list.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h4 style={{ marginBottom: '16px', color: 'var(--text-strong)' }}>Separated Blocks (Default)</h4>
        <Accordion>
          <AccordionItem 
            title="How do I update my account information?" 
            description="Go to account settings -> profile."
            icon="user-line" 
          />
          <AccordionItem 
            title="What payment methods are accepted?"
            description="We accept credit and debit cards, like Visa, Mastercard, and American Express, as well as digital payment options like PayPal and Apple Pay."
            icon="bank-card-line" 
            defaultOpen
          />
          <AccordionItem 
            title="How can I track my order?" 
            description="Look at the deliveries tab."
            icon="map-pin-line" 
          />
        </Accordion>
      </div>
      
      <div>
        <h4 style={{ marginBottom: '16px', color: 'var(--text-strong)' }}>Flush Layout</h4>
        <Accordion layout="flush">
          <AccordionItem title="Changelog - 2023-09-18" description="Minor bugfixes applied."/>
          <AccordionItem 
            title="Changelog - 2023-07-15"
            description="Added new customization options. Streamlined the onboarding process. Resolved compatibility issues with certain browsers."
            defaultOpen
          />
          <AccordionItem title="Changelog - 2023-06-12" description="Initial system launch."/>
        </Accordion>
      </div>
    </div>
  )
};
