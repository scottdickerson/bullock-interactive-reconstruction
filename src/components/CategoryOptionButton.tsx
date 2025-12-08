import type { ContentOption, ArtifactOption } from '../data/content';

interface CategoryOptionButtonProps {
  option: ContentOption | ArtifactOption;
  isExpanded: boolean;
  onClick: () => void;
}

const CategoryOptionButton = ({
  option,
  isExpanded,
  onClick,
}: CategoryOptionButtonProps) => {
  return (
    <div className="bg-[rgb(0,0,0,0.4)] z-20 backdrop-blur-sm ">
      <button
        onClick={onClick}
        className={`w-full text-center px-40 py-6 rounded-lg border-4 transition-all duration-300 ${
          isExpanded
            ? 'bg-yellow-400 text-black border-yellow'
            : 'text-details border-yellow'
        }`}
      >
        <h3 className="font-extrabold text-2xl">{option.title}</h3>
      </button>
    </div>
  );
};

export default CategoryOptionButton;
