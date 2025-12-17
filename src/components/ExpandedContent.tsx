import { useState } from 'react';
import classNames from 'classnames';
import Button from './Button';
import {
  isContentOption,
  type ContentOption,
  type ArtifactOption,
} from '../data/content';
import closeIcon from '../assets/icon-close.svg?url';
import zoomIcon from '../assets/zoom.svg?url';
import type { Category } from '../utils/categories';
import { getCategoryArtifactUrl } from '../utils/categories';
import ZoomModal from './ZoomModal';

/**
 * Props for the ExpandedContent component
 */
interface ExpandedContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The content option or artifact option to display */
  option: ContentOption | ArtifactOption;
  /** Callback function when the close button is clicked */
  onClose: () => void;
  /** Whether the content is currently expanded */
  isExpanded: boolean;
  /** The current category */
  category: Category;
}

/**
 * A component that displays expanded content for a category option.
 * Shows an image, title, description, and content text with fade-in/out animations.
 * Includes a close button that appears when expanded.
 *
 * @param props - ExpandedContent component props
 * @returns A container with expanded content and close button
 */
const ExpandedContent = ({
  className,
  option,
  onClose,
  isExpanded,
  category,
  ...props
}: ExpandedContentProps) => {
  const [isZoomDialogOpen, setIsZoomDialogOpen] = useState(false);
  // Artifact option is the one that is NOT a content option (doesn't have content/description)
  const isArtifactOption = !isContentOption(option);
  const artifactImageUrl = isArtifactOption
    ? getCategoryArtifactUrl(category)
    : option.imageUrl;

  return (
    <div
      className={classNames(
        'lg:col-span-1 w-full h-0 overflow-hidden',
        {
          'h-full z-30': isExpanded,
          'pointer-events-none': !isExpanded,
        },
        className
      )}
      style={{
        opacity: isExpanded ? 1 : 0,
        transition: isExpanded
          ? 'opacity 300ms ease-in-out 300ms' // Fade in after border expands (500ms delay)
          : 'all 300ms ease-in-out 0ms', // Fade out immediately on collapse
      }}
      {...props}
    >
      <div className="p-6 border-4 border-yellow rounded-lg h-full pt-10">
        <h3 className="text-2xl font-bold text-yellow mb-10 text-center">
          {option.title}
        </h3>
        <div className="mb-24 mx-16">
          {option.imageUrl ? (
            <div
              className={classNames('relative')}
              onClick={() => setIsZoomDialogOpen(true)}
            >
              <img
                src={option.imageUrl}
                alt={option.title}
                className=" h-[390px] object-cover rounded-lg mb-4 bg-black aspect-ratio-[831/1156]"
              />
              {isExpanded && (
                <img
                  src={zoomIcon}
                  alt="Zoom"
                  className="absolute bottom-[30px] right-[34px] pointer-events-none "
                />
              )}
            </div>
          ) : (
            <div className="w-full h-64 rounded-lg mb-4 opacity-80"></div>
          )}
          <p className="text-details text-sm mb-2">{option.image}</p>
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
        className={classNames(
          'absolute bottom-10 w-full flex justify-center',
          className
        )}
        style={{
          opacity: isExpanded ? 1 : 0,
          transition: isExpanded
            ? 'opacity 300ms ease-in-out 500ms' // Fade in after border expands
            : 'opacity 300ms ease-in-out 0ms', // Fade out immediately on collapse
        }}
      >
        <Button
          onClick={onClose}
          className="py-2 px-4 mx-auto  z-100 cursor-pointer"
        >
          <img src={closeIcon} alt="Close" />
        </Button>
      </div>
      <ZoomModal
        isOpen={isZoomDialogOpen}
        onOpenChange={setIsZoomDialogOpen}
        imageUrl={artifactImageUrl}
        alt={option.title}
      />
    </div>
  );
};

export default ExpandedContent;
