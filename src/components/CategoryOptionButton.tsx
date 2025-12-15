import { useRef, useEffect, useState, useMemo } from 'react';
import classNames from 'classnames';
import ExpandedContent from './ExpandedContent';
import type { ContentOption, ArtifactOption } from '../data/content';
import type { Category } from '../utils/categories';

/**
 * Props for the CategoryOptionButton component
 */
interface CategoryOptionButtonProps {
  /** The content option or artifact option to display */
  option: ContentOption | ArtifactOption;
  /** Whether this button is currently expanded */
  isExpanded: boolean;
  /** Whether this button should be hidden (when another option is expanded) */
  isHidden: boolean;
  /** The index of this button (0, 1, or 2) used to determine vertical position when collapsed */
  index: number;
  /** Callback function when the button is clicked */
  onClick: () => void;
  /** Callback function when the expanded content is closed */
  onClose: () => void;
  /** The current category */
  category: Category;
}

/**
 * An interactive category option button that can expand to show detailed content.
 * Features smooth animations for expanding/collapsing and positioning.
 * When expanded, it fills the parent container. When collapsed, it positions itself
 * at a fixed vertical position based on its index.
 *
 * @param props - CategoryOptionButton component props
 * @returns A container with a button and expandable content
 */
const CategoryOptionButton = ({
  option,
  isExpanded,
  isHidden,
  index,
  onClick,
  onClose,
  category,
}: CategoryOptionButtonProps) => {
  // Top positions for each button: first = 168px, second = 286px, third = 395px
  const topPositions = [168, 286, 395];
  const collapsedTop = `${topPositions[index] || 168}px`;
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const originalPosition = useMemo(
    () => ({
      top: collapsedTop,
      left: '80px',
      right: undefined,
      bottom: undefined,
      height: '88px',
      width: '635px',
      transform: undefined,
    }),
    [collapsedTop]
  );

  const [position, setPosition] = useState<{
    transform?: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    height?: string;
    width?: string;
  }>(originalPosition);

  useEffect(() => {
    if (containerRef.current) {
      // Find the parent container (the one containing the category options)
      const parent = containerRef.current.closest('#options-container');
      if (parent) {
        const parentRect = parent.getBoundingClientRect();

        // After layout, animate to full size
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (isExpanded) {
              setPosition({
                transform: 'translateY(-20px)',
                top: '0px',
                left: '0px',
                right: '0px',
                bottom: '-20px',
                height: `${parentRect.height + 40}px`,
                width: `${parentRect.width}px`,
              });
            } else {
              // When collapsed, use fixed top position based on index and set left/right
              setPosition(originalPosition);
            }
          });
        });
      }
    }
  }, [isExpanded, originalPosition]);
  return (
    <div
      ref={containerRef}
      className={classNames(
        'bg-[rgb(0,0,0,0.4)] backdrop-blur-sm overflow-hidden z-30 absolute',
        'transition-[top,bottom,height,opacity,width,transform, left, right] duration-500 ease-in-out',
        {
          hidden: isHidden,
        }
      )}
      style={{
        ...position,
      }}
    >
      <button
        ref={buttonRef}
        onClick={onClick}
        className={classNames(
          'w-full text-center px-40 rounded-lg border-4 transition-all duration-500 text-details border-yellow cursor-pointer',
          {
            'opacity-0 h-0 w-0 hidden': isExpanded,
            'py-6 opacity-100': !isExpanded,
          }
        )}
      >
        <h3 className="font-extrabold text-2xl">{option.title}</h3>
      </button>
      <ExpandedContent
        isExpanded={isExpanded}
        option={option}
        onClose={onClose}
        category={category}
      />
    </div>
  );
};

export default CategoryOptionButton;
