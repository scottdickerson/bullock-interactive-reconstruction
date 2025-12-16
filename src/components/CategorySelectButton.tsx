import { useTranslation } from 'react-i18next';
import {
  Category,
  getCategoryImageUrl,
  categoryToSlug,
} from '../utils/categories';

/**
 * Props for the CategorySelectButton component
 */
interface CategorySelectButtonProps {
  /** The category to display and link to */
  category: Category;
  /** Additional CSS classes to apply to the button */
  className?: string;
}

/**
 * A clickable category selection button that displays a category with its background image.
 * Automatically generates the correct href and image URL based on the category enum.
 * Features hover effects and a blurred overlay effect.
 *
 * @param props - CategorySelectButton component props
 * @returns An anchor element styled as a category selection button
 */
const CategorySelectButton = ({
  category,
  className = '',
}: CategorySelectButtonProps) => {
  const { t, i18n } = useTranslation();
  const imageUrl = getCategoryImageUrl(category);
  
  // Map Category enum to translation key
  const translationKeyMap: Record<Category, string> = {
    [Category.Agriculture]: 'categories.agriculture',
    [Category.CommunityLeadership]: 'categories.communityLeadership',
    [Category.Politics]: 'categories.politics',
    [Category.Education]: 'categories.education',
    [Category.Entrepreneurship]: 'categories.entrepreneurship',
  };

  const translationKey = translationKeyMap[category];
  const categoryName = t(translationKey);
  
  // Build href with language prefix
  const langPrefix = i18n.language === 'es' ? '/es' : '';
  const categorySlug = categoryToSlug(category);
  const href = `${langPrefix}/detail/${categorySlug}`;

  return (
    <a
      href={href}
      className={`group relative block overflow-hidden rounded-lg transition-all duration-300 transform hover:scale-105 ${className} h-[280px]  w-[390px]`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Blur Overlay - positioned as sibling to blur the background image */}
      <div className="absolute inset-4 backdrop-blur-[2px] z-10 bg-[rgb(0,0,0,0.4)] rounded-lg border-4 border-yellow "></div>

      {/* Content Overlay */}
      <div className="relative z-20 flex items-center justify-center h-full p-18 ">
        <h3 className="text-2xl font-bold text-button group-hover:text-yellow transition-colors text-center">
          {categoryName}
        </h3>
      </div>
    </a>
  );
};

export default CategorySelectButton;
