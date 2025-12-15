import type { Meta, StoryObj } from '@storybook/react';
import DetailScreen from './DetailScreen';
import {
  Category,
  categoryToSlug,
  slugToCategory,
  getCategoryBackground,
} from '../utils/categories';

const meta: Meta<typeof DetailScreen> = {
  title: 'Screens/DetailScreen',
  component: DetailScreen,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const categorySlug = context.args.category || 'agriculture';
      const categoryEnum = slugToCategory(categorySlug) || Category.Agriculture;
      const backgroundImage = categoryEnum
        ? `/category-background/${getCategoryBackground(categoryEnum)}`
        : '/background.png';

      return (
        <div
          style={{
            position: 'relative',
            width: '100vw',
            height: '100vh',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
  argTypes: {
    category: {
      control: 'select',
      options: Object.values(Category).map(cat => categoryToSlug(cat)),
      description: 'The category slug from the URL',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DetailScreen>;

export const Agriculture: Story = {
  args: {
    category: categoryToSlug(Category.Agriculture),
  },
};

export const CommunityLeadership: Story = {
  args: {
    category: categoryToSlug(Category.CommunityReligiousLeadership),
  },
};

export const Politics: Story = {
  args: {
    category: categoryToSlug(Category.Politics),
  },
};

export const Education: Story = {
  args: {
    category: categoryToSlug(Category.Education),
  },
};

export const Entrepreneurship: Story = {
  args: {
    category: categoryToSlug(Category.Entrepreneurship),
  },
};
