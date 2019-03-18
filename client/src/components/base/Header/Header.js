import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Material-Styles
import { withStyles } from '@material-ui/core/styles';
import styled from "styled-components";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import LockIcon from '@material-ui/icons/LockOutlined';

const StyledAppBar = styled(AppBar)`
    &&{
        background-color: white;
        box-shadow: 0px 2px 0px rgba(255, 105, 135, .3);
    }
`

class Header extends Component {
  state = {
    isOpen: false
  };

  handleOpen = () => {
    this.setState({ isOpen: true })
  };

  handleClose = () => {
    this.setState({ isOpen: false })
  };

  render() {
    const { classes } = this.props;

    return (
        <div className>
          <StyledAppBar position="static" color="default">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Paou
              </Typography>
            </Toolbar>
          </StyledAppBar>
        </div>
      );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Header;