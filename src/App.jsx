import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { fakeAuthProvider } from "./services/auth.ts";
import { PageNotFound } from "./components/PageNotFound.jsx";
import { PublicPage } from "./pages/PublicPage.jsx";
import { ProtectedPage } from "./pages/Protected.jsx";
import { Layout } from "./components/Layout.jsx";
import { LoginPage } from "./pages/Login.jsx";
import {
  loginAction,
  loginLoader,
  protectedLoader,
} from "./services/helper.js";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    loader() {
      // Our root route always provides the user, if logged in
      return { user: fakeAuthProvider.username };
    },
    Component: Layout,
    errorElement: PageNotFound,
    children: [
      {
        index: true,
        Component: PublicPage,
      },
      {
        path: "login",
        action: loginAction,
        loader: loginLoader,
        Component: LoginPage,
      },
      {
        path: "protected",
        loader: protectedLoader,
        Component: ProtectedPage,
      },
    ],
  },
  {
    path: "/logout",
    async action() {
      // We signout in a "resource route" that we can hit from a fetcher.Form
      await fakeAuthProvider.signout();
      return redirect("/");
    },
  },
]);

export default function App() {
  return (
    <div className="h-screen bg-black text-white flex flex-col  items-center ">
      <RouterProvider
        router={router}
        fallbackElement={<p>Initial Load...</p>}
      />
    </div>
  );
}
