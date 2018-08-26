import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Menu, Icon, Box, defaultTheme } from '@vital-ui/react';
import 'rc-color-picker/assets/index.css';
import ColorPicker from 'rc-color-picker';

// eslint-disable-next-line
import uwillx from './uwillx.png';

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

  changeHandler = value => {
    this.props.onChangeColor(value.color);
  };

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
              <Box mr="10px">
                <Icon.Book />
              </Box>
              Book
            </MenuItem>
            <MenuItem>
              <Box mr="10px">
                <Icon.Bell />
              </Box>
              Bell
            </MenuItem>
            <MenuItem>
              <Box mr="10px">
                <Icon.Umbrella />
              </Box>
              Umbrella
            </MenuItem>
            <MenuItem>
              <Box mr="10px">
                <Icon.Rocket />
              </Box>
              Rocket
            </MenuItem>
          </Menu>
        </MenuWrapper>
      </Root>
    );
  }
}

export default Header;
