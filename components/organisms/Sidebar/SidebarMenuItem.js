import Link from "next/link";
import PropTypes from "prop-types";
import cx from "classnames";

import CardIcon from "../../atoms/CardIcon";
import LogoutIcon from "../../atoms/LogoutIcon";
import MessageIcon from "../../atoms/MessageIcon";
import OverviewIcon from "../../atoms/OverviewIcon";
import RewardIcon from "../../atoms/RewardIcon";
import SettingIcon from "../../atoms/SettingIcon";
import TransactionIcon from "../../atoms/TransactionIcon";

export default function SidebarMenuItem(props) {
  const {
    menuTitle, menuLink, isActive, onClick,
  } = props;

  const classItem = cx({
    item: true,
    "mb-30": true,
    active: isActive,
  });

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
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={classItem} onClick={onClick}>
      {getIconName(menuTitle)}
      <p className="item-title m-0">
        {onClick ? (
          <a className="text-lg text-decoration-none" style={{ cursor: "pointer" }} role="link">
            {menuTitle}
          </a>
        ) : (
          <Link href={`${menuLink}`}>
            <a className="text-lg text-decoration-none">
              {menuTitle}
            </a>
          </Link>
        )}
      </p>
    </div>
  );
}

SidebarMenuItem.propTypes = {
  menuTitle: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  menuLink: PropTypes.string,
  onClick: PropTypes.func,
};

SidebarMenuItem.defaultProps = {
  isActive: false,
  menuLink: "",
  onClick: null,
};
