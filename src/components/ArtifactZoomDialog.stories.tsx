import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import ArtifactZoomDialog from './ArtifactZoomDialog';
import Button from './Button';
import { Category } from '../utils/categories';
import { getCategoryArtifactUrl } from '../utils/categories';

const meta: Meta<typeof ArtifactZoomDialog> = {
  title: 'Components/ArtifactZoomDialog',
  component: ArtifactZoomDialog,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Whether the dialog is open',
    },
    onOpenChange: {
      action: 'openChange',
      description: 'Callback when the dialog open state changes',
    },
    imageUrl: {
      control: 'text',
      description: 'The URL of the artifact image to display',
    },
    alt: {
      control: 'text',
      description: 'The alt text for the artifact image',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ArtifactZoomDialog>;

/**
 * Interactive wrapper component for stories that manages dialog state
 */
const InteractiveWrapper = (args: Story['args']) => {
  const [isOpen, setIsOpen] = useState(args?.isOpen ?? false);

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#632549',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button onClick={() => setIsOpen(true)}>Open Artifact Dialog</Button>
      <ArtifactZoomDialog {...args} isOpen={isOpen} onOpenChange={setIsOpen} />
    </div>
  );
};

export const Agriculture: Story = {
  render: () => (
    <InteractiveWrapper
      imageUrl={getCategoryArtifactUrl(Category.Agriculture)}
      alt="Agriculture Artifact"
    />
  ),
};

export const CommunityLeadership: Story = {
  render: () => (
    <InteractiveWrapper
      imageUrl={getCategoryArtifactUrl(Category.CommunityLeadership)}
      alt="Community Leadership Artifact"
    />
  ),
};

export const Politics: Story = {
  render: () => (
    <InteractiveWrapper
      imageUrl={getCategoryArtifactUrl(Category.Politics)}
      alt="Politics Artifact"
    />
  ),
};

export const Education: Story = {
  render: () => (
    <InteractiveWrapper
      imageUrl={getCategoryArtifactUrl(Category.Education)}
      alt="Education Artifact"
    />
  ),
};

export const Entrepreneurship: Story = {
  render: () => (
    <InteractiveWrapper
      imageUrl={getCategoryArtifactUrl(Category.Entrepreneurship)}
      alt="Entrepreneurship Artifact"
    />
  ),
};

export const Default: Story = {
  args: {
    isOpen: true,
    onOpenChange: () => {},
    imageUrl: getCategoryArtifactUrl(Category.Agriculture),
    alt: 'Artifact',
  },
};
