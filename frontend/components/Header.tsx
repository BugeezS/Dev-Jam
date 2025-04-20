import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function openSideMenu() {
    setIsOpen(!isOpen);
    console.log("isOpen", isOpen);
  };
  return (
    <header>
      <nav className="flex flex-row justify-between p-4">
        <button className="block md:hidden" onClick={openSideMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <span>DEV JAM</span>
        <ul className="md:flex md:flex-row md:space-x-4 hidden">
          <li><a href="/about">About the project</a></li>
          <li><a href="/contact">Contact</a></li>
          <button className="border-orange-400 border-2">Sign In</button>
        </ul>
      </nav>
    </header>
  )

}
