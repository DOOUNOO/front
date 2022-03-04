import Searchbox from "../../components/Searchbox";
import { useState } from "react";
import "./index.scss";

import ExpertCard from "../../components/ExpertCard";

import avatarImg from "../../assets/images/student.jpg";

const FindExperts = () => {
  /* Awaiting the backend to play with datas here */

  const [mode, setMode] = useState("");
  const [artisanat, setArtisanat] = useState("");
  const [miss, setMiss] = useState("");
  const [pricing, setPricing] = useState("");
  return (
    <>
      <div className="find-experts-container">
        <h1>Trouvez votre expert</h1>
        <form className="expert-searchbar">
          <div className="visual-wrapper">
            <div className="search-experts-wrapper">
              <Searchbox
                categoryName="Mode"
                category={mode}
                setCategory={setMode}
                isFirst="true"
              />
              <Searchbox
                categoryName="Artisanat"
                category={artisanat}
                setCategory={setArtisanat}
              />
              <Searchbox
                categoryName="Autre"
                category={miss}
                setCategory={setMiss}
              />
              <Searchbox
                categoryName="Tarif"
                category={pricing}
                setCategory={setPricing}
              />
            </div>
          </div>
        </form>
      </div>
      <section className="find-experts-feed">
        <ExpertCard
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
          totalRates="6"
          totalComments="16"
          expertPrice="54"
          firstTextBtn="Voir profil"
          secondTextBtn="Contacter"
          firstUrl="/"
          secondUrl="/"
        />
      </section>
    </>
  );
};

export default FindExperts;
