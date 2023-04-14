import { useState } from "react";

import style from "./navBar.module.css";

const NavBar = () => {
  const [activeTab1, setActiveTab1] = useState(true);
  const [activeTab2, setActiveTab2] = useState(false);
  const [activeTab3, setActiveTab3] = useState(false);
  const setTab = (tabNum: number) => {
    if (tabNum === 1) {
      setActiveTab1(true);
      setActiveTab2(false);
      setActiveTab3(false);
    } else if (tabNum === 2) {
      setActiveTab1(false);
      setActiveTab3(false);
      setActiveTab2(true);
    } else if (tabNum === 3) {
      setActiveTab1(false);
      setActiveTab2(false);
      setActiveTab3(true);
    }
  };

  return (
    <nav className={style.navContainer}>
      <h2 className={style.logo}>Logo</h2>

      <ul className={style.listTabs}>
        <li
          className={
            activeTab1
              ? `${style.tabItem1Active} ${style.tabItem1}`
              : style.tabItem1
          }
          onClick={e => {
            setTab(1);
          }}
        >
          Tab1
        </li>
        <li
          className={
            activeTab2
              ? `${style.tabItem2Active} ${style.tabItem2} ${style.tabItem2Right}`
              : activeTab1
              ? `${style.tabItem2} ${style.tabItem2Right}`
              : `${style.tabItem2Active} ${style.tabItem2}`
          }
          onClick={e => {
            setTab(2);
          }}
        >
          Tab2
        </li>
        <li
          className={
            activeTab3
              ? `${style.tabItem3Active} ${style.tabItem3}`
              : style.tabItem3
          }
          onClick={e => {
            setTab(3);
          }}
        >
          Tab3
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
