import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/lab/Slider";

const styles = {
  root: {
    width: 300
  },
  slider: {
    padding: "22px 0px"
  }
};

class SimpleSlider extends Component {
  state = {
    slider1: 50,
    slider2: 50
  };

  handleChange = name => (e, value) => {
    this.setState({
      [name]: value // --> Important bit here: This is how you set the value of sliders
    });
  };

  render() {
    const { classes } = this.props;
    const { slider1, slider2 } = this.state;

    return (
      <div className={classes.root}>
        <Typography id="label">Slider label</Typography>
        <Slider
          classes={{ container: classes.slider }}
          value={slider1}
          aria-labelledby="label"
          onChange={this.handleChange("slider1")}
        />
        <Slider
          classes={{ container: classes.slider }}
          value={slider2}
          aria-labelledby="label"
          onChange={this.handleChange("slider2")}
        />
      </div>
    );
  }
}

SimpleSlider.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSlider);
