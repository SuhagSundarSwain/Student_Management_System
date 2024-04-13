import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideBarBody = () => {
  const sideBarTab = useSelector((store) => store.sideBarTab);

  return (
    <ul className="nav nav-pills flex-column mb-auto">
        
      <li>
        <Link
          to="/dashboard"
          className={
            sideBarTab.tab === "dashboard"
              ? "nav-link active"
              : "nav-link text-white"
          }
        >
          <svg className="bi pe-none me-2" width="16" height="16">
            <use href="#speedometer2"></use>
          </svg>
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/result"
          className={
            sideBarTab.tab === "result"
              ? "nav-link active"
              : "nav-link text-white"
          }
          aria-current="page"
        >
          <svg className="bi pe-none me-2" width="16" height="16">
            <use href="#home"></use>
          </svg>
          Result
        </Link>
      </li>
    </ul>
  );
};

export default SideBarBody;
