import {
  Form,
  useActionData,
  useLocation,
  useNavigation,
} from "react-router-dom";

export const LoginPage = () => {
  let location = useLocation();
  let params = new URLSearchParams(location.search);
  let from = params.get("from") || "/";

  let navigation = useNavigation();
  let isLoggingIn = navigation.formData?.get("username") != null;

  let actionData = useActionData();

  return (
    <div className="flex flex-col space-y-4 py-2">
      <p>You must log in to view the page at {from}</p>

      <Form
        method="post"
        replace
        className="flex flex-col items-start space-y-2"
      >
        <input type="hidden" name="redirectTo" value={from} />
        <label>
          Username: <input name="username" />
        </label>{" "}
        <button
          className="bg-sky-600 w-6.1rem py-2 rounded-3xl"
          type="submit"
          disabled={isLoggingIn}
        >
          {isLoggingIn ? "Logging in..." : "Login"}
        </button>
        {actionData && actionData.error ? (
          <p style={{ color: "red" }}>{actionData.error}</p>
        ) : null}
      </Form>
    </div>
  );
};
