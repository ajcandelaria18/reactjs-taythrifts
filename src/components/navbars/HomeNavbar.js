import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

function HomeNavbar({ navbar }) {
  return (
    <div
      className={`fixed w-full z-10 ${
        navbar ? "bg-registrationHeader text-gray-400" : ""
      }`}
    >
      <div>
        <nav className="container m-auto flex justify-between py-7 text-white">
          <div className="flex gap-10">
            <Link className="text-xl cursor-pointer" to="home" spy={true} smooth={true} offset={-90} duration={500} >TayThrifts</Link>
            <div className="flex gap-5 items-center">
              <Link to="trends" spy={true} smooth={true} offset={-90} duration={500} className="opacity-50 hover:opacity-75 cursor-pointer">
                Trends
              </Link>
              <Link to="highlight" spy={true} smooth={true} offset={-90} duration={500} className="opacity-50 hover:opacity-75 cursor-pointer">
                Highlight
              </Link>
              <Link to="features" spy={true} smooth={true} offset={-90} duration={500} className="opacity-50 hover:opacity-75 cursor-pointer">
                Features
              </Link>
              <Link to="testimonials" spy={true} smooth={true} offset={-90} duration={500} className="opacity-50 hover:opacity-75 cursor-pointer">
                Testimonals
              </Link>
              <Link to="team" spy={true} smooth={true} offset={-90} duration={500} className="opacity-50 hover:opacity-75 cursor-pointer">
                Team
              </Link>
            </div>
          </div>

          <div className="flex gap-3 items-center text-white">
            <NavLink className="border py-1 px-8 rounded-lg" to="/login">
              Login
            </NavLink>
            <NavLink className="border py-1 px-8 rounded-lg" to="/signup">
              Signup
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default HomeNavbar;
