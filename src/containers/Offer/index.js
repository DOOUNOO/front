import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { LineWave } from "react-loader-spinner";

import "./index.scss";

const Offer = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // const price = data.product_price;
  // const protectionFees = (price / 10).toFixed(2);
  // const shippingFees = (protectionFees * 2).toFixed(2);
  // const total = Number(price) + Number(protectionFees) + Number(shippingFees);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       `https://lereacteur-vinted-api.herokuapp.com/offer/${params.id}`
  //     );
  //     setData(response.data);
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, [params.id]);

  return isLoading ? (
    <div className="offer-container">
      <LineWave color="#ff9f66" height={150} width={150} />
    </div>
  ) : (
    <div className="offer-container">
      <div className="left-col">
        <div className="main-expert-info">
          <div className="main-row">
            <div className="photo-col">IMG</div>
            <div className="main-profile-info-col">
              <h1>Sophie Guillot</h1>
              <div>IC Mode</div>
              <div>IC 131 services</div>
              <div>IC Aide: styliste, modéliste...</div>
            </div>
          </div>
          <div className="dashboard">
            <p>Présentation</p>
            <p>Agenda</p>
            <p>Avis (41)</p>
            <p>CV</p>
            <p>Expériences</p>
          </div>
        </div>
        <div className="description-container"></div>
        <div className="calendar-container"></div>
        <div className="ratings-container"></div>
      </div>
      <div className="right-col">
        <div className="contact-container">asdfa</div>
      </div>
    </div>
  );
};

export default Offer;
