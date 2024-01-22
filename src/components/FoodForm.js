import { useState } from "react"

function FoodForm({onAddFood}) {
    const [formData, setFormData] = useState({
        name:'',
        image:'',
        description:''
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        
    }
    function handleSubmit(e) {
        e.preventDefault()
        const newFood = {
            ...formData
        }

        fetch('http://127.0.0.1:3000/foods', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFood),
        })
            .then(r => r.json())
            .then(newFood => onAddFood(newFood))

        setFormData({
            name:'',
            image:'',
            description:'' 
        })
        
    }

    return(
        <div className="App">
            <form onSubmit={handleSubmit}>
                <h2>Add a Food Item</h2>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    placeholder="What food do you want to add?" 
                    className="input-text"
                />
                <input
                    type="text"
                    name="image"
                    onChange={handleChange}
                    value={formData.image}
                    placeholder="Add an image URL" 
                    className="input-text"
                />
                <input
                    type="text"
                    name="description"
                    onChange={handleChange}
                    value={formData.description}
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