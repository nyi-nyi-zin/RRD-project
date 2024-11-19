import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="errorPage">
      <div>
        <ExclamationTriangleIcon className="icon" />
        <p>Something went wrong!</p>
        <Link>
          <p className="btn er-btn">Go back Home</p>
        </Link>
      </div>
    </section>
  );
};
export default Error;
