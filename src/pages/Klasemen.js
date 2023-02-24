import React, { useState } from "react";
import dataclub from "./dataclub.json";
import arsenal from "../images/arsenal.png";
import Navbar from "../components/Navbar";

function Menu() {
  const [clubs, setClubs] = useState(dataclub);
  const [isDrop, setisDrop] = useState(false)

  return (
    <main className="container">
       <Navbar />
      <div className="w-4/5 mx-auto px-6">
        <div className="bg-gray-200 items-center w-full text-sm font-bold py-3 px-8">
          <p className="font-light text-left">Musim</p>
          <div className="flex flex-col">
        <div className="flex items-center">
          <div >
            <p class="capitalize font-semibold text-blue-800">2022-2023</p>
          </div>
          <div>
            <button button className = "text-blue-800"
            onClick = {
              () => setisDrop(!isDrop)
            } >
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
            <a href="#" className="block hover:text-white">
              2022-23
            </a>
            <a href="#" className="block hover:text-white">
              2021-22
            </a>
          </div>
        </div>
      </div>
        </div>
        <div className="overflow-x-auto bg-white shadow-md pt-2">
          <table className="table-fixed min-w-full border-collapse text-center">
            <thead>
              <tr className="font-normal text-xs border-b">
                <td className="pl-4 py-2 text-left">Klub</td>
                <td className="px-1 py-2 w-1/12">Menang</td>
                <td className="px-1 py-2 w-1/12">Seri</td>
                <td className="px-1 py-2 w-1/12">Kalah</td>
                <td className="px-1 py-2 w-1/12">Poin</td>
              </tr>
            </thead>
            <tbody>
              {clubs.map((club) => (
                <tr key={club.id} className="text-sm border-l-indigo-900 border-l-4 border-2">
                  <td className="flex gap-2 items-center px-1 py-2">
                    <p class="pl-4">{club.id}</p>
                    <div className="w-6 h-6">
                      <img
                        src={club.logo}
                        alt="logo_grup"
                        className="w-full h-full"
                      />
                    </div>
                    <h1>{club.namaclub}</h1>
                  </td>
                  <td className="px-1 py-2">{club.menang}</td>
                  <td className="px-1 py-2">{club.seri}</td>
                  <td className="px-1 py-2">{club.kalah}</td>
                  <td className="px-1 py-2">{club.point}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
    </main>
  );
}

export default Menu;
