const SelectScreen = () => {
  const handleCategoryClick = (category: string) => {
    window.location.href = `/detail?category=${category}`;
  };

  const handleSpanishClick = () => {
    // TODO: Implement Spanish language toggle
    console.log('Spanish button clicked');
  };

  const categories = [
    { name: 'Community/Religious Leadership', position: 'top-left' },
    { name: 'Agriculture', position: 'top-right' },
    { name: 'Politics', position: 'middle-left' },
    { name: 'Education', position: 'middle-right' },
    { name: 'Entrepreneurship', position: 'bottom-left' },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Main Content */}
      <div className="relative  h-full px-8 py-8 flex gap-24">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-yellow-400 mb-4">
            Reconstruction Era Texans
          </h1>
          <p className="text-xl font-semibold text-yellow-100 mb-4">
            With freedom came the opportunity for Black Texans to choose their
            paths in life.
          </p>
          <p className="text-lg text-yellow-100 max-w-3xl leading-relaxed">
            Many Black Texans decided to redefine their relationship to the land
            and continued working in agriculture. Some moved to cities to
            explore other professions. For the first time, freedpeople had the
            option to receive a formal education or run for public office. Faced
            with increasing hostility and violence from white Texans who refused
            to treat them as equals, Black Texans created spaces for community
            connection and free expression. Select a topic to learn about a
            person who pursued that path and how their rights shifted throughout
            Reconstruction.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 gap-8 max-w-6xl">
          {categories.map(category => (
            <button
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
              className="group relative bg-black bg-opacity-40 backdrop-blur-sm border-4 border-yellow-400 rounded-lg p-6 hover:bg-opacity-60 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-center">
                <div className="w-full h-48 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-lg mb-4 opacity-80"></div>
                <h3 className="text-lg font-bold text-yellow-100 group-hover:text-yellow-300 transition-colors">
                  {category.name}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <a className="absolute bottom-8 left-8 flex gap-4 z-10" href="/">
        <button className="bg-black bg-opacity-40 backdrop-blur-sm border-4 border-yellow-400 text-yellow-100 font-bold py-3 px-6 rounded-lg hover:bg-opacity-60 transition-all duration-300 flex items-center gap-2">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          HOME
        </button>
      </a>

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

export default SelectScreen;
