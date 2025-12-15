import type { Meta, StoryObj } from '@storybook/react';
import NavigationButtons from './NavigationButtons';

const meta: Meta<typeof NavigationButtons> = {
  title: 'Components/NavigationButtons',
  component: NavigationButtons,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ position: 'relative', minHeight: '300px', width: '100%' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    showBack: {
      control: 'boolean',
      description: 'Show back button',
    },
    showHome: {
      control: 'boolean',
      description: 'Show home button',
    },
    backHref: {
      control: 'text',
      description: 'Back button link',
    },
    onSpanishClick: {
      action: 'clicked',
      description: 'Spanish button click handler',
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavigationButtons>;

export const Default: Story = {
  args: {
    showBack: true,
    showHome: true,
    backHref: '/select',
  },
};

export const HomeOnly: Story = {
  args: {
    showBack: false,
    showHome: true,
  },
};

export const BackAndHome: Story = {
  args: {
    showBack: true,
    showHome: true,
    backHref: '/select',
  },
};

export const WithSpanish: Story = {
  args: {
    showBack: true,
    showHome: true,
    backHref: '/select',
    onSpanishClick: () => console.log('Spanish clicked'),
  },
};

export const BackOnly: Story = {
  args: {
    showBack: true,
    showHome: false,
    backHref: '/select',
  },
};


