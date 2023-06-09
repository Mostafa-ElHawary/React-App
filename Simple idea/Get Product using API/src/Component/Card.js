/* eslint-disable jsx-a11y/img-redundant-alt */
// import CardInfo from "./CardInfo";
function Card(props) {
  const { prod } = props;
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={prod.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{prod.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
