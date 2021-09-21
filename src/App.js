import {
  HashRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import Cart from "./pages/Cart";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Products from "./components/products";
import { GlobalStyle } from "./globalStyles";
import { Provider } from "react-redux";
import {store} from "./store"

function App() {
  return (
    <Router>
      <Provider store={store}>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <Hero />
          <Products heading="pizza" />
          <Products heading="eastern pizza" />
          <Feature />
          <Products heading="hot drinks" />
        </Route>
        <Route path="/cart" component={Cart} exact />
        <Redirect to="/" exact />
      </Switch>
      <Footer />
      </Provider>
    </Router>
  );
}

export default App;
