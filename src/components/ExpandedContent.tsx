import Button from './Button';
import {
  isContentOption,
  type ContentOption,
  type ArtifactOption,
} from '../data/content';
import closeIcon from '../assets/icon-close.svg?url';

interface ExpandedContentProps extends React.HTMLAttributes<HTMLDivElement> {
  option: ContentOption | ArtifactOption;
  onClose: () => void;
  isExpanded: boolean;
}

const ExpandedContent = ({
  className,
  option,
  onClose,
  isExpanded,
  ...props
}: ExpandedContentProps) => {
  return (
    <div
      className={`lg:col-span-1 w-full h-0 transition-all duration-300 overflow-hidden ${isExpanded ? 'h-full z-30 opacity-100 ' : 'pointer-events-none opacity-0 '} ${className || ''}`}
      {...props}
    >
      <div className="p-6  border-4 border-yellow rounded-lg h-full pt-10">
        <h3 className="text-2xl font-bold text-yellow mb-10 text-center">
          {option.title}
        </h3>
        <div className="mb-24 mx-16 bag">
          {option.imageUrl ? (
            <img
              src={option.imageUrl}
              alt={option.title}
              className=" h-[390px] object-cover rounded-lg mb-4 bg-black aspect-ratio-[831/1156]"
            />
          ) : (
            <div className="w-full h-64 rounded-lg mb-4 opacity-80"></div>
          )}
          <p className="text-details text-sm mb-2 text-center">
            {option.image}
          </p>
        </div>
        {isContentOption(option) && (
          <>
            <h4 className="text-details font-bold text-2xl mb-6 italic leading-relaxed">
              {option.description}
            </h4>
            <p className="text-details leading-relaxed text-xl font-medium">
              {option.content}
            </p>
          </>
        )}
      </div>
      <div
        className={`transition-all duration-300 delay-300 absolute bottom-10 w-full flex justify-center ${isExpanded ? 'opacity-100' : 'opacity-0'} ${className}`}
      >
        <Button
          onClick={onClose}
          className="py-2 px-4 mx-auto  z-100 cursor-pointer"
        >
          <img src={closeIcon} alt="Close" />
        </Button>
      </div>
    </div>
  );
};

export default ExpandedContent;
