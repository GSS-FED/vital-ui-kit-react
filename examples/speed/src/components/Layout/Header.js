import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Menu, Icon, defaultTheme } from '@gssfed/vital-ui-kit-react';
import 'rc-color-picker/assets/index.css';
import ColorPicker from 'rc-color-picker';

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
  color: #2a4880;
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
  state = {};

  changeHandler = (value) => {
    this.props.onChangeColor(value.color)
  }

  render() {
    return (
      <Root>
        <LogoWrapper>
          <LogoImage src={uwillx} />
        </LogoWrapper>
        <TheName>Vital Ui Kit</TheName>
        <MenuWrapper>
          <Menu style={{ flexDirection: 'row', display: 'flex' }}>
            <MenuItem>
              <ColorPicker
                animation="slide-up"
                color={defaultTheme.primary}
                onChange={this.changeHandler}
              />
            </MenuItem>
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
