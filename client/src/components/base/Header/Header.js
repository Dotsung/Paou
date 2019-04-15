// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styled from "styled-components";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const StyledAppBar = styled(AppBar)`
    && {
        display : flex;
        background-color: white;
        height: 100px;
        box-shadow: 0px 2px 0px rgba(255, 105, 135, .3);
    }
`;

const StyledTypography = styled(({marginTop, ...other}) => (
  <Typography {...other}/>
))`
  && {
    margin-top : ${props => props.marginTop};
    font-size : 1.7rem;
  }
`

const StyledButton = styled(Button)`
    && {
        background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 70%);
        border-radius: 5px;
        border: 0;
        margin-top: 30px;
        margin-left: 25px;
        color: white;
        height: 40px;
        padding: 0 20px;
        box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
    }
`;

const StyledAvatar = styled(Avatar)`
    && {
      background-color : #01DFD7;
      margin-left: 20px;
      margin-top: 30px;
    }
`;

const Search = styled.div`
  && {
    border-radius: 5px;
    margin-top : 30px;
    background-color: #F2F2F2
    input:focus ~ & {
      background-color: #FAFAFA;
    }
  }
`

const StyledSearchIcon = styled(SearchIcon)`
  && {
    position: relative;
    top:7px;
    padding-left : 15px;
    padding-right : 15px;
  }
`

const StyledInputBase = styled(({...other})=> (
  <InputBase
    classes = {{
      root : 'inputRoot',
      input : 'inputInput' 
    }}
    {...other}
  />
))`
    height: 40px;

    & .inputRoot {
    }

    & .inputInput {
        width: 200px;
    }

    & .inputInput:focus {
        width: 300px;
    }
    
`;

const Grow = styled.div`
    background: black;
    flex-grow: 1;
`;

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
              <StyledTypography marginTop="25px" variant="h6" color="inherit">
                Paou
              </StyledTypography>
              <Grow/>
              <Search>
                <StyledSearchIcon/>
                <StyledInputBase
                  placeholder="Search…"
                />
              </Search>
              <StyledButton>
                  + New
              </StyledButton>
              <StyledAvatar>HT</StyledAvatar>
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