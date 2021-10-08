import ProductList from "./components/product-list";
import {CatalogueProvider} from "./components/providers/catalogue"
import {CartProvider} from "./components/providers/cart"
import GlobalStyles from "./styles/global"

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <CatalogueProvider>
        <CartProvider>
          <ProductList type="catalogue" />
          <ProductList  type="cart" />
        </CartProvider>
      </CatalogueProvider>
    </div>
  );
}

export default App;
