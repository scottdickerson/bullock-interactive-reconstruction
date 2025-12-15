export enum Category {
  Agriculture = 'Agriculture',
  CommunityReligiousLeadership = 'Community/Religious Leadership',
  Politics = 'Politics',
  Education = 'Education',
  Entrepreneurship = 'Entrepreneurship',
}

// Map category names to URL slugs
export const categorySlugMap: Record<Category, string> = {
  [Category.Agriculture]: 'agriculture',
  [Category.CommunityReligiousLeadership]: 'community-religious-leadership',
  [Category.Politics]: 'politics',
  [Category.Education]: 'education',
  [Category.Entrepreneurship]: 'entrepreneurship',
};

// Map URL slugs to category names
export const slugToCategoryMap: Record<string, Category> = {
  agriculture: Category.Agriculture,
  'community-religious-leadership': Category.CommunityReligiousLeadership,
  politics: Category.Politics,
  education: Category.Education,
  entrepreneurship: Category.Entrepreneurship,
};

// Map category names to background GIF filenames
export const categoryBackgroundMap: Record<Category, string> = {
  [Category.Agriculture]: 'AgricultureBackground.gif',
  [Category.CommunityReligiousLeadership]: 'CommunityLeadershipBackground.gif',
  [Category.Politics]: 'PoliticsBackground.gif',
  [Category.Education]: 'EducationBackground.gif',
  [Category.Entrepreneurship]: 'EntrepreneurshipBackground.gif',
};

// Map category names to category image URLs
export const categoryImageMap: Record<Category, string> = {
  [Category.Agriculture]: '/categories/agriculture.png',
  [Category.CommunityReligiousLeadership]:
    '/categories/community-religious-leadership.png',
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
