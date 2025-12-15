import type { Meta, StoryObj } from '@storybook/react';
import SelectScreen from './SelectScreen';

const meta: Meta<typeof SelectScreen> = {
  title: 'Components/SelectScreen',
  component: SelectScreen,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SelectScreen>;

export const Default: Story = {};


