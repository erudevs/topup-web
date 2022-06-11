/* eslint-disable react/prop-types */
import { useRouter } from "next/router";
import SidebarMenuItem from "./SidebarMenuItem";

export default function SidebarMenuList({ items }) {
  const router = useRouter();

  return (
    <>
      {
        items.map((item) => (
          <SidebarMenuItem
            key={item.id}
            itemName={item.name}
            itemLink={item.link}
            isActive={item.link === router.pathname}
          />
        ))
      }
    </>
  );
}
