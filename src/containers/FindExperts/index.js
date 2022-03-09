import "./index.scss";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Searchbar from "../../components/Searchbar";
import avatarImg from "../../assets/images/student.jpg";
import ExpertsFeed from "../../components/ExpertsFeed";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useParams } from "react-router-dom";

const FindExperts = () => {
  const params = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState(
    params.category ? params.category : ""
  );
  const [subcategory, setSubcategory] = useState("");

  const [priceFilter, setPriceFilter] = useState("");
  const [priceMin, setPriceMin] = useState(1);
  const [priceMax, setPriceMax] = useState(500);

  const [availability, setAvailability] = useState("");

  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const handlePageClick = (event) => {
    setPage(event.selected + 1);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://doounoo.herokuapp.com/findexperts?page=${page}&category=${category}&subcategory=${subcategory}&priceMin=${priceMin}&priceMax=${priceMax}`
        );
        const limit = response.data.limit;

        setPageCount(Math.ceil(response.data.count / limit));
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchData();
  }, [category, subcategory, priceMin, priceMax, page, pageCount]);

  console.log(data);
  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <>
      <div className="find-experts-container">
        <h1>Trouvez votre expert</h1>
        <div className="loading-container"></div>

        <Searchbar
          data={data}
          category={category}
          setCategory={setCategory}
          subcategory={subcategory}
          setSubcategory={setSubcategory}
          priceFilter={priceFilter}
          setPriceFilter={setPriceFilter}
          priceMin={priceMin}
          setPriceMin={setPriceMin}
          priceMax={priceMax}
          setPriceMax={setPriceMax}
          availability={availability}
          setAvailability={setAvailability}
          setPage={setPage}
        />
      </div>
      <section className="find-experts-feed">
        {data.count < 2 ? (
          <h2>{data.count} profil disponible</h2>
        ) : (
          <h2>{data.count} profils disponibles</h2>
        )}

        <ExpertsFeed data={data} avatarImg={avatarImg} />
      </section>

      {data.count === 0 || pageCount === 1 ? null : (
        <ReactPaginate
          containerClassName={"page-navigation"}
          activeClassName={"active"}
          nextLabel={
            page === pageCount ? null : <FontAwesomeIcon icon="angle-right" />
          }
          previousLabel={
            page === 1 ? null : <FontAwesomeIcon icon="angle-left" />
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          forcePage={page - 1}
        />
      )}
    </>
  );
};

export default FindExperts;
