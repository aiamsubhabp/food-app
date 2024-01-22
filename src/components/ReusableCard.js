import { Link } from "react-router-dom"


function Card({id, name, image}) {
    

    return(
    <div className="card">
        <h3>{name}</h3>
        <img src={image} className="food-image" />
        {/* <p className="card-text">{likes} likes!</p>
        <button>like {"<3"}</button> */}
    </div>
    )
}

export default Card