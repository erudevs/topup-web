import PropTypes from "prop-types";

export default function ReachItem(props) {
  const { bigText, smallText, lastItem } = props;
  return (
    <>
      <div className="me-lg-35">
        <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
          {bigText}
        </p>
        <p className="text-lg text-lg-start text-center color-palette-2 m-0">
          {smallText}
        </p>
      </div>
      {!lastItem && (
        <>
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" />
        </>
      )}
    </>
  );
}

ReachItem.propTypes = {
  bigText: PropTypes.string,
  smallText: PropTypes.string,
  lastItem: PropTypes.bool,
};

ReachItem.defaultProps = {
  bigText: "Big Text",
  smallText: "Small Text",
  lastItem: false,
};
