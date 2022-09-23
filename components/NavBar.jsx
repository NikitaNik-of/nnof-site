import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ThemeChng from "./ThemeChng";
import NavBtn from "./UI/NavBtn";


const NavBar = () => {
  const curPage = useRouter().pathname;
  const [navPages, setNavPages] = useState([
    { id: 1, name: "Главная страница", adress: "/" },
    { id: 2, name: "О сайте", adress: "/about" },
    { id: 3, name: "404", adress: "/404" },
  ]);

  return (
    <nav className=" transition-colors backdrop-blur top-0 z-40 sticky bg-white/70 dark:bg-gray-800/70 border-b border-gray-400"> {/* base of navbar */}
      <div className="flex w-4/5 mx-auto justify-between"> {/* navbar container */}
        <div className="flex justify-start space-x-4 py-3 items-center">
          {navPages.map((page) => (
            <Link href={page.adress} passHref>
              <NavBtn pageLink={page.adress} curPage={curPage}>
                {page.name}
              </NavBtn>
            </Link>
          ))}
        </div>
        <div className="flex justify-end">
          <ThemeChng/>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
