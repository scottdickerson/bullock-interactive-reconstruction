import type { Meta, StoryObj } from '@storybook/react';
import CategorySelectButton from './CategorySelectButton';
import { Category } from '../utils/categories';

const meta: Meta<typeof CategorySelectButton> = {
  title: 'Components/CategorySelectButton',
  component: CategorySelectButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    category: {
      control: 'select',
      options: Object.values(Category),
      description: 'Category to display',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CategorySelectButton>;

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
