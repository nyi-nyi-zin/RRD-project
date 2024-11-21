import { Form, Link, useActionData, useSearchParams } from "react-router-dom";

const AuthForm = () => {
  const data = useActionData();
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  return (
    <>
      <section className="form-section">
        <p>{isLogin ? "Login to your acoount" : "Create your new account"}</p>

        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => {
              return <li key={err}>{err}</li>;
            })}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}

        <Form method="post">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required />
          </div>
          <button className="btn login-btn">
            {isLogin ? "Login" : "Register"}
          </button>
        </Form>
        {isLogin ? (
          <p className="create-acc">
            Don't have an account?
            <Link to={"/auth?mode=signup"}>Register Here</Link>
          </p>
        ) : (
          <p className="create-acc">
            Already have an account?
            <Link to={"/auth?mode=login"}>Login Here</Link>
          </p>
        )}
      </section>
    </>
  );
};
export default AuthForm;
