/* eslint-disable react/react-in-jsx-scope */
"use client";
import { useRef } from "react";

const links = [
  { label: "home", href: "/" },
  { label: "blog", href: "/blog" },
];
export default function Navbar() {
  const nav = useRef<HTMLElement | null>(null);

  const toggleNav = () => {
    if (nav.current) {
      const body = document.querySelector("body");
      nav.current.classList.toggle("nav--show");
      body?.classList.toggle("body__overflow");
    }
  };

  return (
    <header>
      <button onClick={() => toggleNav()} className="menu">
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
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <span className="sr-only">Open main menu</span>
      </button>

      <h1 className="logo">KL</h1>

      <nav ref={nav}>
        <ul className=" nav__list">
          {links.map((link) => (
            <li key={link.label} className="nav__list-item">
              <a href={link.href} className="">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
