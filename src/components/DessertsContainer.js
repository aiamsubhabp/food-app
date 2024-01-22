import NavBar from './NavBar'
import Card from './ReusableCard'
import { useState, useEffect } from 'react'

function DessertsContainer() {
    const [desserts, setDesserts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/desserts')
            .then(r => r.json())
            .then(desserts => setDesserts(desserts))
    }, [])

    const dessertsList = desserts.map(dessert => (
        <Card 
            key={dessert.id}
            food={dessert}
        />
    ))

    return(
        <div className='App'>
            <NavBar />
            <h2>Desserts!</h2>
            {dessertsList}
        </div>
    )
}

export default DessertsContainer