import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-10 flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-gray-700 text-sm py-4 dark:bg-white">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
        <div className="flex items-center justify-between">
          <a className="flex-none text-xl font-semibold text-white dark:text-gray-800" href="#">Brand</a>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-gray-700 font-medium bg-gray-800 text-gray-400 shadow-sm align-middle hover:bg-gray-700/[.25] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              onClick={handleMenuToggle}
              aria-label="Toggle navigation"
            >
              <svg className={`hs-collapse-open ${isMenuOpen ? 'hidden' : 'block'} w-4 h-4`} width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
              <svg className={`hs-collapse-open ${isMenuOpen ? 'block' : 'hidden'} w-4 h-4`} width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-dark"
          className={`hs-collapse transition-all duration-300 basis-full grow sm:block ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
            <a className="font-medium text-white hover:text-rose-800 text-lg" href="#">Home</a>
            <a className="font-medium text-white hover:text-rose-800 text-lg" href="#">Features</a>
            <a className="font-medium text-white hover:text-rose-800 text-lg" href="#">About</a>
            <a className="font-medium text-white hover:text-rose-800 text-lg" href="#">Usage</a>
            <a className="font-medium text-white hover:text-rose-800 text-lg" href="#">Review</a>
            <a className="font-medium text-white hover:text-rose-800 text-lg" href="#">Pricing</a>
            <a className="font-medium text-white hover:text-rose-800 text-lg" href="#">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
