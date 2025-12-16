import { Category } from '../utils/categories';
import type { TFunction } from 'i18next';

export interface ContentOption {
  title: string;
  description: string;
  content: string;
  image: string;
  imageUrl: string;
}

export interface ArtifactOption {
  title: string;
  image: string;
  imageUrl: string;
}

export enum ContentDataOptionEnum {
  New_Opportunities = 'New Opportunities',
  Challenges_and_Dangers = 'Challenges and Dangers',
  View_Artifact = 'View Artifact',
}

export interface ContentData {
  name: string;
  description: string;
  options: {
    [ContentDataOptionEnum.New_Opportunities]: ContentOption;
    [ContentDataOptionEnum.Challenges_and_Dangers]: ContentOption;
    [ContentDataOptionEnum.View_Artifact]: ArtifactOption;
  };
}

export const isContentOption = (
  option: ContentOption | ArtifactOption
): option is ContentOption => {
  // Check if the option has a 'content' property, which only ContentOption has
  return 'content' in option && 'description' in option;
};

// Helper function to get translated content data
export const getContentData = (
  category: Category,
  t: TFunction
): ContentData => {
  // Map Category enum to translation key
  const translationKeyMap: Record<Category, string> = {
    [Category.Agriculture]: 'agriculture',
    [Category.CommunityLeadership]: 'communityLeadership',
    [Category.Politics]: 'politics',
    [Category.Education]: 'education',
    [Category.Entrepreneurship]: 'entrepreneurship',
  };

  const translationKey = translationKeyMap[category];
  const content = t(`content.${translationKey}`, {
    returnObjects: true,
  }) as {
    name: string;
    description: string;
    options: {
      newOpportunities: {
        title: string;
        description: string;
        content: string;
        image: string;
      };
      challengesAndDangers: {
        title: string;
        description: string;
        content: string;
        image: string;
      };
      viewArtifact: {
        title: string;
        image: string;
      };
    };
  };

  return {
    name: content.name,
    description: content.description,
    options: {
      [ContentDataOptionEnum.New_Opportunities]: {
        title: content.options.newOpportunities.title,
        description: content.options.newOpportunities.description,
        content: content.options.newOpportunities.content,
        image: content.options.newOpportunities.image,
        imageUrl: getImageUrl(category, 'new-opportunities'),
      },
      [ContentDataOptionEnum.Challenges_and_Dangers]: {
        title: content.options.challengesAndDangers.title,
        description: content.options.challengesAndDangers.description,
        content: content.options.challengesAndDangers.content,
        image: content.options.challengesAndDangers.image,
        imageUrl: getImageUrl(category, 'challenges-and-dangers'),
      },
      [ContentDataOptionEnum.View_Artifact]: {
        title: content.options.viewArtifact.title,
        image: content.options.viewArtifact.image,
        imageUrl: getImageUrl(category, 'view-artifact'),
      },
    },
  };
};

// Helper function to get image URLs
const getImageUrl = (category: Category, option: string): string => {
  const categorySlugMap: Record<Category, string> = {
    [Category.Agriculture]: 'agriculture',
    [Category.CommunityLeadership]: 'community-leadership',
    [Category.Politics]: 'politics',
    [Category.Education]: 'education',
    [Category.Entrepreneurship]: 'entrepreneurship',
  };

  const slug = categorySlugMap[category];
  return `/${slug}/${option}.png`;
};

export const getSelectScreenData = (t: TFunction) => {
  return {
    name: t('select.name'),
    description: t('select.description'),
    details: t('select.details'),
    detailsLine2: t('select.detailsLine2'),
    categories: [
      {
        name: Category.CommunityLeadership,
        imageUrl: '/categories/community-leadership.png',
      },
      { name: Category.Agriculture, imageUrl: '/categories/agriculture.png' },
      { name: Category.Politics, imageUrl: '/categories/politics.png' },
      { name: Category.Education, imageUrl: '/categories/education.png' },
      {
        name: Category.Entrepreneurship,
        imageUrl: '/categories/entrepreneurship.png',
      },
    ],
  };
};
