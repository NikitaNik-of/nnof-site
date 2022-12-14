import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ThemeChng from "./ThemeChng";
import NavBtn from "./UI/NavBtn";
import { Bars3Icon,  } from "@heroicons/react/24/outline"
import { Switch } from "@headlessui/react";
import MenuModal from "./UI/MenuModal";
import pagesInfo from "../api/pages.json"
import settings from "../api/settings.json";
import SnowSwitch from "./UI/SnowSwitch";


const NavBar = ( {stateSnow, setStateSnow} ) => {
  const curPage = useRouter().pathname;
  const [Pages, setPages] = useState(pagesInfo.navPages);
  const [mobMenu, setMobMenu] = useState(false)

  const isSnow = (b) => {
    if (b) return <div style={{backgroundImage:'url(/snowlayer2.png)'}} className="absolute bg-repeat-x w-full h-2 inset-0 left-[2px]" />
    else return null
  }

  return (
    <nav className="transition-all backdrop-filter backdrop-blur top-0 z-50 fixed w-screen h-16 hover:dark:shadow-gray-800/60 hover:bg-gray-300/50 hover:shadow-2xl hover:shadow-gray-300/50 hover:dark:bg-gray-800/60 border-b-[0.5px] border-gray-300 dark:border-gray-800 flex justify-center duration-300"> {/* base of navbar */}
      {isSnow(settings.isSnow)}
      <div className="max-w-7xl hidden lg:visible lg:flex w-4/5 mx-auto justify-between items-center"> {/* navbar container */}
        <div className="flex justify-start space-x-4 py-3 items-center">
          {Pages.map((page) => (
            <Link key={page.id} href={page.address}>
              <NavBtn pageLink={page.address} curPage={curPage}>
                {page.name}
              </NavBtn>
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <ThemeChng/>
          {settings.isSnow ? <SnowSwitch setStateSnow={setStateSnow} stateSnow={stateSnow}/> : null}
        </div>
      </div>
      <div className="flex my-auto mx-2 w-full justify-between items-center lg:hidden"> {/* mobile navbar container */}
        <div className=" flex items-center m-0 p-2">
          <button onClick={() => (mobMenu) ? setMobMenu(false) : setMobMenu(true) } className='bg-transparent hover:bg-gray-300 dark:hover:bg-gray-700 aspect-square rounded-2xl p-1 transition-colors box-content align-middle text-center text-sm tracking-wide'>
            <Bars3Icon className="h-6 w-6 m-1 bg-transparent text-black dark:text-white text-center"/>
            <MenuModal isVisible={mobMenu} setIsVisible={setMobMenu} />
          </button>
        </div>
        <div className="flex items-center m-0 p-2 space-x-1">
          <ThemeChng/>
          {console.log(settings.isSnow)}
          {settings.isSnow ? <SnowSwitch setStateSnow={setStateSnow} stateSnow={stateSnow}/> : null}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
