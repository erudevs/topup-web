import PropTypes from "prop-types";

export default function StepItem(props) {
  const {
    stepIcon, stepTitle, stepDesc1, stepDesc2,
  } = props;
  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
        <img
          src={`/icon/${stepIcon}.svg`}
          width={80}
          height={80}
          alt="Icon Step"
          className="mb-30"
        />
        <p className="fw-semibold text-2xl mb-2 color-palette-1">{stepTitle}</p>
        <p className="text-lg color-palette-1 mb-0">
          {stepDesc1}
          <br /> {stepDesc2}
        </p>
      </div>
    </div>
  );
}

StepItem.propTypes = {
  stepIcon: PropTypes.string,
  stepTitle: PropTypes.string,
  stepDesc1: PropTypes.string,
  stepDesc2: PropTypes.string,
};

StepItem.defaultProps = {
  stepIcon: "step-icon",
  stepTitle: "Step Title",
  stepDesc1: "Step Desc 1",
  stepDesc2: "Step Desc 2",
};
