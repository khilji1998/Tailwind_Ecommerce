import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import PrimaryLayout from "../layout/primaryLayout";
import SignUp from "../pages/Authentication/signUp";
import SignIn from "../pages/Authentication/signIn";
import AuthLayout from "../layout/authLayout";
import NotFound from "../pages/notFound";
import ProductDetails from "../pages/productDetails";
import SecondaryLayout from "../layout/secondaryLayout";
import Home from "../pages/home";
import { ProtectedRoute } from "./protectedRoutes";
function Routes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
       <Route path="/" element={<AuthLayout />}>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
        <Route path="/" element={<PrimaryLayout />}>
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        </Route>
        <Route path="/" element={<SecondaryLayout />}>
          <Route path="/product/:id" element={<ProtectedRoute><ProductDetails /></ProtectedRoute>} />
        </Route>
       
        <Route path="*" element={<NotFound />} />
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Routes;
