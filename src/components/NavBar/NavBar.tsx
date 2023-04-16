import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import style from "./navBar.module.css";

const NavBar = () => {
  const params = useRouter();
  const [activeTab1, setActiveTab1] = useState(true);
  const [activeTab2, setActiveTab2] = useState(false);
  const [activeTab3, setActiveTab3] = useState(false);

  useEffect(() => {
    const url = params.pathname.split("/");
    if (url[1] === "stocks") {
      setActiveTab1(false);
      setActiveTab3(false);
      setActiveTab2(true);
    } else if (url[1] === "savings") {
      setActiveTab1(false);
      setActiveTab2(false);
      setActiveTab3(true);
    } else {
      setActiveTab1(true);
      setActiveTab2(false);
      setActiveTab3(false);
    }
  }, [params.pathname]);

  return (
    <nav className={style.navContainer}>
      <h2
        className={style.logo}
        onClick={() => {
          params.push("/");
        }}
      >
        MyFi
      </h2>

      <ul className={style.listTabs}>
        <li
          className={
            activeTab1
              ? `${style.tabItem1Active} ${style.tabItem1}`
              : style.tabItem1
          }
          onClick={() => {
            params.push("/dashboard");
          }}
        >
          Dashboard
        </li>
        <li
          className={
            activeTab2
              ? `${style.tabItem2Active} ${style.tabItem2} ${style.tabItem2Right}`
              : activeTab1
              ? `${style.tabItem2} ${style.tabItem2Right}`
              : `${style.tabItem2Active} ${style.tabItem2}`
          }
          onClick={() => {
            params.push("/stocks");
          }}
        >
          Stocks
        </li>
        <li
          className={
            activeTab3
              ? `${style.tabItem3Active} ${style.tabItem3}`
              : style.tabItem3
          }
          onClick={() => {
            params.push("/savings");
          }}
        >
          Savings
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
