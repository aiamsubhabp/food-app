import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import FoodContainer from './components/FoodContainer'
import { useState, useEffect } from 'react';
import FoodForm from './components/FoodForm';



function App() {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:3000/foods')
      .then(r => r.json())
      .then(foods => setFoods(foods))
      .catch(error => console.error(error))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <FoodForm />
      <FoodContainer 
        foods={foods}
      />
    </div>
  );
}

export default App;
