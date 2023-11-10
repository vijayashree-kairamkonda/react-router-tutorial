import { useFetcher, useRouteLoaderData } from "react-router-dom";

export const AuthStatus = () => {
  // Get our logged in user, if they exist, from the root route loader data
  let { user } = useRouteLoaderData("root");
  let fetcher = useFetcher();

  if (!user) {
    return <p>You are not logged in.</p>;
  }

  let isLoggingOut = fetcher.formData != null;

  return (
    <div className="text-purple-500 flex">
      <p>Welcome {user}!</p>
      <fetcher.Form method="post" action="/logout">
        <button
          className="bg-purple-50 w-6.1rem py-2 rounded-3xl"
          type="submit"
          disabled={isLoggingOut}
        >
          {isLoggingOut ? "Signing out..." : "Sign out"}
        </button>
      </fetcher.Form>
    </div>
  );
};
