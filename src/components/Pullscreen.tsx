import Woodblocks from './Woodblocks';
import Button from './Button';
import arrowRight from '../assets/icon-arrow.svg?url';

const Pullscreen = () => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-8xl font-extrabold text-yellow-400 mb-4 drop-shadow-lg animate-float">
            RECOUNTING
          </h1>
          <h1 className="text-6xl md:text-8xl font-extrabold text-yellow-400 drop-shadow-lg animate-float">
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
        <Button as="a" href="/select" className="flex items-center gap-2">
          START <img src={arrowRight} alt="Arrow Right" className="w-4 h-4" />
        </Button>
      </div>
      <Woodblocks />
    </div>
  );
};

export default Pullscreen;
