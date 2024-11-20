import { useRouteLoaderData } from "react-router-dom";
import PostForm from "../components/PostForm";

export const Edit = () => {
  const post = useRouteLoaderData("post-detail");
  return (
    <>
      <PostForm
        header="Edit your post now"
        btnText={"Update"}
        oldPostData={post}
        method={"patch"}
      />
    </>
  );
};
