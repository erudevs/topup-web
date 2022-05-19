import PropTypes from "prop-types";
import cx from "classnames";
import Link from "next/link";

export default function NavMenu(props) {
  const { title, active, href } = props;
  const classTitle = cx({
    "nav-link": true,
    active,
  });
  return (
    <li className="nav-item my-auto">
      <Link href={href}>
        <a className={classTitle} aria-current="page">
          {title}
        </a>
      </Link>
    </li>
  );
}

NavMenu.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
  href: PropTypes.string,
};

NavMenu.defaultProps = {
  active: false,
  href: "/",
};
