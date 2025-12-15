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

// Map category names to artifact image filenames
export const categoryArtifactMap: Record<Category, string> = {
  [Category.Agriculture]: '/artifacts/AgricultureArtifact.png',
  [Category.CommunityLeadership]: '/artifacts/CommunityLeadershipArtifact.png',
  [Category.Politics]: '/artifacts/PoliticsArtifact.png',
  [Category.Education]: '/artifacts/EducationArtifact.png',
  [Category.Entrepreneurship]: '/artifacts/EntrepreneurshipArtifact.png',
};

/**
 * Get the artifact image URL for a category
 */
export function getCategoryArtifactUrl(category: Category): string {
  return categoryArtifactMap[category];
}
