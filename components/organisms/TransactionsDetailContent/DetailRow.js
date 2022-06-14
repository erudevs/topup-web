import PropTypes from "prop-types";
import { formatNumber } from "../../../utils";

export default function DetailRow(props) {
  const { label, value, className } = props;
  const checkValueType = (val) => {
    if (typeof val === "number") {
      return formatNumber.format(val);
    }

    return val;
  };

  return (
    <p className="text-lg color-palette-1 mb-20">
      {label} <span className={`purchase-details ${className}`}>{checkValueType(value)}</span>
    </p>
  );
}

DetailRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

DetailRow.defaultProps = {
  value: "Value",
  className: "",
};
