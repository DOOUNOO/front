import "./UserCard.scss";

const UserCard = ({user}) => {
  return (
    <div className="user-card">
      <img className="picture" src={user.picture} alt="user"/>
      <div className="details">
        <div className="name-avatar">
          <img className="avatar" src={user.avatar} alt="avatar"/>
          <p className="name">{user.name}</p>
          <img className="certified" src="https://res.cloudinary.com/dyj1ddjba/image/upload/v1646237849/doounoo/certified_fljewi.png" alt="certified"/>
        </div>
        <p className="description">{user.description}</p>
      </div>
      <div className="price">
        <p className="a-partir">A PARTIR DE</p>
        <p>{user.price} €</p>
      </div>
    </div>
  );
};

export default UserCard;
