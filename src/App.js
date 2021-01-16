import Home from "./routes/home/Home";
import About from "./routes/about/About";
import Admin from "./routes/admin/Admin";
import Profile from "./routes/profile/Profile";
import Cart from "./routes/cart/Cart";
import PageNotFound from "./routes/404/PageNotFound";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/admin">
        <Admin />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  );
}

export default App;
