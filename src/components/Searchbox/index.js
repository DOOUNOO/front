import "./index.scss";
import categories from "../../assets/categories.json";
const Searchbox = ({
  filterName,
  filter,
  setFilter,
  filterReference,
  isFirst,
}) => {
  /* This component appears in Searchbar */
  let categoryIndex = null;

  switch (filterReference) {
    case "Mode":
      categoryIndex = 0;

      break;
    case "Cosmétique":
      categoryIndex = 1;

      break;
    case "Art":
      categoryIndex = 2;

      break;
    case "Santé":
      categoryIndex = 3;

      break;
    case "Sport":
      categoryIndex = 4;

    case "Éducation":
      categoryIndex = 5;

      break;
    case "Restauration":
      categoryIndex = 6;

      break;
    case "Business":
      categoryIndex = 7;

      break;
    case "Droit":
      categoryIndex = 8;

      break;
    case "Technologie":
      categoryIndex = 9;

      break;
  }

  const createOptions = (numberIndex) => {
    const Options = [];
    for (let i = 0; i < 1; i++) {
      for (let j = 0; j < categories[numberIndex].subcategories.length; j++) {
        if (
          Options.includes(categories[numberIndex].subcategories[j]) === false
        ) {
          Options.push(
            <option key={j} value={categories[numberIndex].subcategories[j]}>
              {categories[numberIndex].subcategories[j]}
            </option>
          );
        }
      }
    }
    return Options;
  };

  return (
    <div className="search-container">
      {filter === "" ? (
        <>
          <div
            className={!isFirst ? "search-separator" : "search-separator none"}
          ></div>
          <div className="search-content-wrapper">
            <label htmlFor={filterName}>{filterName}</label>
            <select
              name={filter}
              onChange={(event) => {
                setFilter(event.target.value);
              }}
            >
              <option defaultValue="" className="option-default-value">
                Sélectionnez une option &nbsp; &nbsp; v
              </option>
              {categories.map((elem, index) => {
                return (
                  isFirst && (
                    <option
                      id={`option${index}`}
                      key={index}
                      index={index}
                      value={elem.categoryName}
                    >
                      {elem.categoryName}
                    </option>
                  )
                );
              })}

              {!isFirst &&
                categoryIndex !== null &&
                createOptions(categoryIndex)}
            </select>
          </div>
        </>
      ) : (
        <>
          <div
            className={!isFirst ? "search-separator" : "search-separator none"}
          ></div>
          <div className="search-content-wrapper">
            <label htmlFor="category">{filterName}</label>
            <div className="category-search-selection">
              <div className="category-selected">{filter}</div>
              <button
                className="close-selected-btn"
                onClick={() => setFilter("")}
              >
                x
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Searchbox;
