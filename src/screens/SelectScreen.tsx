import { useTranslation } from 'react-i18next';
import CategorySelectButton from '../components/CategorySelectButton';
import { getSelectScreenData } from '../data/content';
import { Category, slugToCategory } from '../utils/categories';

/**
 * Props for the SelectScreen component
 */
interface SelectScreenProps {
  /** Initial data from server-side rendering (optional) */
  initialData?: ReturnType<typeof getSelectScreenData>;
}

/**
 * The category selection screen component that displays available categories.
 * Shows a header with description and a grid of category selection buttons.
 * Each button links to the corresponding detail page.
 *
 * @param props - SelectScreen component props
 * @returns The select screen layout with category buttons
 */
const SelectScreen = ({ initialData }: SelectScreenProps = {}) => {
  const { t } = useTranslation();
  const selectScreenData = initialData || getSelectScreenData(t);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Main Content */}
      <div className="relative flex pt-20 pr-20 py-20">
        <div className="flex gap-10 flex-1">
          {/* Header */}
          <div className="basis-[635px] pt-[160px]">
            <div className="pr-24">
              <h1 className="text-4xl font-bold text-yellow mb-4 ">
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
              // Convert category name to Category enum
              const categoryEnum =
                Object.values(Category).find(c => c === category.name) ||
                slugToCategory(
                  category.name
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/\//g, '-')
                ) ||
                Category.Agriculture;

              return (
                <CategorySelectButton
                  key={category.name}
                  category={categoryEnum}
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
