import Woodblocks from './Woodblocks';

const Pullscreen = () => {
  const handleSpanishClick = () => {
    // TODO: Implement Spanish language toggle
    console.log('Spanish button clicked');
  };

  return (
    <a
      className="block relative w-full h-screen overflow-hidden"
      href="/select"
    >
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-8xl font-extrabold text-yellow-400 mb-4 drop-shadow-lg">
            RECOUNTING
          </h1>
          <h1 className="text-6xl md:text-8xl font-extrabold text-yellow-400 drop-shadow-lg">
            RECONSTRUCTION
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-2xl font-semibold text-yellow-100 text-center mb-8 max-w-4xl">
          Emancipation brought opportunity but it did not equal equality.
        </p>

        {/* Description */}
        <div className="text-lg text-yellow-100 text-center mb-12 max-w-4xl leading-relaxed">
          <p>
            On June 19, 1865, Union General Gordon Granger arrived in Galveston
            to announce that over 250,000 enslaved people in Texas were free.
            After the Civil War ended and news of Emancipation finally reached
            Texas, the state entered a period of Reconstruction. This era
            radically reshaped government and redefined formerly enslaved
            people's rights as citizens. Though white legislators' fought to
            codify racial inequality, Black Texans forged new paths forward.
          </p>
        </div>

        {/* Start Button */}
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
          START
        </button>
      </div>
      <Woodblocks />

      {/* Spanish Button */}
      <button
        onClick={handleSpanishClick}
        className="absolute top-8 right-8 bg-black bg-opacity-40 backdrop-blur-sm border-4 border-yellow-400 text-yellow-100 font-bold py-3 px-6 rounded-lg hover:bg-opacity-60 transition-all duration-300"
      >
        Español
      </button>
    </a>
  );
};

export default Pullscreen;
