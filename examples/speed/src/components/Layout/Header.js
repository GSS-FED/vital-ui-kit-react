import React, { PureComponent } from 'react';
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

const MenuItem = styled(Menu.Item)`
  display: flex;
`;

const MenuWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
`;

class Header extends PureComponent {
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
          <Menu style={{ flexDirection: 'row', display: 'flex' }}>
            <MenuItem>
              <MenuIcon name="user" />
              User Accounts
            </MenuItem>
            <MenuItem>
              <MenuIcon name="search" />
              Search
            </MenuItem>
            <MenuItem>
              <MenuIcon name="cog" />
              Setting
            </MenuItem>
            <MenuItem>
              <MenuIcon name="power-off" />
              Logout
            </MenuItem>
          </Menu>
        </MenuWrapper>
      </Root>
    );
  }
}

export default Header;
