import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About This Project</h1>
          <div className="prose prose-lg text-gray-700">
            <p className="mb-4">
              This is the Bullock Interactive Reconstruction project, built with modern web technologies
              to provide an engaging and interactive experience.
            </p>
            <p className="mb-4">
              Our project utilizes:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>React with TypeScript for type safety</li>
              <li>Vite for fast development and building</li>
              <li>React Router for navigation</li>
              <li>Tailwind CSS for styling</li>
              <li>Storybook for component documentation</li>
              <li>Google Analytics for insights</li>
              <li>Vercel for deployment</li>
            </ul>
            <p>
              This project is designed to be scalable, maintainable, and performant.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;