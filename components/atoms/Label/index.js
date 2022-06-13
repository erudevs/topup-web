import PropTypes from "prop-types";

export default function Label(props) {
  const { labelName, children, labelClass } = props;
  return (
    <label htmlFor={labelName} className={labelClass}>
      {children}
    </label>
  );
}

Label.propTypes = {
  labelName: PropTypes.string,
  children: PropTypes.node,
  labelClass: PropTypes.string,
};

Label.defaultProps = {
  labelName: "Label",
  children: null,
  labelClass: "",
};
