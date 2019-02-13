import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CustomInputText extends Component {
  static propTypes = {
    // starNumber: PropTypes.node,
    // onRating: PropTypes.func,
    // count: PropTypes.node
  };

  static defaultProps = {};

  render() {
    return (
      <div>
        <input type="text" name="testInput" value="testInput" />
      </div>
    );
  }
}
