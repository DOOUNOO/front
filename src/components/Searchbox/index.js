import "./index.scss";

const Searchbox = ({ categoryName, category, setCategory, isFirst }) => {
  return (
    <div className="search-container">
      {category === "" ? (
        <>
          <div
            className={!isFirst ? "search-separator" : "search-separator none"}
          ></div>
          <div className="search-content-wrapper">
            <label htmlFor="category">{categoryName}</label>
            <select
              name={categoryName}
              onChange={(event) => {
                setCategory(event.target.value);
              }}
            >
              <option defaultValue="Selected" className="option-default-value">
                Sélectionnez une option &nbsp; &nbsp; v
              </option>
              <option value="Mode">Mode</option>
              <option value="Travail du cuir">Travail du cuir</option>
              <option value="Création de marque">Création de marque</option>
            </select>
          </div>
        </>
      ) : (
        <>
          <div
            className={!isFirst ? "search-separator" : "search-separator none"}
          ></div>
          <div className="search-content-wrapper">
            <label htmlFor="category">{categoryName}</label>
            <div className="category-search-selection">
              <div className="category-selected">{category}</div>
              <button
                className="close-selected-btn"
                onClick={() => setCategory("")}
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
