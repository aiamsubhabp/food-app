import { Link } from "react-router-dom"

function Card({food}) {
    const {id, name, image,description, likes} = food

    return(
    <div className="card">
        <h3>{name}</h3>
        <img src={image} className="food-image" />
        {/* <p className="card-text">{likes} likes!</p>
        <button>like {"<3"}</button> */}
        <Link to={`/${name}/${id}`}>View more info  </Link>
        <h5>{description}</h5>
    </div>
    )
}

export default Card