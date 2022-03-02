import Searchbox from "../../components/Searchbox";
import { useState } from "react";
import "./index.scss";

import OfferCard from "../../components/OfferCard";

import avatarImg from "../../assets/student.jpg";

const FindOffers = () => {
  const [sport, setSport] = useState("");
  const [jetSet, setJetSet] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [pricing, setPricing] = useState("");
  return (
    <>
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
      </div>
      <section className="find-experts-container">
        <OfferCard
          expertImg={avatarImg}
          isBaseline={true}
          expertBaseline="Carpe Diem"
          expertName="Yoko Ono"
          expertCategory="Mode"
          expertTotalRates="131 entrepreneurs aidés"
          expertKeywords="Couture, haute couture, patronnage, sourcing, etc..."
          isIntroParagraph={true}
          title="Maroquinerie et savoir faire dans le marché du luxe"
          paragraph="Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum
     "
          firstTextBtn="Voir profil"
          secondTextBtn="Contacter"
          firstUrl="/"
          secondUrl="/"
        />
      </section>
    </>
  );
};

export default FindOffers;
