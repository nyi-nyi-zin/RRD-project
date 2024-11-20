import PostForm from "../components/PostForm";

const Create = () => {
  return (
    <>
      <PostForm
        header="Create your post now"
        btnText={"Post"}
        method={"post"}
      />
    </>
  );
};
export default Create;
