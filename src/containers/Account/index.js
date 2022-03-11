import "./index.scss";
import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";

import MyAccount from "../../components/MyAccount";
import MyEmail from "../../components/MyEmail";
import MyPassword from "../../components/MyPassword";
import MyAvailabilities from "../../components/MyAvailabilities";
import LoadingSpinner from "../../components/LoadingSpinner";

const Account = ({ token }) => {
  // What we want to display ?

  const [myAccount, setMyAccount] = useState(true);
  // By default, the first displayed component is myAccount

  const [updateAccount, setUpdateAccount] = useState(false);

  const [myEmail, setMyEmail] = useState(false);
  const [myPassword, setMyPassword] = useState(false);
  const [myAvailabilities, setMyAvailabilities] = useState(false);

  // State for data
  const [data, setData] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // Params for data
  const params = useParams();

  // State for value to update
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [activateOffer, setActivateOffer] = useState(false);

  const [hourlyPrice, setHourlyPrice] = useState(0);

  const [keywords, setKeywords] = useState("");

  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");

  const [titleDescription, setTitleDescription] = useState("");
  const [description, setDescription] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [day, setDay] = useState({
    account: {
      availabilities: {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
      },
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          /* `http://localhost:3000/account/${params.id}` */
          `https://doounoo.herokuapp.com/account/${params.id}`
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchData();
  }, [params.id, token]);

  const handleSubmit = async (event) => {
    try {
      const res = await axios.patch(
        /* `http://localhost:3000/account/${params.id}`, */
        `https://doounoo.herokuapp.com/account/${params.id}`,
        {
          email: email,
          account: {
            firstName: firstName,
            lastName: lastName,
            password: password,
            keywords: keywords,
            hourlyPrice: hourlyPrice,
            titleDescription: titleDescription,
            description: description,
            category: category,
            subcategory: subcategory,
            activateOffer: activateOffer,
            availabilities: {
              monday: day.monday,
              tuesday: day.tuesday,
              wednesday: day.wednesday,
              thursday: day.thursday,
              friday: day.friday,
              saturday: day.saturday,
              sunday: day.sunday,
            },
          },
        }
      );

      console.log(res);
      console.log("success");
    } catch (error) {
      console.log(error.message);
      console.log(error.response);
      if (error.response.status === 400 || error.response.status === 401) {
        setErrorMessage("Mauvais email et/ou mot de passe");
      }
    }
  };

  const handleClickOnMyAccount = () => {
    setMyAccount(true);
    setMyEmail(false);
    setMyPassword(false);
    setMyAvailabilities(false);
  };

  const handleClickOnMyAvailabilities = () => {
    setMyAvailabilities(true);
    setMyAccount(false);
    setMyEmail(false);
    setMyPassword(false);
  };
  const handleClickOnMyEmail = () => {
    setMyEmail(true);
    setMyAccount(false);
    setMyPassword(false);
    setMyAvailabilities(false);
  };
  const handleClickOnMyPassword = () => {
    setMyPassword(true);
    setMyAccount(false);
    setMyEmail(false);
    setMyAvailabilities(false);
  };

  return token ? (
    isLoading ? (
      <LoadingSpinner />
    ) : (
      <div className="account-container">
        {/* Left container */}
        <aside className="account-menu">
          <ul>
            <li onClick={handleClickOnMyAccount}>Compte</li>
            <li onClick={handleClickOnMyAvailabilities}>Disponibilités</li>
            <li onClick={handleClickOnMyEmail}>Votre e-mail</li>
            <li onClick={handleClickOnMyPassword}>Mot de passe</li>
            <li>Etablissement</li>
            <li>Moyens de paiement</li>
            <li>Historique de paiement</li>
          </ul>
        </aside>
        {/* Right container */}
        <div className="account-to-update">
          {myAccount && (
            <MyAccount
              data={data}
              updateAccount={updateAccount}
              setUpdateAccount={setUpdateAccount}
              activateOffer={activateOffer}
              setActivateOffer={setActivateOffer}
              errorMessage={errorMessage}
              handleSubmit={handleSubmit}
              expertAvatar={data.account.avatarURL}
              firstName={data.account.firstName}
              setFirstName={setFirstName}
              lastName={data.account.lastName}
              setLastName={setLastName}
              hourlyPrice={hourlyPrice}
              setHourlyPrice={setHourlyPrice}
              keywords={keywords}
              setKeywords={setKeywords}
              category={category}
              setCategory={setCategory}
              subcategory={subcategory}
              setSubcategory={setSubcategory}
              titleDescription={titleDescription}
              setTitleDescription={setTitleDescription}
              description={description}
              setDescription={setDescription}
            />
          )}
          {myAvailabilities && (
            <MyAvailabilities
              data={data}
              updateAccount={updateAccount}
              setUpdateAccount={setUpdateAccount}
              handleSubmit={handleSubmit}
              day={day}
              setDay={setDay}
            />
          )}
          {myEmail && (
            <MyEmail
              data={data}
              updateAccount={updateAccount}
              setUpdateAccount={setUpdateAccount}
              handleSubmit={handleSubmit}
              email={data.email}
              setEmail={setEmail}
            />
          )}
          {myPassword && (
            <MyPassword
              data={data}
              updateAccount={updateAccount}
              setUpdateAccount={setUpdateAccount}
              handleSubmit={handleSubmit}
              password={password}
              setPassword={setPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
            />
          )}
        </div>
      </div>
    )
  ) : (
    <Navigate to="/login" />
  );
};

export default Account;
