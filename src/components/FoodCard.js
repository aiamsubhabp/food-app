function FoodCard({food}) {
    const {name, image, likes} = food

    function handleClick() {
        console.log('testing')
    }


    return(
    <div onClick={handleClick}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{likes}</p>
        </div>
      </div>
    </div>
    )
}

export default FoodCard