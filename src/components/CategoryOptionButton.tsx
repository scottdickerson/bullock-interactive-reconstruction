import { useRef, useEffect, useState } from 'react';
import ExpandedContent from './ExpandedContent';
import type { ContentOption, ArtifactOption } from '../data/content';

interface CategoryOptionButtonProps {
  option: ContentOption | ArtifactOption;
  isExpanded: boolean;
  onClick: () => void;
  onClose: () => void;
}

const CategoryOptionButton = ({
  option,
  isExpanded,
  onClick,
  onClose,
}: CategoryOptionButtonProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const originalPosition = useRef<{
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    height?: string;
    width?: string;
  }>({ width: '100%', height: '88px' });
  const [position, setPosition] = useState<{
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    height?: string;
    width?: string;
  }>({});

  useEffect(() => {
    if (containerRef.current) {
      // Find the parent container (the one with basis-1/2)
      const parent = containerRef.current.closest('.basis-1\\/2');
      if (parent) {
        const parentRect = parent.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();

        // Calculate current position relative to parent
        const currentTop = containerRect.top - parentRect.top;
        const currentLeft = containerRect.left - parentRect.left;
        const currentHeight = containerRect.height;
        const currentWidth = containerRect.width;

        // After layout, animate to full size
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (!originalPosition.current.top) {
              originalPosition.current = {
                top: `${currentTop}px`,
                left: `${currentLeft}px`,
                height: `${currentHeight}px`,
                width: `${currentWidth}px`,
              };
            }
            if (isExpanded) {
              setPosition({
                top: '0px',
                left: '0px',
                right: '0px',
                bottom: '0px',
                height: `${parentRect.height}px`,
                width: `${parentRect.width}px`,
              });
            } else {
              setPosition(originalPosition.current);
            }
          });
        });
      }
    }
  }, [isExpanded]);
  return (
    <div
      ref={containerRef}
      className={`bg-[rgb(0,0,0,0.4)] backdrop-blur-sm overflow-hidden z-30 h-20 w-20 ${isExpanded ? 'absolute top-0 left-0 right-0 bottom-0' : ''} `}
      style={
        isExpanded
          ? {
              height: position.height,
              width: position.width,
              transition:
                'top 300ms ease-in-out, bottom 300ms ease-in-out, height 300ms ease-in-out, opacity 300ms ease-in-out',
            }
          : {
              top: originalPosition.current.top,
              left: originalPosition.current.left,
              right: originalPosition.current.right,
              bottom: originalPosition.current.bottom,
              height: originalPosition.current.height,
              width: originalPosition.current.width,
              transition:
                'top 300ms ease-in-out, bottom 300ms ease-in-out, height 300ms ease-in-out, opacity 300ms ease-in-out',
            }
      }
    >
      <button
        ref={buttonRef}
        onClick={onClick}
        className={`w-full text-center px-40 rounded-lg border-4 transition-all duration-300 text-details border-yellow cursor-pointer ${isExpanded ? 'opacity-0 h-0 w-0 hidden' : ' py-6 opacity-100'}`}
      >
        <h3 className="font-extrabold text-2xl">{option.title}</h3>
      </button>
      <ExpandedContent
        isExpanded={isExpanded}
        option={option}
        onClose={onClose}
      />
    </div>
  );
};

export default CategoryOptionButton;
