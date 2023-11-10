import { useRouteError } from "react-router-dom";

export const PageNotFound = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="bg-black text-center text-white">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
