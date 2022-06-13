import cx from "classnames";
import PropTypes from "prop-types";

export default function ButtonTab(props) {
  const { btnName, active } = props;

  const btnClass = cx({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": active,
  });

  return (
    <a
      data-filter="*"
      href="#"
      className={btnClass}
    >
      {btnName}
    </a>
  );
}

ButtonTab.propTypes = {
  btnName: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

ButtonTab.defaultProps = {
  active: false,
};
