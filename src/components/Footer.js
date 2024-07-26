import React from "react";

export default function Footer() {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-sm text-gray-400 sm:py-2 sm:mt-0 mt-4">
          © 2024 My Portfolio —
          <a
            href="https://www.freecodecamp.org/news/build-portfolio-website-react/"
            className="text-gray-500 ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tutorial by Reed Barger
          </a>
        </p>
      </div>
    </footer>
  );
}