import { Link } from "react-router-dom";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";

const PostItem = ({ post }) => {
  // eslint-disable-next-line
  const { title, date, image, id } = post;
  return (
    <section className="post">
      <Link to={`${id}`}>
        <img src={image} alt={title} />
      </Link>
      <Link to={`${id}`}>
        <p className="title">{title}</p>
      </Link>

      <p className="date flex items-center gap-2">
        <CalendarDaysIcon className="h-6 w-6 text-blue-500" />
        {date}
      </p>

      <hr />
    </section>
  );
};
export default PostItem;
