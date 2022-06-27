/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

export default function DetailTopUpItem(props) {
  const { isMobile, data } = props;

  if (isMobile) {
    return (
      <div className="col-md-12 col-8 d-md-none d-block">
        <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">
          {data.name}
        </h2>
        <p className="text-sm color-palette-2 text-start mb-0">Category: {data.category.name}</p>
      </div>
    );
  }
  return (
    <div className="pb-50 d-md-block d-none">
      <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">
        {data.name}
      </h2>
      <p className="text-lg color-palette-2 mb-0">Category: {data.category.name}</p>
    </div>
  );
}

DetailTopUpItem.propTypes = {
  isMobile: PropTypes.bool,
};

DetailTopUpItem.defaultProps = {
  isMobile: false,
};
