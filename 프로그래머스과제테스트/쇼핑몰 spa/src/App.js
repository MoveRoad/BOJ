import ListPage from "./pages/ProductListPage.js";
import DetailPage from "./pages/ProductDetailPage.js";
import CartPage from "./pages/CartPage.js";

export default function App({ $app }) {
  this.router = () => {
    const { pathname } = location;

    if (pathname === "/web/") {
      new ListPage({ $app }).init();
    } else if (pathname.indexOf("/web/products/") === 0) {
      const [, , , id] = pathname.split("/");
      new DetailPage({ $app, productID: id }).init();
    } else if (pathname === "/web/cart") {
      new CartPage({ $app });
    }
  };

  this.router();
}
