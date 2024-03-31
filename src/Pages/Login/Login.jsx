import { Link } from "react-router-dom";


const Login = () => {

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  }

  return (
    <div className="flex flex-col max-w-md mx-auto mt-8 p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Log in</h1>
        <p className="text-sm dark:text-gray-600">Sign in to access your account</p>
      </div>
      <form onSubmit={handleLogin} className="space-y-12">
        <div className="space-y-4">
          <div>
            <label type="email" className="block mb-2 text-sm">Email address</label>
            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" required />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label type="password" className="text-sm">Password</label>
              <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
            </div>
            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" required />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            {/* <button type="button" className="w-full bg-pink-500 px-8 py-3 font-semibold rounded-md text-white ">Log in</button> */}
            <input className="w-full cursor-pointer bg-pink-500 px-8 py-3 font-semibold rounded-md text-white " type="submit" value="Login" />
          </div>
          <button className="px-6 text-sm text-center dark:text-gray-600">Do not have an account yet?
            <Link to={'/register'} rel="noopener noreferrer" href="#" className="hover:underline dark:text-default-600">Sign up</Link>.
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;