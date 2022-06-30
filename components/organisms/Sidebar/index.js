import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Profile from "./Profile";
import SidebarFooter from "./SidebarFooter";
import SidebarMenuItem from "./SidebarMenuItem";

export default function Sidebar() {
  const router = useRouter();

  const onLogoutHandler = () => {
    Cookies.remove("tkn");
    router.push("/");
  };

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <SidebarMenuItem
            menuTitle="Overview"
            menuLink="/member"
            isActive={router.pathname === "/member"}
          />
          <SidebarMenuItem
            menuTitle="Transactions"
            menuLink="/member/transactions"
            isActive={router.pathname === "/member/transactions"}
          />
          <SidebarMenuItem
            menuTitle="Settings"
            menuLink="/member/edit-profile"
            isActive={router.pathname === "/member/settings"}
          />
          <SidebarMenuItem
            menuTitle="Log Out"
            onClick={onLogoutHandler}
          />
        </div>
        <SidebarFooter />
      </div>
    </section>
  );
}
