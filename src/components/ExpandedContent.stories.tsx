import type { Meta, StoryObj } from '@storybook/react';
import ExpandedContent from './ExpandedContent';
import { contentData } from '../data/content';
import { Category } from '../utils/categories';

const meta: Meta<typeof ExpandedContent> = {
  title: 'Components/ExpandedContent',
  component: ExpandedContent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div
        style={{
          position: 'relative',
          width: '831px',
          height: '100vh',
          margin: '0 auto',
          backgroundColor: '#632549',
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
      description: 'Whether the content is currently expanded',
    },
    onClose: {
      action: 'closed',
      description: 'Callback when the close button is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ExpandedContent>;

const agricultureOptions = contentData[Category.Agriculture].options;

export const Expanded: Story = {
  args: {
    option: agricultureOptions['New Opportunities'],
    isExpanded: true,
    onClose: () => {},
  },
};

export const Collapsed: Story = {
  args: {
    option: agricultureOptions['New Opportunities'],
    isExpanded: false,
    onClose: () => {},
  },
};

export const ViewArtifact: Story = {
  args: {
    option: agricultureOptions['View Artifact'],
    isExpanded: true,
    onClose: () => {},
  },
};

export const ChallengesAndDangers: Story = {
  args: {
    option: agricultureOptions['Challenges and Dangers'],
    isExpanded: true,
    onClose: () => {},
  },
};


