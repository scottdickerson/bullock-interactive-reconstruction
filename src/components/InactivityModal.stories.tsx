import type { Meta, StoryObj } from '@storybook/react';
import InactivityModal from './InactivityModal';

const meta: Meta<typeof InactivityModal> = {
  title: 'Components/InactivityModal',
  component: InactivityModal,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    inactivityTimeout: {
      control: { type: 'number', min: 1000, max: 300000, step: 1000 },
      description:
        'Time in milliseconds before showing the modal after user inactivity',
    },
    autoCloseTimeout: {
      control: { type: 'number', min: 1000, max: 300000, step: 1000 },
      description:
        'Time in milliseconds before auto-navigating to home if no response',
    },
    homePath: {
      control: 'text',
      description: 'The path to navigate to when the user clicks "Home"',
    },
  },
};

export default meta;
type Story = StoryObj<typeof InactivityModal>;

export const Default: Story = {
  args: {
    inactivityTimeout: 60000, // 60 seconds for demo
    autoCloseTimeout: 60000, // 60 seconds for demo
    homePath: window.location.href,
  },
};

export const QuickTimeout: Story = {
  tags: ['!autodocs'], // Hide this story from AutoDocs
  args: {
    inactivityTimeout: 2000, // 2 seconds for demo
    autoCloseTimeout: 15000, // 15 second for demo
    homePath: window.location.href,
  },
};
