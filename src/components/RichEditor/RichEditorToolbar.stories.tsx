import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RichEditorToolbar } from './RichEditorToolbar';
import { RichEditorItem } from './RichEditorItem';
import { RichEditorDivider } from './RichEditorDivider';

const meta: Meta<typeof RichEditorToolbar> = {
  title: 'Components/RichEditor/RichEditorToolbar',
  component: RichEditorToolbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    children: { table: { disable: true } },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof RichEditorToolbar>;

/**
 * A fully functional toolbar — Bold/Italic/Underline/Strikethrough genuinely toggle,
 * mirroring the Figma "01" full variant.
 */
export const Playground: Story = {
  render: () => {
    const [marks, setMarks] = useState<Record<string, boolean>>({});
    const toggle = (key: string) => setMarks((prev) => ({ ...prev, [key]: !prev[key] }));
    return (
      <RichEditorToolbar>
        <RichEditorItem type="text" label="Header" />
        <RichEditorItem type="text" label="14px" />
        <RichEditorDivider />
        <RichEditorItem type="icon" icon="bold" active={!!marks.bold} onClick={() => toggle('bold')} ariaLabel="Bold" />
        <RichEditorItem type="icon" icon="italic" active={!!marks.italic} onClick={() => toggle('italic')} ariaLabel="Italic" />
        <RichEditorItem type="icon" icon="underline" active={!!marks.underline} onClick={() => toggle('underline')} ariaLabel="Underline" />
        <RichEditorItem type="icon" icon="strikethrough" active={!!marks.strike} onClick={() => toggle('strike')} ariaLabel="Strikethrough" />
        <RichEditorDivider />
        <RichEditorItem type="dropdown" icon="align-left" ariaLabel="Alignment" />
        <RichEditorDivider />
        <RichEditorItem type="icon" icon="chat-1-line" ariaLabel="Comment" />
        <RichEditorItem type="icon" icon="link" ariaLabel="Link" />
        <RichEditorItem type="icon" icon="at-line" ariaLabel="Mention" />
        <RichEditorDivider />
        <RichEditorItem type="icon" icon="more-2-line" ariaLabel="More" />
      </RichEditorToolbar>
    );
  },
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Composed variants matching the Figma "01" (full), "02" (Header+size only),
 * "03" (formatting-only), and "04" (comment/link/mention-only) toolbars —
 * assembled by composing RichEditorItem/RichEditorDivider freely, not fixed presets.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <RichEditorToolbar>
        <RichEditorItem type="text" label="Header" />
        <RichEditorItem type="text" label="14px" />
        <RichEditorDivider />
        <RichEditorItem type="icon" icon="bold" />
        <RichEditorItem type="icon" icon="italic" />
        <RichEditorItem type="icon" icon="underline" />
        <RichEditorItem type="icon" icon="strikethrough" />
        <RichEditorDivider />
        <RichEditorItem type="dropdown" icon="align-left" />
        <RichEditorDivider />
        <RichEditorItem type="icon" icon="chat-1-line" />
        <RichEditorItem type="icon" icon="link" />
        <RichEditorItem type="icon" icon="at-line" />
        <RichEditorDivider />
        <RichEditorItem type="icon" icon="more-2-line" />
      </RichEditorToolbar>

      <RichEditorToolbar>
        <RichEditorItem type="text" label="Header" />
        <RichEditorDivider />
        <RichEditorItem type="text" label="14px" />
        <RichEditorDivider />
        <RichEditorItem type="icon" icon="more-2-line" />
      </RichEditorToolbar>

      <RichEditorToolbar>
        <RichEditorItem type="icon" icon="bold" />
        <RichEditorItem type="icon" icon="italic" />
        <RichEditorItem type="icon" icon="underline" />
        <RichEditorItem type="icon" icon="strikethrough" />
        <RichEditorDivider />
        <RichEditorItem type="dropdown" icon="align-left" />
        <RichEditorDivider />
        <RichEditorItem type="icon" icon="more-2-line" />
      </RichEditorToolbar>

      <RichEditorToolbar>
        <RichEditorItem type="icon" icon="chat-1-line" />
        <RichEditorItem type="icon" icon="link" />
        <RichEditorItem type="icon" icon="at-line" />
        <RichEditorDivider />
        <RichEditorItem type="icon" icon="more-2-line" />
      </RichEditorToolbar>
    </div>
  ),
};
