import "./index.scss";
import ExpertCard from "../ExpertCard";

const ExpertsFeed = ({ data, avatarImg }) => {
  return data.experts.map((elem, index) => {
    return (
      <ExpertCard
        key={elem._id}
        expertImg={elem.account.avatarURL}
        isBaseline={false}
        expertBaseline="Carpe Diem"
        expertName={`${elem?.account?.firstName} ${elem?.account?.lastName}`}
        expertCategory={elem?.account?.category}
        expertTotalReview={elem?.account?.totalReview}
        expertTotalOrder={elem?.account?.totalOrder}
        expertKeywords={elem?.account?.keywords}
        isIntroParagraph={true}
        title={elem?.account?.titleDescription}
        paragraph={elem?.account?.description}
        totalComments={elem?.account?.totalReview}
        hourlyPrice={elem?.account?.hourlyPrice}
        firstTextBtn="Voir profil"
        secondTextBtn="Contacter"
        firstUrl={`/findexpert/${elem._id}`}
        secondUrl="/"
        expertId={elem._id}
      />
    );
  });
};

export default ExpertsFeed;
