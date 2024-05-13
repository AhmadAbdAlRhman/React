//react router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import Error from "./pages/Error";
import CustomerProfile from "./pages/CustomerProfile";
import Cart from "./pages/Cart";
import StoreRegisterPage from "./pages/StoreRegisterPage";

//components
import { ShopItems } from "./components/Shops/shop/ShopItems";
import { SellerProducts } from "./components/sellerShop/SellerProducts";
import ShopsItems from "./components/Shops/ShopsItems";

//layouts
import SellerShopLayout from "./layouts/SellerShopLayout";
import ShopsLayout from "./layouts/ShopsLayout";
import CustomerLayout from "./layouts/CustomerLayout";

const isAuthenticated = true;
const userRole = "customer";
// const userRole = "seller";

// const isAuthenticated = undefined;
// const userRole = undefined;

const routes = createRoutesFromElements(
  <Route>
    <Route path="" index element={<Home />} />
    <Route path="login" element={<LoginPage />} />
    <Route path="signup" element={<SignupPage />} />
    <Route path="store-register" element={<StoreRegisterPage />} />
    {isAuthenticated && userRole === "customer" && (
      <Route path="main" element={<CustomerLayout />}>
        <Route path="shops" element={<ShopsLayout />}>
          <Route index element={<ShopsItems />} />
          <Route path="shop/:id" element={<ShopItems />} />
        </Route>
        <Route path="cart" element={<Cart />} />
        <Route path="customer-profile" element={<CustomerProfile />} />
      </Route>
    )}
    {isAuthenticated && userRole === "seller" && (
      <Route path="my-shop" element={<SellerShopLayout />}>
        <Route path="" element={<SellerProducts />} />
      </Route>
    )}
    <Route path="*" element={<Error />} />
  </Route>
);

const router = createBrowserRouter(routes);

export default router;
