import "./UserCard.scss";
import {Link} from "react-router-dom";

const UserCard = ({user}) => {
  let description = user.description;
  if (description.length > 100) {
    description = description.substring(0, 100) + "..."
  }

  return (
    <Link className="user-card" to={"/findexpert/" + user.id}>
      <img className="picture" src={user.picture} alt="user"/>
      <div className="details">
        <div className="name-avatar">
          <p className="name">{user.name}</p>
          <img className="certified"
               src="https://res.cloudinary.com/dyj1ddjba/image/upload/v1646237849/doounoo/certified_fljewi.png"
               alt="certified"/>
        </div>
        <p className="description">{description}</p>
      </div>
      <div className="price">
        <p className="a-partir">A PARTIR DE</p>
        <p>{user.price} €</p>
      </div>
    </Link>
  );
};

export default UserCard;
