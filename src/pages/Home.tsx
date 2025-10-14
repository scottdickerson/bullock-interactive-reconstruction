import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Bullock Interactive Reconstruction
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Welcome to our interactive reconstruction project
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Feature 1
              </h3>
              <p className="text-gray-600">Description of the first feature</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Feature 2
              </h3>
              <p className="text-gray-600">Description of the second feature</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Feature 3
              </h3>
              <p className="text-gray-600">Description of the third feature</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
