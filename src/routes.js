import App from "./App";
import FoodForm from "./components/FoodForm";

const routes = [
    {
      path: "/",
      element: <App />,
      
    }, 
    {
      path: "/foodform",
      element: <FoodForm />,
     
    },
  ];

  export default routes