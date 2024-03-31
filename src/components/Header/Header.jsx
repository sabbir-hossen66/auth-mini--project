import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Hooks/UseContext/UseContext";


const Header = () => {

  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log('successfully log out');
      })
      .catch(error => console.error(error))
  }

  const [theme, setTheme] = useState('light')
  console.log(theme);
  // useEffect(() => {
  //   localStorage.setItem('theme', theme)
  //   const localTheme = localStorage.getItem('theme')
  //   document.querySelector('html').setAttribute('data-theme', localTheme)
  // }, [theme])

  const handleToggle = (e) => {

    // e.preventDefault()

    if (e.target.checked) {
      setTheme('synthwave')
    }
    else {
      setTheme('light')
    }
  }


  const navLink = <>
    <li><NavLink to={'/home'}>Home</NavLink></li>
    <li><NavLink to={'/login'}>Login</NavLink></li>
    <li><NavLink to={'/register'}>Register</NavLink></li>


  </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1]  p-2 shadow bg-base-100 rounded-box w-52">
            {navLink}

          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
          {navLink}
        </ul>
      </div>
      <div className="navbar-end flex gap-2">
        <div>
          <label onChange={handleToggle} className="cursor-pointer grid place-items-center">
            <input type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          </label>
        </div>
        <div>
          {
            user ?

              <div>
                <span className="text-red-600 p-4">{user.email}</span>
                <a onClick={handleLogOut} className="link font-bold no-underline">sign Out</a>
              </div>
              :
              <Link to={'/login'}>Log In</Link>
          }

        </div>
      </div>
    </div>
  );
};

export default Header;