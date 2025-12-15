import type { Meta, StoryObj } from '@storybook/react';
import Pullscreen from './Pullscreen';

const meta: Meta<typeof Pullscreen> = {
  title: 'Components/Pullscreen',
  component: Pullscreen,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pullscreen>;

export const Default: Story = {};


