import OverviewTopUpItem from "./OverviewTopUpItem";

export default function OverviewTopUp() {
  return (
    <div className="top-up-categories mb-30">
      <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
      <div className="main-content">
        <div className="row">
          <OverviewTopUpItem itemIcon="desktop-game-icon" itemSpentTotal="18.000.500">
            Game <br /> Desktop
          </OverviewTopUpItem>
          <OverviewTopUpItem itemIcon="mobile-game-icon" itemSpentTotal="8.455.000">
            Game <br /> Mobile
          </OverviewTopUpItem>
          <OverviewTopUpItem itemIcon="desktop-game-icon" itemSpentTotal="5.000.000">
            Other <br /> Categories
          </OverviewTopUpItem>
        </div>
      </div>
    </div>
  );
}
