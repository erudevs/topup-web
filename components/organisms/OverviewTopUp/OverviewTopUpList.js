/* eslint-disable react/prop-types */

import OverviewTopUpItem from "./OverviewTopUpItem";

export default function OverviewTopUpList({ items }) {
  return (
    <>
      {items.map((item) => (
        <OverviewTopUpItem
          itemIcon={item.name}
          itemName={item.name}
          itemSpentTotal={item.totalSpent}
        />
      ))}
      <div>OverviewTopUpList</div>
    </>
  );
}
