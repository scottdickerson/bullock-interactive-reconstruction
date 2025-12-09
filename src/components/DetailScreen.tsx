import { useState } from 'react';
import CategoryTag from './CategoryTag';
import CategoryOptionButton from './CategoryOptionButton';
import { contentData, type ContentData } from '../data/content';

interface DetailScreenProps {
  category?: string;
}

// Map URL slugs to category names
const categorySlugMap: Record<string, string> = {
  agriculture: 'Agriculture',
  'community-religious-leadership': 'Community/Religious Leadership',
  politics: 'Politics',
  education: 'Education',
  entrepreneurship: 'Entrepreneurship',
};

const DetailScreen = ({
  category: categorySlug = 'agriculture',
}: DetailScreenProps) => {
  const [expandedOption, setExpandedOption] = useState<
    keyof ContentData['options'] | null
  >(null);

  // Convert URL slug to category name
  const category = categorySlugMap[categorySlug.toLowerCase()] || 'Agriculture';

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
    <div className="relative h-full px-8 flex gap-8">
      {/* Category Tag - Fixed Positioned */}
      <div className="fixed top-8 left-40 z-10">
        <CategoryTag category={category} />
      </div>

      {/* Left Column Header and Overview */}
      <div className="basis-1/2 mt-[221px]">
        <h1 className="text-4xl font-bold text-yellow mb-8 ">{content.name}</h1>
        <p className="text-xl font-medium text-details max-w-4xl leading-snug">
          {content.description}
        </p>
      </div>

      {/* Options */}
      <div
        className={`basis-1/2  relative mr-40 ${!expandedOption ? 'pt-10' : ''}`}
      >
        {/* Right Column - Options */}
        <div className="flex flex-col gap-4 relative">
          {Object.entries(content.options)
            .filter(([key]) => !expandedOption || expandedOption === key)
            .map(([key, option]) => (
              <CategoryOptionButton
                key={key}
                option={option}
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
