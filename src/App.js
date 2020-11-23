import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./modules/Cart.js";
import Home from "./modules/Home.js";
import Item from "./modules/Item.js";
import Nav from "./modules/Nav.js";
import Shop from "./modules/Shop.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
