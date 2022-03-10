import "./index.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Searchbox from "../Searchbox";
import Button from "../Button.js";

const MyAccount = ({
  expertAvatar,
  data,
  handleSubmit,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  activateOffer,
  setActivateOffer,
  category,
  setCategory,
  subcategory,
  setSubcategory,
  titleDescription,
  setTitleDescription,
  description,
  setDescription,
  email,
  setEmail,
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
              <FontAwesomeIcon
                className="cloud-icon"
                icon="cloud-upload"
                size="xl"
              />
              insérer une image
            </label>

            <div className="img-specifications">
              <div className="max-size-spec">Taille maximum: 2MB</div>
              <div className="format-spec">Format: JPG ou PNG</div>
            </div>
          </div>
          {/* second part right container */}
          <form className="edit-profil" onSubmit={handleSubmit}>
            <div className="firstname-to-update">
              <label className="edit-label" htmlFor="">
                Prénom
              </label>
              <input
                type="text"
                placeholder={data.account.firstName}
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
              />
            </div>
            <div className="lastname-to-update">
              <label className="edit-label" htmlFor="">
                Nom
              </label>
              <input
                type="text"
                placeholder={data.account.lastName}
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
              />
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
            <div className="myaccount-submit-container">
              <div></div>
              <Button isInputBtn={true} handleSubmit={handleSubmit} />
            </div>
          </form>
        </div>
        <form className="edit-category-subcategory">
          <div className="choose-category">
            <Searchbox
              data={data}
              isFirst={true}
              filterName="Catégorie"
              filter={category}
              setFilter={setCategory}
            />
          </div>
          {category && category !== "" && (
            <div className="subcategory-input-wrapper">
              <div className="choose-subcategory">
                <Searchbox
                  data={data}
                  isSecond={true}
                  filterName="Spécialisation"
                  filter={subcategory}
                  setFilter={setSubcategory}
                  filterReference={category}
                />
              </div>
              <Button isInputBtn={true} />
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
