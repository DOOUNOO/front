import "./index.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../../components/Button.js";
import Searchbox from "../Searchbox";

const MyAccount = ({
  category,
  subcategory,
  setCategory,
  setSubcategory,
  expertAvatar,
}) => {
  return (
    <div className="my-account-container">
      <h2 className="account-update-title">Paramètres du compte</h2>
      {/* first part right container */}
      <div className="border-wrapper">
        <div className="account-to-update-wrapper">
          <div className="update-img-container">
            {expertAvatar ? (
              <div className="img-to-update">
                <img src={expertAvatar} alt="" />
              </div>
            ) : (
              <div className="default-profile-picture"></div>
            )}
            <label htmlFor="" className="custom-file-upload">
              <input type="file" accept=".jpeg, .png" />
              <FontAwesomeIcon icon="cloud-upload" />
            </label>

            <div className="img-specifications">
              <div className="max-size-spec">Taille maximum: 2MB</div>
              <div className="Format">Format: JPG ou PNG</div>
            </div>
          </div>
          {/* second part right container */}
          <form className="edit-profil">
            <div className="firstname-to-update">
              <label htmlFor="">Prénom</label>
              <input type="text" />
            </div>
            <div className="lastname-to-update">
              <label htmlFor="">Nom</label>
              <input type="text" />
            </div>
            <div className="phonenumber-to-update">
              <label htmlFor="">Numéro de téléphone</label>
              <input type="text" />
            </div>
            <div className="social-media-connect">
              <label htmlFor="">Réseaux sociaux</label>
              <div className="social-medias-link">
                <div className="linkedin-link">
                  <div className="social-media-icon">
                    <img src="" alt="" />
                  </div>
                  <input type="text" />
                </div>
                <div className="instagram-link">
                  <div className="social-media-icon">
                    <img src="" alt="" />
                  </div>
                  <input type="text" />
                </div>
              </div>
            </div>
          </form>

          {/* part 2 Category & Subcategory */}

          {/* part 3 Title & Description  */}
          {/* part 4 Availability */}
        </div>
        <form className="edit-category-subcategory">
          <div className="choose-category">
            <Searchbox
              isFirst={true}
              filterName="Catégorie"
              filter={category}
              setFilter={setCategory}
            />
          </div>
          {category.length > 2 && (
            <div className="choose-subcategory">
              <Searchbox
                isSecond={true}
                filterName="Spécialisation"
                filter={subcategory}
                setFilter={setSubcategory}
                filterReference={category}
              />
            </div>
          )}
        </form>
        <form className="edit-title-description">
          <div className="offer-title">
            <label htmlFor="offertitle">Titre de l'offre</label>
            <input className="offer-title-input" type="text" />
          </div>
          <div className="offer-description">
            <label htmlFor="desctitle">Description de l'offre</label>
            <textarea name="descrtitle" id="" cols="30" rows="10"></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
