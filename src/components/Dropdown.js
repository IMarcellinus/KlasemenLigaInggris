import React, { useState } from "react";

const Dropdown = () => {
    const [isDrop, setisDrop] = useState(false)
  return (
    <div className="bg-sky-500 w-32">
      <div className="flex flex-col">
        <div className="flex items-center px-2 py-2">
          <div >
            <p class="capitalize font-semibold text-white">2022-2023</p>
          </div>
          <div>
            <button className="text-white" onClick={() => setisDrop(!isDrop)}>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className={`${isDrop ? 'block' : 'hidden'}`}>
          <div className="flex flex-col  items-start">
            <a href="#" className="block px-4 py-5 hover:text-white">
              2022-23
            </a>
            <a href="#" className="block px-4 py-5 hover:text-white">
              2021-22
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
