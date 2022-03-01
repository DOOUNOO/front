import Searchbox from "../../components/Searchbox";
import { useState } from "react";
import "./index.scss";

const FindOffers = () => {
  const [sport, setSport] = useState("");
  const [jetSet, setJetSet] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [pricing, setPricing] = useState("");
  return (
    <div className="findoffers-container">
      <h1>Trouvez la meilleure offre</h1>
      <form className="offer-searchbar">
        <div className="visual-wrapper">
          <div className="search-offers-wrapper">
            <Searchbox
              categoryName="Sport"
              category={sport}
              setCategory={setSport}
              isFirst="true"
            />
            <Searchbox
              categoryName="Category"
              category={jetSet}
              setCategory={setJetSet}
            />
            <Searchbox
              categoryName="Category"
              category={jetSet}
              setCategory={setJetSet}
            />
            <Searchbox
              categoryName="Category"
              category={jetSet}
              setCategory={setJetSet}
            />
          </div>
        </div>
      </form>

      <section></section>
    </div>
  );
};

export default FindOffers;
