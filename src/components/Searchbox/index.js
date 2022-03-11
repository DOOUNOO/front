import "./index.scss";
import categories from "../../assets/categories.json";

const Searchbox = ({
  data,
  filterName,
  filter,
  setFilter,
  filterReference,
  setPriceMin,
  setPriceMax,
  isFirst,
  isSecond,
  isThird,
  isFourth,
  page,
  setPage,
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
      break;
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
    default:
      categoryIndex = null;
  }

  const resetPriceRange = () => {
    setPriceMin(1);
    setPriceMax(500);
    setPage(1);
  };

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
              className={
                (isSecond && filterReference !== "") || !isSecond
                  ? "option-select"
                  : "category-select"
              }
              name={filter}
              onChange={(event) => {
                setFilter(event.target.value);
                if (page) {
                  setPage(1);
                }

                if (isThird) {
                  if (event.target.value === "1 € - 30 €") {
                    setPriceMin(1);
                    setPriceMax(30);
                  } else if (event.target.value === "1 € - 50 €") {
                    setPriceMin(1);
                    setPriceMax(50);
                  } else if (event.target.value === "50 € - 70 €") {
                    setPriceMin(50);
                    setPriceMax(70);
                  } else if (event.target.value === "70 € - 100 €") {
                    setPriceMin(70);
                    setPriceMax(100);
                  } else {
                    setPriceMin(100);
                    setPriceMax(500);
                  }
                }
              }}
            >
              <option defaultValue="">
                {(isSecond && filterReference !== "") || !isSecond
                  ? "Sélectionnez une option"
                  : "Sélectionnez une catégorie"}
              </option>
              {categories.map((elem, index) => {
                return (
                  isFirst && (
                    <option key={index} index={index} value={elem.categoryName}>
                      {elem.categoryName}
                    </option>
                  )
                );
              })}

              {!isFirst &&
                categoryIndex !== null &&
                createOptions(categoryIndex)}

              {isThird && (
                <>
                  <option value="1 € - 30 €">1 € - 30 €</option>
                  <option value="1 € - 50 €">1 € - 50 €</option>
                  <option value="50 € - 70 €">50 € - 70 €</option>
                  <option value="70 € - 100 €">70 € - 100 €</option>
                  <option value="100 € & +">100 € & +</option>
                </>
              )}

              {isFourth && (
                <>
                  <option value="Lundi">Lundi</option>
                  <option value="Mardi">Mardi</option>
                  <option value="Mercredi">Mercredi</option>
                  <option value="Jeudi">Jeudi</option>
                  <option value="Vendredi">Vendredi</option>
                  <option value="Samedi">Samedi</option>
                  <option value="Dimanche">Dimanche</option>
                </>
              )}
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
                onClick={(event) => {
                  event.preventDefault();
                  setFilter("");
                  if (page) {
                    setPage(1);
                  }

                  if (isThird) {
                    resetPriceRange();
                  }
                }}
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
