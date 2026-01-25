import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-[100%] h-[40vh] bg-gray-200 ">
      <div className="pt-10 ml-[4rem]">
        <h1 className="pt-1 ml-1 text-2xl font-medium text-gray-800">
          Inspiration for future getaways
        </h1>
        <div className="flex justify-evenly flex-wrap mt-5 ml-[-13rem]">
          <div className="flex flex-col gap-5 mb-[3rem]">
            <ul>
              <li className=" mb-[2rem]">
                <Link to="/" className="text-gray-900 hover:underline">
                  Galveston
                </Link>
              </li>
              <li className=" mb-[2rem]">
                <Link to="/" className="text-gray-900 hover:underline">
                  Athens
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-900 hover:underline">
                  Gulf Shores
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-5 mb-[3rem]">
            <ul>
              <li className=" mb-[2rem]">
                <Link to="/" className="text-gray-900 hover:underline">
                  Barcelona
                </Link>
              </li>
              <li className=" mb-[2rem]">
                <Link to="/" className="text-gray-900 hover:underline">
                  Charlotte
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-900 hover:underline">
                  Domingo
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-5 mb-[3rem]">
            <ul>
              <li className=" mb-[2rem]">
                <Link to="/" className="text-gray-900 hover:underline">
                  Oahu
                </Link>
              </li>
              <li className=" mb-[2rem]">
                <Link to="/" className="text-gray-900 hover:underline">
                  Montreal
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-900 hover:underline">
                  Madrid
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-5 mb-[3rem]">
            <ul>
              <li className=" mb-[2rem]">
                <Link to="/" className="text-gray-900 hover:underline">
                  Savannah
                </Link>
              </li>
              <li className=" mb-[2rem]">
                <Link to="/" className="text-gray-900 hover:underline">
                  Philadelphia
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-900 hover:underline">
                  Cleveland
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-5 mb-[3rem]">
            <ul>
              <li className=" mb-[2rem]">
                <Link to="/" className="text-gray-900 hover:underline">
                  Milan
                </Link>
              </li>
              <li className=" mb-[2rem]">
                <Link to="/" className="text-gray-900 hover:underline">
                  Kansas
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-900 hover:underline">
                  Daytona
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10 text-gray-600 ml-[3rem] ">
        © 2025 Wanderlust Rental Booking Platform. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
