import App from "./App";
import DessertsContainer from "./components/DessertsContainer";

const routes = [
    {
      path: "/",
      element: <App />,
      
    }, 
    {
      path: "/desserts",
      element: <DessertsContainer />,
     
    },
  ];

  export default routes