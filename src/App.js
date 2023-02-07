import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './components/web/home/Home';
import Navbar from './components/web/layout/Navbar';
import Footer from './components/web/layout/Footer';
function App() {
  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        {/*<Route exact path="/home" component={Home} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/contact-us" component={ContactUs} /> */}

        {/* <PrivateRoute path="/app" component={Layout} />
        <PublicRoute path="/login" component={Login} />
        <Route component={Error} /> */}
        <Redirect to="/" />
      </Switch>
      <Footer />
      {/* <Footer /> */}
      {/* <OuterFooter /> */}
    </HashRouter>
  );
}

export default App;
