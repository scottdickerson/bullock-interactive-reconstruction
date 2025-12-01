import { useState } from 'react';
import Button from './Button';
import { contentData } from '../data/content';

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
  const [expandedOption, setExpandedOption] = useState<string | null>(null);

  // Convert URL slug to category name
  const category = categorySlugMap[categorySlug.toLowerCase()] || 'Agriculture';

  const handleOptionClick = (option: string) => {
    if (expandedOption === option) {
      setExpandedOption(null);
    } else {
      setExpandedOption(option);
    }
  };

  const handleViewArtifactClick = () => {
    // TODO: Implement artifact viewing
    console.log('View artifact clicked');
  };

  const content = contentData[category] ||
    contentData['Agriculture'] || {
      // fallback
      name: 'Sample Person',
      description: 'This is a sample description for the selected category.',
      options: {
        'New Opportunities': {
          title: 'New Opportunities',
          content: 'Sample content for new opportunities.',
          image: 'Sample image caption',
        },
        'Challenges and Dangers': {
          title: 'Challenges and Dangers',
          content: 'Sample content for challenges and dangers.',
          image: 'Sample image caption',
        },
        'View Artifact': {
          title: 'View Artifact',
          content: 'Sample content for viewing artifacts.',
          image: 'Sample image caption',
        },
      },
    };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Main Content */}
      <div className="relative h-full px-8 py-8 flex flex-col">
        {/* Header */}
        <div className="mb-8">
          <div className="bg-black bg-opacity-40 backdrop-blur-sm border-4 border-yellow-400 rounded-lg p-4 inline-block mb-4">
            <span className="text-yellow-400 font-bold text-lg">
              {category}
            </span>
          </div>
          {/* Display category name for verification */}
          <div className="mb-4">
            <p className="text-yellow-100 text-sm">
              Category from URL: <span className="font-bold">{category}</span>
            </p>
          </div>
          <h1 className="text-4xl font-bold text-yellow-400 mb-4">
            {content.name}
          </h1>
          <p className="text-lg text-yellow-100 max-w-4xl leading-relaxed">
            {content.description}
          </p>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl">
          {/* Left Column - Options */}
          <div className="space-y-4">
            {Object.entries(content.options).map(([key, option]) => (
              <div key={key}>
                <button
                  onClick={() => handleOptionClick(key)}
                  className={`w-full text-left p-4 rounded-lg border-4 transition-all duration-300 ${
                    expandedOption === key
                      ? 'bg-yellow-400 text-black border-yellow-400'
                      : 'bg-black bg-opacity-40 backdrop-blur-sm text-yellow-100 border-yellow-400 hover:bg-opacity-60'
                  }`}
                >
                  <h3 className="font-bold text-lg">{option.title}</h3>
                </button>

                {/* Expanded Content */}
                {expandedOption === key && (
                  <div className="mt-4 p-6 bg-black bg-opacity-60 backdrop-blur-sm border-4 border-yellow-400 rounded-lg">
                    <div className="mb-4">
                      {option.imageUrl ? (
                        <img
                          src={option.imageUrl}
                          alt={option.title}
                          className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                      ) : (
                        <div className="w-full h-64 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-lg mb-4 opacity-80"></div>
                      )}
                      <p className="text-yellow-100 text-sm mb-2">
                        {option.image}
                      </p>
                    </div>
                    <p className="text-yellow-100 leading-relaxed">
                      {option.content}
                    </p>
                    {key === 'View Artifact' && (
                      <Button
                        onClick={handleViewArtifactClick}
                        className="mt-4 py-2 px-4 text-base"
                      >
                        View Full Artifact
                      </Button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column - Expanded Content Display */}
          {expandedOption && (
            <div className="lg:col-span-1">
              <div className="p-6 bg-black bg-opacity-60 backdrop-blur-sm border-4 border-yellow-400 rounded-lg h-full">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                  {content.options[expandedOption].title}
                </h3>
                <div className="mb-4">
                  {content.options[expandedOption].imageUrl ? (
                    <img
                      src={content.options[expandedOption].imageUrl}
                      alt={content.options[expandedOption].title}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                  ) : (
                    <div className="w-full h-64 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-lg mb-4 opacity-80"></div>
                  )}
                  <p className="text-yellow-100 text-sm mb-2">
                    {content.options[expandedOption].image}
                  </p>
                </div>
                <p className="text-yellow-100 leading-relaxed">
                  {content.options[expandedOption].content}
                </p>
                {expandedOption === 'View Artifact' && (
                  <Button
                    onClick={handleViewArtifactClick}
                    className="mt-4 py-2 px-4 text-base"
                  >
                    View Full Artifact
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailScreen;
