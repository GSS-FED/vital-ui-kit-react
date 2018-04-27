import React, { Component } from 'react';
import styled from 'styled-components';
import { Menu, Icon } from '@gssfed/vital-ui-kit-react';

// import uwillx from '../../../';
// eslint-disable-next-line
import uwillx from '~/../../assets/uwillx.png';

const MenuIcon = styled(Icon)`
  margin-right: 10px;
`;

const Root = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: #ffffff;
  z-index: 10;
  border-bottom: 1px solid #c4d2eb;
  ${'' /* overflow: hidden; */}
`;

const LogoWrapper = styled.div`
  height: 100%;
  width: 80px;
  display: inline-block;
  vertical-align: top;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const TheName = styled.div`
  display: inline-block;
  line-height: 50px;
  font-size: 20px;
  color: #2A4880;
`;

const MenuWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
`;

class Header extends Component {
  state = {  }
  render() {
    return (
      <Root>
        <LogoWrapper>
          <LogoImage src={uwillx} />
        </LogoWrapper>
        <TheName>
          Vital Ui Kit
        </TheName>
        <MenuWrapper>
          <Menu>
            <Menu.Item>
              <MenuIcon name="user" />
              User Accounts
            </Menu.Item>
            <Menu.Item>
              <MenuIcon name="search" />
              Search
            </Menu.Item>
            <Menu.Item>
              <MenuIcon name="cog" />
              Setting
            </Menu.Item>
            <Menu.Item>
              <MenuIcon name="power-off" />
              Logout
            </Menu.Item>
          </Menu>
        </MenuWrapper>
      </Root>
    );
  }
}

export default Header;
