/* eslint-disable react/prop-types */
import { useRouter } from "next/router";
import SidebarMenuItem from "./SidebarMenuItem";

export default function SidebarMenuList(props) {
  const { items } = props;
  const router = useRouter();

  return (
    <>
      {
        items.map((item) => (
          <SidebarMenuItem
            key={item.id}
            menuTitle={item.title}
            menuLink={item.link}
            isActive={item.link === router.pathname}
          />
        ))
      }
    </>
  );
}
