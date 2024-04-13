import { useSelector } from "react-redux";

const SideBarBodyTab = ({ tabName, selected }) => {
  return (
    <li>
      <Link
        to="/dashboard"
        className={selected ? "nav-link active" : "nav-link text-white"}
      >
        <svg className="bi pe-none me-2" width="16" height="16">
          <use href="#speedometer2"></use>
        </svg>
        {tabName}
      </Link>
    </li>
  );
};

export default SideBarBodyTab;
