import React from "react";
import { Link } from "react-router-dom";
import { Input } from "./ui/input";
// import { text } from "stream/consumers";
import { Button } from "./ui/button";
import { MoonIcon, Search } from "lucide-react";

function Navbar() {
  const user = false
  return (
    <div className="py-2 fixed w-full z-50 dark:border-b-gray-600 border-b-gray-300 border-b-2 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-0">
        {/* Logo section */}
        <div className="flex gap-7 items-center">
          <Link to="/">
            <div className="flex gap-2 items-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-7 h-7 md:w-10 md:h-10 dark:invert"
              />
              <h1 className="font-bold text-3xl md:text-4xl">LOGO</h1>
            </div>
          </Link>
          <div className="relative hidden md:block ">
            <Input type={Text} placholder='Search... ' className={'border dark:border-gray-900 bg-gray-300 w-[300px] hidden md:block '} />
            <Button className={'absolute right-0 top-0'}><Search/></Button>
          </div>
        </div>
        {/* Nav section */}
        <nav className="flex md:gap-7 gap-4 items-center ">
          <ul className="hidden md:flex gap-7 items-center text-xl font-semibold">
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/blog'}><li>Blog</li></Link>
            <Link to={'/about'}><li>About</li></Link>
          </ul>
          <div className="flex gap-2">
            <Button><MoonIcon/></Button>
            { user ? <div></div> : 
            <div className="ml md:flex gap-2">
              <Link to={'login'}><Button>Login</Button></Link>
              <Link to={'/signup'} className="hidden md:block"><Button>Signup</Button></Link>
              </div>}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
