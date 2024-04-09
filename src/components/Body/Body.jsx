import SideBar from "../SideBar";
import { Outlet } from "react-router-dom";
import styles from "./Body.module.css";
const Body = () => {
  return (
    <div className={styles.body}>
      <SideBar  />
      <Outlet />
    </div>
  );
};
export default Body;
