import React from "react";
import PropTypes from "prop-types";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };

    this.onValueChangeEventHandler = this.onValueChangeEventHandler.bind(this);
  }

  onValueChangeEventHandler(evt) {
    this.setState((prevState) => ({
      ...prevState,
      inputValue: evt.target.value,
    }));
  }

  render() {
    const { inputValue } = this.state;
    const {
      inputName, inputType, inputPlaceholder,
    } = this.props;

    return (
      <input
        type={inputType}
        className="form-control rounded-pill text-lg"
        id={inputName}
        name={inputName}
        aria-describedby={inputName}
        value={inputValue}
        placeholder={inputPlaceholder}
        onChange={this.onValueChangeEventHandler}
      />
    );
  }
}

export default Input;

Input.propTypes = {
  inputName: PropTypes.string,
  inputType: PropTypes.string,
  inputPlaceholder: PropTypes.string,
};

Input.defaultProps = {
  inputName: "name",
  inputType: "text",
  inputPlaceholder: "Enter placeholder",
};
