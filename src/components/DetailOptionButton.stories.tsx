import type { Meta, StoryObj } from '@storybook/react';
import DetailOptionButton from './DetailOptionButton';
import { contentData } from '../data/content';
import { Category } from '../utils/categories';

const meta: Meta<typeof DetailOptionButton> = {
  title: 'Components/DetailOptionButton',
  component: DetailOptionButton,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div
        id="options-container"
        style={{
          position: 'relative',
          width: '831px',
          minHeight: '100vh',
          margin: '0 auto',
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    option: {
      control: false,
      description: 'The content option or artifact option to display',
    },
    isExpanded: {
      control: 'boolean',
      description: 'Whether this button is currently expanded',
    },
    isHidden: {
      control: 'boolean',
      description: 'Whether this button should be hidden',
    },
    index: {
      control: { type: 'number', min: 0, max: 2 },
      description: 'The index of this button (0, 1, or 2)',
    },
    onClick: {
      action: 'clicked',
      description: 'Callback when button is clicked',
    },
    onClose: {
      action: 'closed',
      description: 'Callback when expanded content is closed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DetailOptionButton>;

const agricultureOptions = contentData[Category.Agriculture].options;

export const Collapsed: Story = {
  args: {
    option: agricultureOptions['New Opportunities'],
    isExpanded: false,
    isHidden: false,
    index: 0,
    onClick: () => {},
    onClose: () => {},
    category: Category.Agriculture,
  },
};

export const Expanded: Story = {
  args: {
    option: agricultureOptions['New Opportunities'],
    isExpanded: true,
    isHidden: false,
    index: 0,
    onClick: () => {},
    onClose: () => {},
    category: Category.Agriculture,
  },
};

export const ViewArtifact: Story = {
  args: {
    option: agricultureOptions['View Artifact'],
    isExpanded: true,
    isHidden: false,
    index: 2,
    onClick: () => {},
    onClose: () => {},
    category: Category.Agriculture,
  },
};

export const Hidden: Story = {
  args: {
    option: agricultureOptions['Challenges and Dangers'],
    isExpanded: false,
    isHidden: true,
    index: 1,
    onClick: () => {},
    onClose: () => {},
    category: Category.Agriculture,
  },
};
