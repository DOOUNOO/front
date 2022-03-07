import "./index.scss";

import Searchbox from "../Searchbox";

const Searchbar = ({
  category,
  setCategory,
  subcategory,
  setSubcategory,
  priceFilter,
  setPriceFilter,
  priceMin,
  priceMax,
  availability,
  setAvailability,
  setPriceMin,
  setPriceMax,
  setPage,
}) => {
  return (
    <form className="expert-searchbar">
      <div className="visual-wrapper">
        <div className="search-experts-wrapper">
          <Searchbox
            filterName="CATÉGORIE"
            filter={category}
            setFilter={setCategory}
            isFirst={true}
            setPage={setPage}
          />
          <Searchbox
            filterName="SPÉCIALISATION"
            filterReference={category}
            filter={subcategory}
            setFilter={setSubcategory}
            isSecond={true}
            setPage={setPage}
          />

          <Searchbox
            filterName="TARIF HORAIRE"
            filter={priceFilter}
            setFilter={setPriceFilter}
            setPriceMin={setPriceMin}
            setPriceMax={setPriceMax}
            isThird={true}
            setPage={setPage}
          />
          <Searchbox
            filterName="MES DISPONIBILITÉS"
            filter={availability}
            setFilter={setAvailability}
            setPage={setPage}
          />
        </div>
      </div>
    </form>
  );
};

export default Searchbar;
