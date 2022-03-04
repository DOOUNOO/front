import "./index.scss";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Searchbar from "../../components/Searchbar";
import avatarImg from "../../assets/images/student.jpg";
import ExpertsFeed from "../../components/ExpertsFeed";

const FindExperts = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  const [priceMin, setPriceMin] = useState(1);
  const [priceMax, setPriceMax] = useState(500);
  const [availability, setAvailability] = useState("");

  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const handlePageClick = (event) => {
    setPage(event.selected + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/findexperts?page=${page}&category=${category}&subcategory=${subcategory}&priceMin=${priceMin}&priceMax=${priceMax}`
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
  }, [category, subcategory, priceMin, priceMax]);

  return isLoading ? (
    <div></div>
  ) : (
    <>
      <div className="find-experts-container">
        <h1>Trouvez votre expert</h1>
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
        />
      </div>
      <section className="find-experts-feed">
        <h2>{data.count} profils disponibles</h2>
        <ExpertsFeed data={data} avatarImg={avatarImg} />
      </section>
      <ReactPaginate
        containerClassName={"page-navigation"}
        activeClassName={"active"}
        nextLabel={<FontAwesomeIcon icon="arrow-right" />}
        previousLabel={<FontAwesomeIcon icon="arrow-left" />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
      />
    </>
  );
};

export default FindExperts;
