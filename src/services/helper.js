import { redirect } from "react-router-dom";
import { fakeAuthProvider } from "./auth";

export async function loginAction({ request }) {
  let formData = await request.formData();
  let username = formData.get("username");

  // Validate our form inputs and return validation errors via useActionData()
  if (!username) {
    return {
      error: "You must provide a username to log in",
    };
  }

  // Sign in and redirect to the proper destination if successful.
  try {
    await fakeAuthProvider.signin(username);
  } catch (error) {
    return {
      error: "Invalid login attempt",
    };
  }

  let redirectTo = formData.get("redirectTo");
  return redirect(redirectTo || "/");
}

export async function loginLoader() {
  if (fakeAuthProvider.isAuthenticated) {
    return redirect("/");
  }
  return null;
}

export function protectedLoader({ request }) {
  // If the user is not logged in and tries to access `/protected`, we redirect
  // them to `/login` with a `from` parameter that allows login to redirect back
  // to this page upon successful authentication
  if (!fakeAuthProvider.isAuthenticated) {
    let params = new URLSearchParams();
    params.set("from", new URL(request.url).pathname);
    return redirect("/login?" + params.toString());
  }
  return null;
}
