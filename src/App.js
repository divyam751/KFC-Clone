import { useState } from "react";
import "./App.css";

import Navbar from "./pages/navbar/Navbar";
import CustomDrawer from "./components/drawer/Drawer";
import Footer from "./pages/footer/Footer";
import AllRoutes from "./routes/AllRoutes";

function App() {
  const [burger, setBurger] = useState(false);

  const totalAmount = 565.71;
  const cartIconCount = 2;
  const toggleDrawer = () => {
    setBurger(!burger);
  };
  console.log(burger);
  return (
    <div className='App'>
      {burger ? (
        <CustomDrawer
          isOpen={burger}
          onClose={toggleDrawer}
          cartIconCount={cartIconCount}
        />
      ) : (
        <Navbar
          setBurger={setBurger}
          burger={burger}
          totalAmount={totalAmount}
          cartIconCount={cartIconCount}
        />
      )}
      <AllRoutes cartIconCount={cartIconCount} totalAmount={totalAmount} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
