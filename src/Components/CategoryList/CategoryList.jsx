import CategoryItem from "../CategoryItem/CategoryItem";
import "./category-list.scss";

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">
      {categories.map((category) => (
        <CategoryItem categoriesProps={category} key={category.id} />
      ))}
    </div>
  );
};

export default CategoryList;
