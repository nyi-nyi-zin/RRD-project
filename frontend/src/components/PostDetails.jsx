import {
  CalendarDaysIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/24/solid";
import { Link, useSubmit } from "react-router-dom";

const PostDetails = ({ post }) => {
  const { description, image, title, date } = post;
  const submit = useSubmit();
  const postDeleteHandler = () => {
    const confirmStatus = window.confirm("Are You Really want to delete?!!");
    if (confirmStatus) {
      submit(null, { method: "DELETE" });
    } else {
    }
  };
  return (
    <section className="details">
      <div className="flex items-center justify-between ">
        <div>
          <p className="detail-title">{title}</p>
          <p className="date">
            <CalendarDaysIcon className="w-6 h-6 inline-block mr-2" />
            <span>{date}</span>
          </p>
        </div>

        <Link to={"/"}>
          <ArrowLeftCircleIcon className="h-9 w-9 text-blue-500 cursor-pointer" />
        </Link>
      </div>

      <img src={image} alt={title} />
      <p className="description">{description}</p>
      <div className="detail-footer">
        <Link to={`edit-post`}>
          <button className="btn sm">Edit</button>
        </Link>
        <button className="btn sm" onClick={postDeleteHandler}>
          Delete
        </button>
      </div>
      <hr />
    </section>
  );
};
export default PostDetails;
