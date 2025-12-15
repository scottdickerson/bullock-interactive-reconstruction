import type { Meta, StoryObj } from '@storybook/react';
import Woodblocks from './Woodblocks';

const meta: Meta<typeof Woodblocks> = {
  title: 'Components/Woodblocks',
  component: Woodblocks,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '400px',
          backgroundColor: '#1a1a1a',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Woodblocks>;

export const Default: Story = {};


