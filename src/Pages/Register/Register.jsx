import { Link } from "react-router-dom";


const Register = () => {

  const handleRegister = e => {
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

  }

  return (
    <div className="flex flex-col max-w-md mx-auto mt-8 p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sing Up</h1>
        <p className="text-sm dark:text-gray-600">Sign in to access your account</p>
      </div>
      <form onSubmit={handleRegister} className="space-y-12">
        <div className="space-y-4">
          <div>
            <label type="text" className="block mb-2 text-sm">Name</label>
            <input type="text" name="name" id="name" placeholder="your name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
          </div>
          <div>
            <label type="email" className="block mb-2 text-sm">Email address</label>
            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label type="password" className="text-sm">Password</label>
              <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
            </div>
            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <input className="w-full cursor-pointer bg-pink-500 px-8 py-3 font-semibold rounded-md text-white " type="submit" value="sing Up" />
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-600">Do not have an account yet?
            <Link to={'/login'} rel="noopener noreferrer" href="#" className="hover:underline dark:text-default-600">Login</Link>.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;