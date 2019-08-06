import React, { Component } from "react";
class Like extends Component {
  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes = "fa fa-heart-o";
    return (
      <i
        className={classes}
        style={{ cursor: "pointer" }}
        onClick={this.props.onClick}
      />
    );
  }
}

export default Like;
