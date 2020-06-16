import React from "react"
import PropTypes from "prop-types"
import './style.scss';
class HelloWorld extends React.Component {
  render () {
    return (
      <div className={"greeting"}>
        {this.props.greeting}
      </div>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
