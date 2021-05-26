import React from "react";

function Nav() {
  return (
    <div>
      <div className="container">
        <nav
          className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark px-4 "
          style={{
            height: "60px",
            backgroundColor: "black",
            opacity: "0.60",
            color: "white",
          }}
        >
          <a
            className="navbar-brand"
            href="index.html"
            style={{ color: "white", fontWeight: "bold" }}
          >
            My ToDoApp
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto ">
              <a
                className="nav-item nav-link"
                href="index.html"
                style={{ color: "white" }}
              >
                Home
              </a>
              <a
                className="nav-item nav-link"
                href="#about"
                style={{ color: "white" }}
              >
                About
              </a>
              <a
                className="nav-item nav-link"
                href="#education"
                style={{ color: "white" }}
              >
                Education
              </a>
              <a
                className="nav-item nav-link"
                href="https://drive.google.com/file/d/1Z4suMiAhQc3FtzkbFyp8mjAwgrHu-Phn/view?usp=sharing"
                style={{ color: "white" }}
              >
                Resume
              </a>
              <a
                className="nav-item nav-link"
                href="https://kaniz-fatema.herokuapp.com/blog/"
                style={{ color: "white" }}
              >
                Blog
              </a>
            </div>
          </div>
        </nav>

        {/* style={{color: "white", backgroundColor: "black", opacity: "0.70"}} */}
      </div>
    </div>
  );
}

export default Nav;
