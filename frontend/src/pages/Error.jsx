import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  let title = "Unknown Error";
  if (err.status === 500) {
    title = err.data.message;
  }

  return (
    <section className="errorPage">
      <div>
        <ExclamationTriangleIcon className="icon" />
        <h1>{title}</h1>

        <p>Something went wrong!</p>
        <Link>
          <p className="btn er-btn">Go back Home</p>
        </Link>
      </div>
    </section>
  );
};
export default Error;
