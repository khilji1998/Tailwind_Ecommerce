import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import PrimaryLayout from "../layout/primaryLayout";
import Products from "../pages/home/products";
import SignUp from "../pages/Authentication/signUp";
import SignIn from "../pages/Authentication/signIn";
import AuthLayout from "../layout/authLayout";
function Routes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
        <Route path="/" element={<PrimaryLayout />}>
          <Route path="/home" element={<Products />} />
        </Route>
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
