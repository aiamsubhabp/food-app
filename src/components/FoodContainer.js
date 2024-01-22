import Card from './ReusableCard'

function FoodContainer({foods}) {
    const foodList = foods.map(food => (
        <Card 
            key={food.id}
            name={food.name}
            image={food.image}
            description={food.description}
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