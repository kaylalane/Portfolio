import { useEffect, useState } from "react";

export default function Toggle() {
  const [darkMode, setDarkMode] = useState(true);

  function onChange() {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    if (darkMode) {
      localStorage.setItem("theme", "true");
    } else {
      localStorage.setItem("theme", "false");
    }
  }

  useEffect(() => {
    //If there's no theme saved, make if dark
    if (localStorage.getItem("theme") == null) {
      console.log("no cache");
      setDarkMode(true);
      localStorage.setItem("theme", "true");
      document.documentElement.classList.add("dark");
    } else if (localStorage.getItem("theme") == "true") {
      console.log("dark mode in cache");

      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      console.log("light mode in cache");
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <>
      {darkMode ? (
        <button onClick={onChange}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-moon-filled"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z"
              strokeWidth="0"
              fill="currentColor"
            />
          </svg>
        </button>
      ) : (
        <button
          onClick={() => {
            onChange();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-moon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
          </svg>
        </button>
      )}
    </>
  );
}
