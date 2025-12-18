export enum Category {
  Agriculture = 'Agriculture',
  CommunityLeadership = 'CommunityLeadership',
  Politics = 'Politics',
  Education = 'Education',
  Entrepreneurship = 'Entrepreneurship',
}

export const categoryNames: Record<Category, string> = {
  [Category.Agriculture]: 'Agriculture',
  [Category.CommunityLeadership]: 'Community/ Religious Leadership',
  [Category.Politics]: 'Politics',
  [Category.Education]: 'Education',
  [Category.Entrepreneurship]: 'Entrepreneurship',
};

export const categoryTags: Record<Category, string> = {
  [Category.Agriculture]: 'Agriculture',
  [Category.CommunityLeadership]: 'Community Leadership',
  [Category.Politics]: 'Politics',
  [Category.Education]: 'Education',
  [Category.Entrepreneurship]: 'Entrepreneurship',
};

// Map category names to URL slugs
export const categorySlugMap: Record<Category, string> = {
  [Category.Agriculture]: 'agriculture',
  [Category.CommunityLeadership]: 'community-leadership',
  [Category.Politics]: 'politics',
  [Category.Education]: 'education',
  [Category.Entrepreneurship]: 'entrepreneurship',
};

// Map URL slugs to category names
export const slugToCategoryMap: Record<string, Category> = {
  agriculture: Category.Agriculture,
  'community-leadership': Category.CommunityLeadership,
  politics: Category.Politics,
  education: Category.Education,
  entrepreneurship: Category.Entrepreneurship,
};

// Map category names to background GIF filenames
export const categoryBackgroundMap: Record<Category, string> = {
  [Category.Agriculture]: 'AgricultureBackground.gif',
  [Category.CommunityLeadership]: 'CommunityLeadershipBackground.gif',
  [Category.Politics]: 'PoliticsBackground.gif',
  [Category.Education]: 'EducationBackground.gif',
  [Category.Entrepreneurship]: 'EntrepreneurshipBackground.gif',
};

// Map category names to category image URLs
export const categoryImageMap: Record<Category, string> = {
  [Category.Agriculture]: '/categories/agriculture.png',
  [Category.CommunityLeadership]: '/categories/community-leadership.png',
  [Category.Politics]: '/categories/politics.png',
  [Category.Education]: '/categories/education.png',
  [Category.Entrepreneurship]: '/categories/entrepreneurship.png',
};

/**
 * Convert a category enum to a URL slug
 */
export function categoryToSlug(category: Category): string {
  return categorySlugMap[category];
}

/**
 * Convert a URL slug to a category enum
 */
export function slugToCategory(slug: string): Category | null {
  return slugToCategoryMap[slug.toLowerCase()] || null;
}

/**
 * Get the background image filename for a category
 */
export function getCategoryBackground(category: Category): string {
  return categoryBackgroundMap[category];
}

/**
 * Get the category image URL for a category
 */
export function getCategoryImageUrl(category: Category): string {
  return categoryImageMap[category];
}

/**
 * Get the detail page href for a category
 */
export function getCategoryHref(category: Category): string {
  return `/detail/${categoryToSlug(category)}`;
}

// Map option types for zoom images
export type ZoomOptionType =
  | 'artifact'
  | 'new-opportunities'
  | 'challenges-and-dangers';

// Map category and option type to zoom-modal file paths
// Format: /zoom-modal/{Category Directory}/{number}-{letter}. {name} ({option})-1608x1000.{ext}
const categoryZoomImageMap: Record<Category, Record<ZoomOptionType, string>> = {
  [Category.Agriculture]: {
    artifact:
      '/zoom-modal/Agriculture/3-a. Ransom and Sarah Williams (artifact)_1608x1000.webp',
    'new-opportunities':
      '/zoom-modal/Agriculture/3-b. Ransom and Sarah Williams (New opportunities)-1608x1000.webp',
    'challenges-and-dangers':
      '/zoom-modal/Agriculture/3-c. Ransom and Sarah Williams (Challenges and dangers)-1608x1000.webp',
  },
  [Category.CommunityLeadership]: {
    artifact:
      '/zoom-modal/Community Leadership/4-a.-Nace-Duval-(artifact)_1608x1000.webp',
    'new-opportunities':
      '/zoom-modal/Community Leadership/4-b.-Nace-Duval-(New-opportunities)-1608x1000.webp',
    'challenges-and-dangers':
      '/zoom-modal/Community Leadership/4-c. Nace Duval (Challenges and dangers)-1608x1000.webp',
  },
  [Category.Politics]: {
    artifact:
      '/zoom-modal/Politics/5-a. Richard Allen (artifact)_1608x1000.webp',
    'new-opportunities':
      '/zoom-modal/Politics/5-b. Richard Allen (New opportunities)-1608x1000.webp',
    'challenges-and-dangers':
      '/zoom-modal/Politics/5-c. Richard Allen (Challenges and dangers)-1608x1000.webp',
  },
  [Category.Education]: {
    artifact:
      '/zoom-modal/Education/6-a.-Harriet-Smith (artifact)_1608x1000.webp',
    'new-opportunities':
      '/zoom-modal/Education/6-b. Harriet Smith (New opportunities)-1608x1000.webp',
    'challenges-and-dangers':
      '/zoom-modal/Education/6-c. Harriet Smith (Challenges and dangers)-1608x1000.webp',
  },
  [Category.Entrepreneurship]: {
    artifact:
      '/zoom-modal/Entrepreneurship/7-a. Hope Thompson (Artifact)-1608x1000.webp',
    'new-opportunities':
      '/zoom-modal/Entrepreneurship/7-b. Hope Thompson (New opportunities)-1608x1000.webp',
    'challenges-and-dangers':
      '/zoom-modal/Entrepreneurship/7-c. Hope Thompson (Challenges and dangers)-1608x1000.webp',
  },
};

/**
 * Get the zoom image URL for a category and option type
 */
export function getCategoryZoomImage(
  category: Category,
  optionType: ZoomOptionType
): string {
  return categoryZoomImageMap[category][optionType];
}
