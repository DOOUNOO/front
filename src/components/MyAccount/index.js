import "./index.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Searchbox from "../Searchbox";
import Button from "../Button.js";

const MyAccount = ({
  updateAccount,
  setUpdateAccount,
  activateOffer,
  setActivateOffer,
  expertAvatar,
  data,
  handleSubmit,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  setHourlyPrice,
  setKeywords,
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
  if (data.account.activateOffer === true) {
    setActivateOffer(data.account.activateOffer);
  }

  return (
    <form className="my-account-container" onSubmit={handleSubmit}>
      <h2 className="account-update-title">Paramètres du compte</h2>
      <div className="activate-offer">
        <label htmlFor="">Activer mon offre</label>
        {!data.account.activateOffer === true ? (
          <input
            type="checkbox"
            onChange={() => {
              setActivateOffer(!activateOffer);
              console.log(activateOffer);
            }}
          />
        ) : (
          <input
            type="checkbox"
            onChange={() => {
              setActivateOffer(!activateOffer);
            }}
            checked
          />
        )}
      </div>
      {/* first part right container */}
      <div className="border-wrapper">
        {updateAccount && (
          <div
            className={
              updateAccount
                ? "account-to-update-wrapper"
                : "account-to-upgrade-wrapper noborder"
            }
          >
            <div className="update-img-container">
              {expertAvatar ? (
                <div className="img-to-update">
                  <img src={expertAvatar} alt="" />
                </div>
              ) : (
                <div className="default-profile-picture">
                  <p>{data.account.firstName.charAt(0).toUpperCase()}</p>
                </div>
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
            <div className="edit-profil">
              <div className="firstname-to-update">
                <label className="edit-label" htmlFor="">
                  <strong>Prénom</strong>
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
                  <strong>Nom</strong>
                </label>
                <input
                  type="text"
                  placeholder={data.account.lastName}
                  onChange={(event) => {
                    setLastName(event.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {!updateAccount && (
          <div
            className={
              activateOffer
                ? "account-to-update-wrapper"
                : "account-to-update-wrapper noborder"
            }
          >
            <div className="update-img-container">
              {expertAvatar ? (
                <div className="img-to-update">
                  <img src={expertAvatar} alt="" />
                </div>
              ) : (
                <div className="default-profile-picture">
                  <p>{data.account.firstName.charAt(0).toUpperCase()}</p>
                </div>
              )}
            </div>
            {/* second part right container */}
            <div className="edit-profil">
              <div className="filled-infos">
                <strong>Prénom</strong>
                <div className="informations-row">{data.account.firstName}</div>
              </div>
              <div className="filled-infos">
                <strong>Nom</strong>
                <div className="informations-row">{data.account.lastName}</div>
              </div>
            </div>
          </div>
        )}

        {activateOffer && (
          <>
            {!updateAccount ? (
              <div className="edit-container oneline">
                {data.account.hourlyPrice ? (
                  <div>
                    <h3>Votre taux horaire : {data.account.hourlyPrice} € </h3>
                  </div>
                ) : (
                  <div>
                    <h3>Votre taux horaire :</h3> Vous n'avez pas encore défini
                    votre taux horaire.
                  </div>
                )}
              </div>
            ) : (
              <div className="input-edit">
                <label htmlFor="">Quel est votre taux horaire ?</label>
                <input
                  type="number"
                  className="input-block"
                  placeholder={
                    data.account.hourlyPrice && `${data.account.hourlyPrice} €`
                  }
                  onChange={(event) => {
                    setHourlyPrice(event.target.value);
                  }}
                />
              </div>
            )}

            {!updateAccount ? (
              <div className="edit-container oneline">
                {data.account.keywords ? (
                  <div>
                    <h3>
                      {`Les mots-clés pour définir votre expertise : 
                      ${data.account.keywords}`}
                    </h3>
                  </div>
                ) : (
                  <div>
                    <h3>Les mots-clés pour définir votre expertise :</h3>
                    Vous n'avez pas encore choisi de mots-clés.
                  </div>
                )}
              </div>
            ) : (
              <div className="input-edit">
                <label htmlFor="">
                  Quels sont les mots-clés qui décrivent le mieux votre
                  expertise ?
                </label>
                <input
                  type="text"
                  className="input-block long"
                  placeholder={data.account.keywords && data.account.keywords}
                  onChange={(event) => {
                    setKeywords(event.target.value);
                  }}
                />
              </div>
            )}

            {!updateAccount && (
              <div className="edit-container oneline">
                {data.account.category ? (
                  <div className="choose-category">
                    <h3>Votre catégorie : {data.account.category}</h3>
                  </div>
                ) : (
                  <div className="choose-category">
                    <h3>Votre catégorie :</h3>
                    Vous n'avez pas encore de catégorie.
                  </div>
                )}

                {data.account.subcategory ? (
                  <div className="subcategory-input-wrapper oneline">
                    <div className="choose-subcategory">
                      <h3>Votre spécialité : {data.account.subcategory}</h3>
                    </div>
                  </div>
                ) : (
                  <div className="subcategory-input-wrapper">
                    <div className="choose-subcategory">
                      <h3>Votre spécialité :</h3>
                      Vous n'avez pas encore de spécialisation.
                    </div>
                  </div>
                )}
              </div>
            )}

            {updateAccount && (
              <>
                <div className="edit-container" onSubmit={handleSubmit}>
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
                    </div>
                  )}
                </div>
              </>
            )}
            {!updateAccount && (
              <div className="title-description">
                {data.account.titleDescription ? (
                  <div className="title-container">
                    <div className="title bulk">
                      <h3>
                        Titre de votre offre : {data.account.titleDescription}
                      </h3>
                    </div>
                  </div>
                ) : (
                  <div className="title-container">
                    <div className="title">
                      <h3>Titre de votre offre :</h3>
                      Vous n'avez pas encore défini d'intitulé pour votre offre.
                    </div>
                  </div>
                )}
                {data.account.description ? (
                  <div className="description-container">
                    <div className="description">
                      <h3>Description de votre offre</h3>
                      <p className="description-paragraph">
                        {data.account.description.length > 100
                          ? `${data.account.description.slice(0, 50)}...`
                          : data.account.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="description-container">
                    <div className="description">
                      <h3>Votre offre :</h3>
                      Vous n'avez pas encore défini d'offre.
                    </div>
                  </div>
                )}
              </div>
            )}
            {updateAccount && (
              <div className="edit-title-description" onSubmit={handleSubmit}>
                <div className="offer-title">
                  <label htmlFor="offertitle">Titre de l'offre</label>
                  <input
                    className="offer-title-input"
                    type="text"
                    placeholder={
                      data.account.titleDescription &&
                      data.account.titleDescription
                    }
                    onChange={(event) => {
                      setTitleDescription(event.target.value);
                    }}
                  />
                </div>
                <div className="offer-description">
                  <label htmlFor="desctitle">Description de l'offre</label>
                  <textarea
                    name="descrtitle"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder={
                      data.account.description && data.account.description
                    }
                    onChange={(event) => {
                      setDescription(event.target.value);
                    }}
                  ></textarea>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {!updateAccount && activateOffer && (
        <div className="btn-alternate">
          <Button
            isNormalBtn={true}
            squared={true}
            functionToCall={() => {
              setUpdateAccount(true);
            }}
          >
            Modifier mes informations
          </Button>
        </div>
      )}

      {!activateOffer && !updateAccount && (
        <div className="btn-alternate">
          <Button
            isNormalBtn={true}
            squared={true}
            functionToCall={() => {
              setUpdateAccount(true);
            }}
          >
            Modifier mes informations
          </Button>
        </div>
      )}

      {updateAccount && activateOffer && (
        <div className="myaccount-submit-container bottom">
          <div className="btn-cancel-submit">
            <Button
              isNormalBtn={true}
              noBackgroundCancel={true}
              squared={true}
              functionToCall={() => {
                setUpdateAccount(false);
              }}
            >
              Annuler
            </Button>
          </div>
          <div className="btn-cancel-submit">
            <Button isInputBtn={true} handleSubmit={handleSubmit} />
          </div>
        </div>
      )}
      {!activateOffer && updateAccount && (
        <div className="myaccount-submit-container bottom">
          <div className="btn-cancel-submit">
            <Button
              isNormalBtn={true}
              noBackgroundCancel={true}
              squared={true}
              functionToCall={() => {
                setUpdateAccount(false);
              }}
            >
              Annuler
            </Button>
          </div>
          <div className="btn-cancel-submit">
            <Button isInputBtn={true} handleSubmit={handleSubmit} />
          </div>
        </div>
      )}
    </form>
  );
};

export default MyAccount;
