import type { Meta, StoryObj } from '@storybook/react';
import CategoryTag from './CategoryTag';
import { Category } from '../utils/categories';

const meta: Meta<typeof CategoryTag> = {
  title: 'Components/CategoryTag',
  component: CategoryTag,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ position: 'relative', minHeight: '200px', width: '100%' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    category: {
      control: 'select',
      options: Object.values(Category),
      description: 'Category to display',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CategoryTag>;

export const Default: Story = {
  args: {
    category: Category.Agriculture,
  },
};

export const Agriculture: Story = {
  args: {
    category: Category.Agriculture,
  },
};

export const CommunityLeadership: Story = {
  args: {
    category: Category.CommunityLeadership,
  },
};

export const Politics: Story = {
  args: {
    category: Category.Politics,
  },
};

export const Education: Story = {
  args: {
    category: Category.Education,
  },
};

export const Entrepreneurship: Story = {
  args: {
    category: Category.Entrepreneurship,
  },
};
