import { getItemMenu } from "../../../utils";
import Profile from "./Profile";
import SidebarFooter from "./SidebarFooter";
import SidebarMenuList from "./SidebarMenuList";

export default function Sidebar() {
  const items = getItemMenu();

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <SidebarMenuList items={items} />
        </div>
        <SidebarFooter />
      </div>
    </section>
  );
}
