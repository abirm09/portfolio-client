const Login = () => {
  return (
    <div className="cs-container">
      <div className="flex justify-center mt-20">
        <form
          className="flex flex-col gap-3 w-full items-center"
          onSubmit={handleLogin}
        >
          <input
            type="email"
            className="input input-bordered input-accent w-full max-w-xs"
            placeholder="Email"
          />
          <input
            type="password"
            className="input input-bordered input-accent w-full max-w-xs"
            placeholder="Password"
          />
          <input type="submit" value="Login" className="btn btn-success" />
        </form>
      </div>
    </div>
  );
};

export default Login;
