import { useState } from "react";
import logobola from "../images/inggris.png";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState();
  const navigate = useNavigate();

  return (
    <div class="border-2 bg-sky-800">
      <div class="flex flex-col lg:flex-row">
        <div class="flex items-center justify-between px-4 py-4 border-b border-sky-500 lg:border-b-0">
          <div class="flex items-center ">
            <img src={logobola} alt="logo bola" class="w-10 h-10" />
            <a class="font-semibold capitalize">Klasemen Liga Inggris</a>
          </div>
          <div>
            <button
              class="text-white block lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  class={!isOpen ? "block" : "hidden"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
                <path
                  class={isOpen ? "block" : "hidden"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        class={`${
          isOpen ? "block" : "hidden"
        } lg:flex flex-col lg:flex-row w-full`}
      >
        <div className="flex mx-auto flex-col lg:flex-row">
          <button onClick={() => navigate("/pertandingan")}>
            <a href="#" class="block uppercase px-4 py-3 lg:py-4 text-white">
              pertandingan
            </a>
          </button>
          <a href="#" class="block uppercase px-4 py-3 lg:py-4 text-white">
            berita
          </a>
          <a
            href="#"
            class="block uppercase px-4 py-3 lg:py-4 text-white hover:bg-sky-900 border-b-0 lg:border-b-2"
          >
            klasemen
          </a>
          <a href="#" class="block uppercase px-4 py-3 lg:py-4 text-white">
            statistik
          </a>
          <a href="#" class="block uppercase px-4 py-3 lg:py-4 text-white">
            pemain
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
