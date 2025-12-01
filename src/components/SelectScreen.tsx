import CategorySelectButton from './CategorySelectButton';
import { selectScreenData } from '../data/content';

const SelectScreen = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Main Content */}
      <div className="relative flex pt-20 pr-20 py-20">
        <div className="flex justify-between flex-1">
          {/* Header */}
          <div className="basis-[40%] mt-[20vh]">
            <div className="pr-24">
              <h1 className="text-4xl font-bold text-yellow-400 mb-4 ">
                {selectScreenData.name}
              </h1>
              <p className="text-xl font-bold mb-10 leading-none pr-4">
                {selectScreenData.description}
              </p>
              <p className="text-lg  max-w-3xl leading-snug">
                {selectScreenData.details} <br /> <br />
                {selectScreenData.detailsLine2}
              </p>
            </div>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-2 gap-y-8 gap-x-10 ">
            {selectScreenData.categories.map(category => {
              // Convert category name to URL-friendly format
              const categorySlug = category.name
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/\//g, '-');

              return (
                <CategorySelectButton
                  key={category.name}
                  name={category.name}
                  imageUrl={category.imageUrl}
                  href={`/detail/${categorySlug}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectScreen;
