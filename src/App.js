import { useState } from "react";
import "./App.css";

import Navbar from "./pages/navbar/Navbar";
import CustomDrawer from "./components/drawer/Drawer";

function App() {
  const [burger, setBurger] = useState(false);
  const totalAmount = 0;
  const cartIconCount = 0;
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
    </div>
  );
}

export default App;
