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
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';

import LockIcon from '@material-ui/icons/LockOutlined';

const StyledAppBar = styled(AppBar)`
    &&{
        display : flex;
        background-color: white;
        box-shadow: 0px 2px 0px rgba(255, 105, 135, .3);
        text-align: right;
    }
`

const StyledButton = styled(Button)`
    &&{
        background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
        border-radius: 5px;
        border: 0;
        color: white;
        height: 40px;
        padding: 0 20px;
        box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
    }
`;


const Grow = styled.div`
    flex-grow: 1;
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
        <div>
          <StyledAppBar position="static" color="default">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Paou
              </Typography>
                <Grow/>
                <StyledButton>
                    + New
                </StyledButton>
                
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