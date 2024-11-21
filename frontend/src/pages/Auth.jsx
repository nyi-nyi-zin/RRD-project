import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const Auth = () => {
  return (
    <>
      <AuthForm />
    </>
  );
};
export default Auth;

export const action = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  //Validate here for not to put random mode values in url
  if (mode !== "login" && mode !== "signup") {
    throw new Error(`Invalid authentication mode: ${mode}`);
  }

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };
  const response = await fetch(`http://localhost:8080/${mode}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json(
      {
        message: "Authen error",
        console: () => console.log(this.message),
      },

      {
        status: 500,
      }
    );
  }
  const resData = await response.json();
  const token = resData.token;

  localStorage.setItem("token", token);
  console.log(token);
  return redirect("/");
};
