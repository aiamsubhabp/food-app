import { useState } from "react"

function FoodForm() {
    const [formData, setFormData] = useState({
        name:'',
        image:'',
        description:''
    })

    function handleSubmit(e){
        e.preventDefault()
        console.log('submitted')
    }

    return(
        <div className="App">
            <form onSubmit={handleSubmit}>
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
                <input
                    type="text"
                    name="description"
                    placeholder="Add a short description!" 
                    className="input-text"
                />
                <br />
                <button type="submit">Add food</button>
            </form>
        </div>
    )
}

export default FoodForm