import OverviewTopUpItem from "./OverviewTopUpItem";

export default function OverviewTopUp() {
  return (
    <div className="top-up-categories mb-30">
      <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
      <div className="main-content">
        <div className="row">
          <OverviewTopUpItem itemIcon="desktop-game-icon" itemName="Game Desktop" itemSpentTotal="18.000.500" />
          <OverviewTopUpItem itemIcon="mobile-game-icon" itemName="Game Mobile" itemSpentTotal="8.455.000" />
          <OverviewTopUpItem itemIcon="desktop-game-icon" itemName="Other Categories" itemSpentTotal="5.000.000" />
        </div>
      </div>
    </div>
  );
}
