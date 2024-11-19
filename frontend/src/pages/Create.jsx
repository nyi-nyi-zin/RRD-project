import PostForm from "../components/PostForm";
import { uuid } from "react";
import { redirect } from "react-router-dom";

const Create = () => {
  return (
    <>
      <PostForm header="Create your post now" btnText={"Post"} />
    </>
  );
};
export default Create;

export const action = async ({ request, params }) => {
  const data = await request.formData();

  const postData = {
    id: uuid,
    title: data.get("title"),
    description: data.get("description"),
    image: data.get("image"),
    date: data.get("date"),
  };

  const response = await fetch("http://localhost:8080/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  if (response.status === 422) {
    return response; //To catch the response data with  useActionData
  }

  if (!response.ok) {
  }
  return redirect("/");
};
