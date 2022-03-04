import "./index.scss";

import Searchbox from "../Searchbox";

const Searchbar = ({
  data,
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
          />
          <Searchbox
            filterName="SPÉCIALISATION"
            filterReference={category}
            filter={subcategory}
            setFilter={setSubcategory}
            isSecond={true}
          />

          <Searchbox
            filterName="TARIF HORAIRE"
            filter={priceFilter}
            setFilter={setPriceFilter}
            setPriceMin={setPriceMin}
            setPriceMax={setPriceMax}
            isThird={true}
          />
          <Searchbox
            filterName="MES DISPONIBILITÉS"
            filter={availability}
            setFilter={setAvailability}
            data={data}
          />
        </div>
      </div>
    </form>
  );
};

export default Searchbar;
