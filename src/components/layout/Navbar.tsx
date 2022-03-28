import React, { useEffect } from "react";
import { Sidenav } from "materialize-css";

const Navbar: React.FC = () => {
  useEffect(() => {
    let elems = document.querySelectorAll(".sidenav");
    Sidenav.init(elems, {});
  }, []);

  return (
    <>
      <nav>
        <div className="nav-wrapper blue">
          <a
            href="#"
            data-target="slide-out"
            className="sidenav-trigger show-on-large"
          >
            <i className="material-icons">menu</i>
          </a>
          <div className="container">
            <a href="#" className="brand-logo">
              Todo App
            </a>
          </div>
        </div>
      </nav>
      <ul id="slide-out" className="sidenav">
        <li>
          <div className="user-view">
            <img
              className="circle"
              src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
              alt="User"
            />
            <span className="black-text name">Agostinho Neto</span>
            <span className="black-text email">contact@agostinho.dev</span>
          </div>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <a href="#!">
            <i className="material-icons">list</i>To Do List
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
