

import SideBarHeader from "./SideBarHeader";
import SideBarFooter from "./SideBarFooter";
import SideBarBody from "./SideBarBody";

export default function SideBar() {
  

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ width: "220px", height: "90vh" }}
    >
      <SideBarHeader />
      <hr />
      <SideBarBody />
      <hr />
      <SideBarFooter />
    </div>
  );
}
