import App from "./App";
import DessertsContainer from "./components/DessertsContainer";
import AboutPage from "./components/AboutPage";
import Card from "./components/ReusableCard"
import FoodContainer from "./components/FoodContainer";
const routes = [
    {
      path: "/",
      element: <App />,
      
    }, 
    {
      path: "/desserts",
      element: <DessertsContainer />,
     
    },
    {
      path: "/About",
      element: <AboutPage />,
     
    },

  ];

  export default routes