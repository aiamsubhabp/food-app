import Card from './ReusableCard'

function FoodContainer({foods}) {
    const foodList = foods.map(food => (
        <Card 
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