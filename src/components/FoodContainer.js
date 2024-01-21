import FoodCard from './FoodCard'

function FoodContainer({foods}) {
    const foodList = foods.map(food => (
        <FoodCard 
            key={food.id}
            food={food}
        />
    ))

    return(
        <div>
            <h2>Foods!</h2>
            {foodList}
        </div>
    )
}

export default FoodContainer