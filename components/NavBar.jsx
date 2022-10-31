import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useTransition } from "react";
import ThemeChng from "./ThemeChng";
import MainButton from "./UI/MainButton";
import NavBtn from "./UI/NavBtn";
import { Bars3Icon } from "@heroicons/react/24/outline"
import MenuModal from "./UI/MenuModal";
import pagesInfo from "../api/pages.json"


const NavBar = () => {
  const curPage = useRouter().pathname;
  const [Pages, setPages] = useState(pagesInfo.navPages);
  const [mobMenu, setMobMenu] = useState(false)

  return (
    <nav className="transition-colors backdrop-blur top-0 z-40 fixed w-screen h-16 hover:bg-gray-200/50 hover:dark:bg-gray-800/60 border-b-[0.5px] border-gray-300 dark:border-gray-800 flex justify-center duration-300"> {/* base of navbar */}
      <div className="max-w-7xl hidden lg:visible lg:flex w-4/5 mx-auto justify-between items-center"> {/* navbar container */}
        <div className="flex justify-start space-x-4 py-3 items-center">
          {Pages.map((page) => (
            <Link key={page.id} href={page.address} passHref>
              <NavBtn pageLink={page.address} curPage={curPage}>
                {page.name}
              </NavBtn>
            </Link>
          ))}
        </div>
        <div className="flex items-center">
          <ThemeChng/>
        </div>
      </div>
      <div className="flex my-auto mx-2 w-full justify-between items-center lg:hidden"> {/* mobile navbar container */}
        <div className=" flexitems-center m-0 p-2">
          <button onClick={() => (mobMenu) ? setMobMenu(false) : setMobMenu(true) } className='bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 aspect-square rounded-2xl p-1 transition-colors box-content align-middle text-center text-sm tracking-wide'>
            <Bars3Icon className="h-6 w-6 m-1 bg-transparent text-black dark:text-white text-center"/>
            <MenuModal isVisible={mobMenu}/>
          </button>
        </div>
        <div className="flex items-center m-0 p-2">
          <ThemeChng/>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
