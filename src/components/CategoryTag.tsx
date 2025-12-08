interface CategoryTagProps {
  category: string;
}

const CategoryTag = ({ category }: CategoryTagProps) => {
  return (
    <div className="bg-yellow border-4 border-yellow rounded-lg pl-24 pr-6 py-3 fixed -left-2 top-10 ">
      <span className="text-purple font-bold text-2xl ">{category}</span>
    </div>
  );
};

export default CategoryTag;
