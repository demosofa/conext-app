import './Category.css';

const Category = ({ handleByCategory, categoryCounts, totalItemCount }) => {
  return (
    <div>
      <p className="category-title">Category</p>
      <div className="category">
        <p onClick={() => handleByCategory('all')}>All ({totalItemCount})</p>
        <p onClick={() => handleByCategory('covid')}>
          COVID19 Support ({categoryCounts['covid'] || 0})
        </p>
        <p onClick={() => handleByCategory('collaboration')}>
          Collaboration ({categoryCounts['collaboration'] || 0})
        </p>
        <p onClick={() => handleByCategory('legacy')}>
          Business Legacy ({categoryCounts['legacy'] || 0})
        </p>
        <p onClick={() => handleByCategory('recruitment')}>
          Recruitment ({categoryCounts['recruitment'] || 0})
        </p>
        <p onClick={() => handleByCategory('life-food-activities')}>
          Life, Food, Activities ({categoryCounts['life-food-activities'] || 0})
        </p>
        <p onClick={() => handleByCategory('lost')}>
          Lost n Found ({categoryCounts['lost'] || 0})
        </p>
      </div>
    </div>
  );
};

export default Category;
