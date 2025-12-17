import { DialogClose } from './ui/dialog';
import FadeInModal from './FadeInModal';
import closeIcon from '../assets/icon-close.svg?url';

/**
 * Props for the ZoomModal component
 */
interface ZoomModalProps {
  /** Whether the dialog is open */
  isOpen: boolean;
  /** Callback function when the dialog open state changes */
  onOpenChange: (open: boolean) => void;
  /** The URL of the artifact image to display */
  imageUrl: string;
  /** The alt text for the artifact image */
  alt: string;
}

/**
 * A fullscreen dialog component that displays an artifact image in a zoomed view.
 * Shows the image centered with a close button positioned at the bottom right.
 *
 * @param props - ZoomModal component props
 * @returns A fullscreen dialog with the artifact image
 */
const ZoomModal = ({
  isOpen,
  onOpenChange,
  imageUrl,
  alt,
}: ZoomModalProps) => {
  return (
    <FadeInModal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      fadeDuration={500}
      fadeInDelay={10}
      contentProps={{
        variant: 'fullscreen',
        className: 'bg-black/80',
      }}
    >
      <div className="aspect-video w-[1600px]">
        <div className="relative">
          <img
            src={imageUrl}
            alt={alt}
            className="h-full w-full object-contain"
          />
          <DialogClose asChild>
            <button
              className="absolute bottom-10 right-10 p-2 rounded-2xl border-yellow border-4 bg-[rgb(0,0,0,0.4)] backdrop-blur-sm cursor-pointer hover:opacity-80 transition-opacity drop-shadow-[0_4px_5px_rgba(0,0,0,0.45)]"
              aria-label="Close"
            >
              <img src={closeIcon} alt="Close" />
            </button>
          </DialogClose>
        </div>
      </div>
    </FadeInModal>
  );
};

export default ZoomModal;

