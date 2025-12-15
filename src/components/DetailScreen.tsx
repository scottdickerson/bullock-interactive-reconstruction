import { useState } from 'react';
import CategoryTag from './CategoryTag';
import CategoryOptionButton from './CategoryOptionButton';
import { contentData, type ContentData } from '../data/content';
import { slugToCategory, Category } from '../utils/categories';

/**
 * Props for the DetailScreen component
 */
interface DetailScreenProps {
  /** The category slug from the URL (e.g., 'agriculture', 'politics') */
  category?: string;
}

/**
 * The main detail screen component that displays category information and options.
 * Shows a category tag, header with description, and interactive option buttons
 * that can expand to show detailed content.
 *
 * @param props - DetailScreen component props
 * @returns The detail screen layout with category information
 */
const DetailScreen = ({
  category: categorySlug = 'agriculture',
}: DetailScreenProps) => {
  const [expandedOption, setExpandedOption] = useState<
    keyof ContentData['options'] | null
  >(null);

  // Convert URL slug to category enum
  const category = slugToCategory(categorySlug) || Category.Agriculture;

  const handleOptionClick = (option: keyof ContentData['options']) => {
    if (expandedOption === option) {
      setExpandedOption(null);
    } else {
      setExpandedOption(option);
    }
  };

  const handleClose = () => {
    setExpandedOption(null);
  };

  const content = contentData[category];

  return (
    <div className="relative h-full pr-8 flex gap-8">
      {/* Category Tag - Fixed Positioned */}
      <div className="fixed top-8 left-40 z-10">
        <CategoryTag category={category} />
      </div>

      {/* Left Column Header and Overview */}
      <div className="basis-[630px] mt-[221px]">
        <h1 className="text-4xl font-bold text-yellow mb-8 ">{content.name}</h1>
        <p className="text-xl font-medium text-details max-w-4xl leading-snug w-[600px]">
          {content.description}
        </p>
      </div>

      {/* Options */}
      <div className={`w-[831px] relative`} id="options-container">
        {/* Right Column - Options */}
        <div className="flex flex-col gap-4 relative items-center">
          {Object.entries(content.options).map(([key, option], index) => (
            <CategoryOptionButton
              key={key}
              option={option}
              index={index}
              isHidden={expandedOption !== key && !!expandedOption}
              isExpanded={expandedOption === key}
              onClick={() =>
                handleOptionClick(key as keyof ContentData['options'])
              }
              onClose={handleClose}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailScreen;
