import { HashRouter as Router, Switch, Redirect } from "react-router-dom";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Products from "./components/products";
import { productData, productDataTwo } from "./components/products/data";
import { GlobalStyle } from "./globalStyles";
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero/>
      <Products heading="Eastern Pizza" data={productData}/>
      <Feature/>
      <Products heading="Sweet Treats for you" data={productDataTwo} />
      <Footer/>
    </Router>
  );
}

export default App;
