import Link from "next/link";
import PropTypes from "prop-types";
import CardIcon from "../../atoms/CardIcon";
import LogoutIcon from "../../atoms/LogoutIcon";
import MessageIcon from "../../atoms/MessageIcon";
import OverviewIcon from "../../atoms/OverviewIcon";
import RewardIcon from "../../atoms/RewardIcon";
import SettingIcon from "../../atoms/SettingIcon";
import TransactionIcon from "../../atoms/TransactionIcon";

export default function SidebarMenuItem({
  itemName, itemLink, isActive,
}) {
  const getIconName = (iconName) => {
    switch (iconName) {
      case "Overview":
        return <OverviewIcon />;
      case "Transactions":
        return <TransactionIcon />;
      case "Messages":
        return <MessageIcon />;
      case "Card":
        return <CardIcon />;
      case "Rewards":
        return <RewardIcon />;
      case "Settings":
        return <SettingIcon />;
      case "Log Out":
        return <LogoutIcon />;
      default:
        return null;
    }
  };

  return (
    <div className={`item mb-30 ${isActive ? "active" : ""}`}>
      {getIconName(itemName)}
      <p className="item-title m-0">
        <Link href={`${itemLink}`}>
          <a className="text-lg text-decoration-none" role="link">
            {itemName}
          </a>
        </Link>
      </p>
    </div>
  );
}

SidebarMenuItem.propTypes = {
  itemName: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  itemLink: PropTypes.string.isRequired,
};

SidebarMenuItem.defaultProps = {
  isActive: false,
};
