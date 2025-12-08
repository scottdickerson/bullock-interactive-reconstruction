interface CategorySelectButtonProps {
  name: string;
  imageUrl: string;
  href: string;
  className?: string;
}

const CategorySelectButton = ({
  name,
  imageUrl,
  href,
  className = '',
}: CategorySelectButtonProps) => {
  return (
    <a
      href={href}
      className={`group relative block overflow-hidden rounded-lg transition-all duration-300 transform hover:scale-105 ${className} h-[280px]  w-[390px]`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Blur Overlay - positioned as sibling to blur the background image */}
      <div className="absolute inset-4 backdrop-blur-[2px] z-10 bg-black/50 rounded-lg border-4 border-yellow "></div>

      {/* Content Overlay */}
      <div className="relative z-20 flex items-center justify-center h-full p-18 ">
        <h3 className="text-2xl font-bold text-button group-hover:text-yellow transition-colors text-center">
          {name.split('/').join('/ ')}
        </h3>
      </div>
    </a>
  );
};

export default CategorySelectButton;
