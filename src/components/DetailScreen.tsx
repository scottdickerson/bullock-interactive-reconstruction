import { useState, useEffect } from 'react';

const DetailScreen = () => {
  const [expandedOption, setExpandedOption] = useState<string | null>(null);
  const [category, setCategory] = useState('Agriculture');
  const [isFromPreviousScreen, setIsFromPreviousScreen] = useState(false);

  useEffect(() => {
    // Get category from sessionStorage
    const storedCategory = sessionStorage.getItem('category') || 'Agriculture';
    const fromPrevious = sessionStorage.getItem('fromPrevious') === 'true';
    sessionStorage.removeItem('fromPrevious');
    sessionStorage.removeItem('category');

    setCategory(storedCategory);
    setIsFromPreviousScreen(fromPrevious);
  }, []);

  const handleOptionClick = (option: string) => {
    if (expandedOption === option) {
      setExpandedOption(null);
    } else {
      setExpandedOption(option);
    }
  };

  const handleSpanishClick = () => {
    // TODO: Implement Spanish language toggle
    console.log('Spanish button clicked');
  };

  const handleViewArtifactClick = () => {
    // TODO: Implement artifact viewing
    console.log('View artifact clicked');
  };

  // Sample content based on category
  const getContent = () => {
    switch (category) {
      case 'Agriculture':
        return {
          name: 'Ransom and Sarah Williams',
          description:
            "Before Emancipation, Ransom Williams (ca. 1846–1901) was enslaved by the Bunton family in Mountain City, Texas. By 1871, he purchased 45 acres of land near Bear Creek in Travis County. Four years later, he married Sarah Houston. Together, they ran a successful farm that produced food to sustain their family and cotton to sell for profit. The Williams earned enough to start a horse raising business, buy fine goods, and invest in their children's education.",
          options: {
            'New Opportunities': {
              title: 'New Opportunities',
              content:
                "Landowners exploited the labor of Black Texans to limit their financial freedom. Apprenticeship and tenant farming laws allowed landowners to trap workers in contracts that tied them to the land. By owning his property, Ransom kept all the profits of his work. Financial success allowed Ransom and Sarah to better their family's quality of life and education.",
              image:
                'Family and ox cart in front of house, ca. 1888 // Courtesy The Valentine, Richmond, Virginia',
            },
            'Challenges and Dangers': {
              title: 'Challenges and Dangers',
              content:
                'After Ransom died, Sarah and her children remained on the farm four more years. But life in rural Texas offered limited job options and increased exposure to racial violence. Legislators actively worked to remove protections for Black Texans. The Williams family ultimately moved to a freedom colony in East Austin.',
              image:
                'Downtown Austin, 1920 // Courtesy of The Austin History Center',
            },
            'View Artifact': {
              title: 'View Artifact',
              content:
                'Williams registered his horse brand, "RA," in Travis County in April 1872. This fragment found on the Williams Farmstead matches the brand he filed with the county.',
              image:
                'Courtesy Texas Archaeological Research Laboratory, The University of Texas at Austin',
            },
          },
        };
      default:
        return {
          name: 'Sample Person',
          description:
            'This is a sample description for the selected category.',
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
    }
  };

  const content = getContent();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Woodblock Background (only show if not coming from back button) */}
      {isFromPreviousScreen && (
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 left-0 w-full h-[400px]">
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-br from-amber-200 to-amber-600 rounded-lg mix-blend-multiply"></div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative  h-full px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="bg-black bg-opacity-40 backdrop-blur-sm border-4 border-yellow-400 rounded-lg p-4 inline-block mb-4">
            <span className="text-yellow-400 font-bold text-lg">
              {category}
            </span>
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
                      <div className="w-full h-64 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-lg mb-4 opacity-80"></div>
                      <p className="text-yellow-100 text-sm mb-2">
                        {option.image}
                      </p>
                    </div>
                    <p className="text-yellow-100 leading-relaxed">
                      {option.content}
                    </p>
                    {key === 'View Artifact' && (
                      <button
                        onClick={handleViewArtifactClick}
                        className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg transition-all duration-300"
                      >
                        View Full Artifact
                      </button>
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
                  <div className="w-full h-64 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-lg mb-4 opacity-80"></div>
                  <p className="text-yellow-100 text-sm mb-2">
                    {content.options[expandedOption].image}
                  </p>
                </div>
                <p className="text-yellow-100 leading-relaxed">
                  {content.options[expandedOption].content}
                </p>
                {expandedOption === 'View Artifact' && (
                  <button
                    onClick={handleViewArtifactClick}
                    className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg transition-all duration-300"
                  >
                    View Full Artifact
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 left-8 flex gap-4">
        <a href="/">
          <button className="bg-black bg-opacity-40 backdrop-blur-sm border-4 border-yellow-400 text-yellow-100 font-bold py-3 px-6 rounded-lg hover:bg-opacity-60 transition-all duration-300 flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            HOME
          </button>
        </a>
        <a href="/select">
          <button className="bg-black bg-opacity-40 backdrop-blur-sm border-4 border-yellow-400 text-yellow-100 font-bold py-3 px-6 rounded-lg hover:bg-opacity-60 transition-all duration-300 flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            BACK
          </button>
        </a>
      </div>

      {/* Spanish Button */}
      <button
        onClick={handleSpanishClick}
        className="absolute top-8 right-8 bg-black bg-opacity-40 backdrop-blur-sm border-4 border-yellow-400 text-yellow-100 font-bold py-3 px-6 rounded-lg hover:bg-opacity-60 transition-all duration-300"
      >
        Español
      </button>
    </div>
  );
};

export default DetailScreen;
