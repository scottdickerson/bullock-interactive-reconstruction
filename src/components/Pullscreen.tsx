import Woodblocks from './Woodblocks';
import Button from './Button';
import arrowRight from '../assets/icon-arrow.svg?url';

const Pullscreen = () => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
        <div className="max-w-[934px]">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-[100px] leading-none  font-extrabold text-yellow-400 drop-shadow-lg animate-float">
              RECOUNTING
            </h1>
            <h1 className="text-[100px] leading-none  font-extrabold text-yellow-400 drop-shadow-lg animate-float">
              RECONSTRUCTION
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-3xl font-semibold text-pullscreen-text  mb-8 ">
            Emancipation brought opportunity but it did not equal equality.
          </p>

          {/* Description */}
          <div className="text-2xl text-pullscreen-text font-medium mb-12 leading-relaxed">
            <p>
              On June 19, 1865, Union General Gordon Granger arrived in
              Galveston to announce that over 250,000 enslaved people in Texas
              were free. After the Civil War ended, the state entered a period
              of Reconstruction. This era radically reshaped government and
              redefined formerly enslaved people's rights as citizens. Black
              Texans forged new paths forward while confronting racist policy
              making.
            </p>
          </div>
        </div>

        {/* Start Button */}
        <Button
          as="a"
          href="/select"
          className="flex items-center gap-2 [view-transition-name:start-button]"
        >
          START <img src={arrowRight} alt="Arrow Right" className="w-11 h-4" />
        </Button>
      </div>
      <Woodblocks />
    </div>
  );
};

export default Pullscreen;
