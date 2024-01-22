import NavBar from "./NavBar"

function FoodForm() {
    return(
        <div className="App">
            <NavBar />
            <form>
                <h2>Add a Food Item</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="What food do you want to add?" 
                    className="input-text"
                />
                <input
                    type="text"
                    name="image"
                    placeholder="Add an image URL" 
                    className="input-text"
                />
            </form>
        </div>
    )
}

export default FoodForm