/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";
import "../app/styles/navbar.scss";

export default function Navbar() {
  return (
    <header>
      <button className="menu-button">
        <a href="#main-menu" id="main-menu-toggle" className="menu-toggle">
          <svg
            width="30px"
            height="30px"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#ffffff"
          >
            <path
              d="M3 5h18M3 12h18M3 19h18"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </a>
      </button>

      <nav id="main-menu" className="main-menu">
        <a
          href="#main-menu-toggle"
          id="main-menu-close"
          className="menu-close"
          aria-label="Close main menu"
        >
          <svg
            width="30px"
            height="30px"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </a>
        <ul className="">
          <li className="">
            <Link href="">
              <h1 className="text-3xl">KL</h1>
            </Link>
          </li>
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>

          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
