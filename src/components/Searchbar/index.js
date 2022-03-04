import "./index.scss";

import Searchbox from "../Searchbox";

const Searchbar = ({
  data,
  category,
  setCategory,
  subcategory,
  setSubcategory,
  priceMin,
  priceMax,
  availability,
  setAvailability,
  sexPriceMin,
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
            isFirst="true"
          />
          <Searchbox
            filterName="SPÉCIALISATION"
            filterReference={category}
            filter={subcategory}
            setFilter={setSubcategory}
            data={data}
          />

          <Searchbox
            filterName="TARIF HORAIRE"
            filter={availability}
            setFilter={setAvailability}
            data={data}
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
