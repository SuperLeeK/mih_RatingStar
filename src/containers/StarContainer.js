import React, { Component } from "react";
import Star from "../components/Star";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "../App.scss";
import { actionCreaters as StarActions } from "../modules/Reducers";

class StarContainer extends Component {
  componentDidMount() {}

  handleRating = (count, key) => {
    const { StarActions } = this.props;
    StarActions.rating(count, key);
  };

  render() {
    const { count, starNumber } = this.props;
    console.log("StarContainer : ", "count", count, "/ starNumber", starNumber);
    return (
      <div className="container">
        <h1>Rating Star : {count}</h1>
        <Star
          count={count}
          starNumber={starNumber}
          onRating={this.handleRating}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count,
  key: state.key
});

const mapDispatchToProps = dispatch => ({
  StarActions: bindActionCreators(StarActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StarContainer);
