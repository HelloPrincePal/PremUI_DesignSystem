import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { ModalHeader } from './ModalHeader';
import { ModalFooter } from './ModalFooter';
import { Button } from '../Button/Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    open: { table: { disable: true } },
    onClose: { table: { disable: true } },
    children: { table: { disable: true } },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

/**
 * A fully functional modal — click the button to open, then close via the X, the
 * Cancel/Continue buttons, clicking the overlay, or pressing Escape.
 */
export const Playground: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalHeader
            type="left-icon"
            title="Insert Modal Title Here"
            description="Please insert modal description here."
            onDismiss={() => setOpen(false)}
          />
          <div style={{ padding: 20, fontSize: 14, color: 'var(--color-text-sub)' }}>
            Modal body content goes here — any children you like.
          </div>
          <ModalFooter type="basic" onCancel={() => setOpen(false)} onContinue={() => setOpen(false)} />
        </Modal>
      </>
    );
  },
};
