import { json, redirect, useRouteLoaderData } from "react-router-dom";
import PostDetails from "../components/PostDetails";
const Details = () => {
  const post = useRouteLoaderData("post-detail");
  return <PostDetails post={post} />;
};
export default Details;

export const loader = async ({ params }) => {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`);
  if (!response.ok) {
    throw json(
      {
        message: "Can't get Details loader",
        console: () => console.log(this.message),
      },

      {
        status: 500,
      }
    );
  } else {
    const data = await response.json();
    return data.post;
  }
};

export const action = async ({ request, params }) => {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`, {
    method: request.method,
  });
  if (!response.ok) {
    throw json(
      {
        message: "Can't get detail action now",
        console: () => console.log(this.message),
      },

      {
        status: 500,
      }
    );
  }
  return redirect("/");
};
