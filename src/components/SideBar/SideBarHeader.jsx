import MenuIcon from "@mui/icons-material/Menu";
const SideBarHeader = () => {
  return (
    <a
      href="#"
      className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
    >
      <svg className="bi pe-none me-2" width="40" height="32">
        <MenuIcon />
      </svg>
      <span className="fs-4">MENU</span>
    </a>
  );
};

export default SideBarHeader;
