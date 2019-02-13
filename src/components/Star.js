//
// Counter.js
// react_study
//
// Created by josephnk 2019. 02. 10
// Copyright © 2019 Company All rights reserved
//

import React, { Component } from "react";
import "./Star.scss";
import Rateoff from "../data/image/rate_off.png";
import Rateon from "../data/image/rate_on.png";
import PropTypes from "prop-types";

class Star extends Component {
  static propTypes = {
    starNumber: PropTypes.node,
    onRating: PropTypes.func,
    count: PropTypes.node
  };

  static defaultProps = {
    starNumber: 5,
    onRating: count => console.warn("onRating not defined") //
  };

  componentDidMount() {}

  render() {
    const { starNumber, onRating, count } = this.props;
    const table = [];

    this.datas = [];
    console.log("Star :", "count :", count, "/ starNumber :", starNumber);

    for (let i = 1; i <= starNumber; i++) {
      i <= count
        ? table.push(
            <img
              key={i}
              src={Rateon}
              className="Star"
              alt=""
              onClick={() => onRating(count, i)}
            />
          )
        : table.push(
            <img
              key={i}
              src={Rateoff}
              className="Star"
              alt=""
              onClick={() => onRating(count, i)}
            />
          );
    }
    return table;
  }
}

export default Star;
