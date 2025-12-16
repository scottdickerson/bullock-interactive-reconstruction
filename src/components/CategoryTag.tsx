import { useTranslation } from 'react-i18next';
import { Category } from '../utils/categories';

/**
 * Props for the CategoryTag component
 */
interface CategoryTagProps {
  /** The category to display in the tag */
  category: Category;
}

/**
 * A fixed-position category tag component that displays the current category name.
 * Styled with a yellow background and purple text, positioned at the top-left of the screen.
 *
 * @param props - CategoryTag component props
 * @returns A fixed-position category tag element
 */
const CategoryTag = ({ category }: CategoryTagProps) => {
  const { t } = useTranslation();

  // Map Category enum to translation key
  const translationKeyMap: Record<Category, string> = {
    [Category.Agriculture]: 'categories.agriculture',
    [Category.CommunityLeadership]: 'categories.communityLeadership',
    [Category.Politics]: 'categories.politics',
    [Category.Education]: 'categories.education',
    [Category.Entrepreneurship]: 'categories.entrepreneurship',
  };

  const translationKey = translationKeyMap[category];

  return (
    <div className="bg-yellow border-4 border-yellow rounded-lg pl-24 pr-10 py-3 fixed -left-2 top-10 ">
      <span className="text-purple font-bold text-2xl">
        {t(translationKey)}
      </span>
    </div>
  );
};

export default CategoryTag;
