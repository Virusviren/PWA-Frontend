import Home from "./routes/home/Home";
import About from "./routes/about/About";
import Admin from "./routes/admin/Admin";
import Profile from "./routes/profile/Profile";
import PageNotFound from "./routes/404/PageNotFound";
import Navbar from "./shared components/Navbar";
import Footer from "./shared components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/about">
          <Navbar />
          <About />
          <Footer />
        </Route>
        <Route exact path="/profile">
          <Navbar />
          <Profile />
          <Footer />
        </Route>
        <Route exact path="/admin">
          <Navbar />
          <Admin />
          <Footer />
        </Route>
        <Route exact path="/">
          <Navbar />
          <Home />
          <Footer />
        </Route>
        <Route exact path="*">
          <Navbar />
          <PageNotFound />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
