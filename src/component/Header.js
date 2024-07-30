import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../asset/logo1.png";
import { FaCircleUser } from "react-icons/fa6";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import toast from "react-hot-toast";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  console.log(userData);
  const dispatch = useDispatch();

  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };

  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Logout successfully");
  };

  return (
    <header className="fixed shadow-md w-full h-14 px-2 md:px-4 z-50 bg-white">
      {/* desktop */}
      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-14">
            <img src={logo} className="h-full" />
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          <nav className="flex gap-4 md:gap-9 text-base md:text-sm font-medium">
            <Link to={""}>HOME</Link>
            <Link to={"order"}>ORDER ONLINE</Link>
            <Link to={"about"}>ABOUT US</Link>
            <Link to={"contact"}>CONTACT US</Link>
          </nav>
          <div className="text-2xl text-slate-600 relative">
            <PiShoppingCartSimpleFill />
            <div className="absolute -top-1 -right-1 text-white bg-red-500 w-4 rounded-full m-0 p-0 h-4 text-sm text-center">
              0
            </div>
          </div>
          <div
            className="text-slate-600 cursor-pointer"
            onClick={handleShowMenu}
          >
            <div className="text-2xl h-8 w-8">
              {userData.image ? (
                <img
                  src={userData.image}
                  className="h-full w-full overflow-hidden rounded-full drop-shadow-md"
                />
              ) : (
                <FaCircleUser />
              )}
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md text-sm flex flex-col">
                <Link
                  to={"newproduct"}
                  className="whitespace-nowrap cursor-pointer"
                >
                  New Product
                </Link>
                {userData.email ? (
                  <p
                    className="cursor-pointer text-red-500"
                    onClick={handleLogout}
                  >
                    Logout
                  </p>
                ) : (
                  <Link
                    to={"login"}
                    className="whitespace-nowrap cursor-pointer"
                  >
                    Login
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
    </header>
  );
};

export default Header;
