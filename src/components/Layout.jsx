import { NavLink, Outlet } from "react-router-dom";
import { AuthStatus } from "./AuthStatus";

export const Layout = () => {
  return (
    <div className="flex flex-col justify-between h-screen p-4">
      <h1 className="text-2xl font-bold italic text-sky-600">
        Simple authentication using RouterProvider
      </h1>
      <div className="text-sm">
        <p>
          This example demonstrates a simple login flow with three pages: a
          public page, a protected page, and a login page. In order to see the
          protected page, you must first login. Pretty standard stuff.
        </p>

        <p>
          First, visit the public page. Then, visit the protected page.
          You&apos;re not yet logged in, so you are redirected to the login
          page. After you login, you are redirected back to the protected page.
        </p>

        <p>
          Notice the URL change each time. If you click the back button at this
          point, would you expect to go back to the login page? No! You&apos;re
          already logged in. Try it out, and you&apos;ll see you go back to the
          page you visited just *before* logging in, the public page.
        </p>
      </div>

      <hr />

      <AuthStatus />
      <nav>
        <ul>
          <li>
            {/* Styling active links */}
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "font-bold text-orange-400"
                  : isPending
                  ? "pending"
                  : ""
              }
              to="/"
            >
              Public Page
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "font-bold text-orange-400"
                  : isPending
                  ? "pending"
                  : ""
              }
              to="/protected"
            >
              Protected Page
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};
