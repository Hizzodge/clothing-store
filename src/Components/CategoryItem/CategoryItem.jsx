import "./category-item.scss";

const CategoryItem = ({ categoriesProps }) => {
  const { title, imageUrl } = categoriesProps;
  return (
    <div className="category">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
