import educationWoodblock from '../assets/education-woodblock.png?url';
import politicsWoodblock from '../assets/politics-woodblock.png?url';
import communityLeadershipWoodblock from '../assets/community-leadership-woodblock.png?url';
import { useEffect, useState, useRef } from 'react';

const Woodblocks = () => {
  // Start with -in suffix for enter animation, then switch to no suffix for exit animation
  const [viewTransitionSuffix, setViewTransitionSuffix] = useState('-in');
  const politicsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const communityRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // After render, switch to no -in suffix so when leaving the page it will animate out
    const updateTransitionNames = (suffix: string) => {
      const suffixValue = suffix;
      if (politicsRef.current) {
        politicsRef.current.style.viewTransitionName = `politics-woodblock${suffixValue}`;
      }
      if (educationRef.current) {
        educationRef.current.style.viewTransitionName = `education-woodblock${suffixValue}`;
      }
      if (communityRef.current) {
        communityRef.current.style.viewTransitionName = `community-leadership-woodblock${suffixValue}`;
      }
      setViewTransitionSuffix(suffixValue);
    };

    // Switch to no -in suffix after render so exit animation works
    updateTransitionNames('');
  }, []);

  return (
    <div className="absolute bottom-0 left-0 w-full h-[400px] flex items-end z-0">
      {/* Politics Woodblock */}
      <div
        ref={politicsRef}
        style={{
          viewTransitionName: `politics-woodblock${viewTransitionSuffix}`,
        }}
        className="mix-blend-multiply transition-all duration-1000 ease-in-out"
        id="politics-woodblock"
      >
        <img
          src={politicsWoodblock}
          alt="Politics Woodblock"
          className="w-full h-full object-cover scale-x-[-1]"
        />
      </div>

      {/* Education Woodblock */}
      <div
        ref={educationRef}
        style={{
          viewTransitionName: `education-woodblock${viewTransitionSuffix}`,
        }}
        className="mix-blend-multiply scale-175 transition-all duration-1000 ease-in-out"
        id="education-woodblock"
      >
        <img
          src={educationWoodblock}
          alt="Education Woodblock"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Community Leadership Woodblock */}
      <div
        ref={communityRef}
        style={{
          viewTransitionName: `community-leadership-woodblock${viewTransitionSuffix}`,
        }}
        className="mix-blend-multiply max-w-[800px] translate-x-[210px] transition-all duration-1000 ease-in-out"
        id="community-leadership-woodblock"
      >
        <img
          src={communityLeadershipWoodblock}
          alt="Community Leadership Woodblock"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Woodblocks;
