"use client";

import { useState } from "react";

import Image from "next/image";
import styled from "styled-components";
import menuStyle from "./menu.module.css";
import Link from "next/link";

const MenuTab = styled.div`
  display: none;
  animation: ${(props) => props.$menu && "menuIntro 0.5s ease-out forwards"};
  display: ${(props) => props.$menu && "flex"};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  padding: 1rem;
  @keyframes menuIntro {
    0% {
      height: 0;
    }
    100% {
      height: 100%;
    }
  }
`;

export default function Menu() {
  const [menu, setMenu] = useState({
    showMenu: false,
  });

  const handleShowMenu = () => {
    setMenu((prev) => ({
      ...prev,
      showMenu: !prev.showMenu,
    }));
  };

  const handleClickItem = () => {
    setMenu((prev) => ({
      ...prev,
      showMenu: false,
    }));
  };

  return (
    <div className={menuStyle.menu}>
      <div onClick={handleShowMenu} className={menuStyle.menuBtn} id="menu">
        {menu.showMenu ? (
          <Image
            src="/images/close-icon.svg"
            alt="menu"
            width={24}
            height={24}
            color="white"
            className={menuStyle.menuBtn__icon}
          />
        ) : (
          <Image
            src="/images/menu-icon.svg"
            alt="menu"
            width={24}
            height={24}
            color="white"
            className={menuStyle.menuBtn__icon}
          />
        )}
      </div>

      <MenuTab $menu={menu.showMenu} id="menuTab">
        <div className={menuStyle.links}>
          <Link
            href="#personalInfo"
            className={menuStyle.menuIntro__item}
            onClick={handleClickItem}
          >
            ABOUT ME
          </Link>

          <Link
            href="#projects"
            className={menuStyle.menuIntro__item}
            onClick={handleClickItem}
          >
            PROJECTS
          </Link>

          <Link
            href="#contact"
            className={menuStyle.menuIntro__item}
            onClick={handleClickItem}
          >
            CONTACT
          </Link>
        </div>
      </MenuTab>
    </div>
  );
}
