import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu clicked"); // Debugging line
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { text: "About The Project", path: "/about" },
    { text: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="relative bg-white shadow-md">
      <nav className="flex items-center justify-between px-4 py-4 md:px-8">
        <span className="text-xl font-bold">DEV JAM</span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {menuItems.map(({ text, path }, index) => (
            <li key={index}>
              <a href={path} className="text-gray-700 hover:text-orange-500 transition">
                {text}
              </a>
            </li>
          ))}
          <li>
            <button className="border-orange-400 border-2 px-4 py-1 rounded hover:bg-orange-400 hover:text-white transition">
              Sign In
            </button>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button onClick={toggleMenu} className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 p-4 space-y-4">
          <ul className="flex flex-col space-y-2">
            {menuItems.map(({ text, path }, index) => (
              <li key={index}>
                <a href={path} className="text-gray-800 hover:text-orange-500 transition">
                  {text}
                </a>
              </li>
            ))}
          </ul>
          <button className="mt-4 border-orange-400 border-2 px-4 py-1 rounded hover:bg-orange-400 hover:text-white transition">
            Sign In
          </button>
        </div>
      )}
    </header>
  );
}

