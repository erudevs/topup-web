import cx from "classnames";
import PropTypes from "prop-types";

export default function ButtonTab(props) {
  const { btnName, active, onClick } = props;

  const btnClass = cx({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": active,
  });

  return (
    <button
      type="button"
      onClick={onClick}
      className={btnClass}
    >
      {btnName}
    </button>
  );
}

ButtonTab.propTypes = {
  btnName: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

ButtonTab.defaultProps = {
  active: false,
};
