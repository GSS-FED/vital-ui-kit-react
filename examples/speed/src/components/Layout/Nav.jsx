import React from 'react';
import styled, { withTheme } from 'styled-components';
import { List } from '@vital-ui/react';

const TitleWrapper = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
`;

class Nav extends React.PureComponent {
  render() {
    return (
      <div
        style={{
          background: this.props.theme.secondary900,
          height: '100%',
        }}
      >
        <List themed="dark">
          <List.Item
            title={<TitleWrapper>Doc Inbox</TitleWrapper>}
            badge="99+"
            open
          >
            <List.Item
              title={<TitleWrapper>Appointments</TitleWrapper>}
            />
            <List.Item
              title={<TitleWrapper>Requisitions</TitleWrapper>}
              badge="10"
              open
            >
              <List.Item
                title={<TitleWrapper>Hardware</TitleWrapper>}
              />
              <List.Item
                title={<TitleWrapper>Software</TitleWrapper>}
              />
              <List.Item
                title={<TitleWrapper>Stationery</TitleWrapper>}
                badge="2"
              />
            </List.Item>
          </List.Item>
          <List.Item
            title={<TitleWrapper>Sending Operation</TitleWrapper>}
          />
          <List.Item
            title={<TitleWrapper>Form Operation</TitleWrapper>}
          />
          <List.Item
            title={<TitleWrapper>File Managment</TitleWrapper>}
          >
            <List.Item
              title={<TitleWrapper>Hardware</TitleWrapper>}
            />
            <List.Item
              title={<TitleWrapper>Software</TitleWrapper>}
            />
            <List.Item
              title={<TitleWrapper>Stationery</TitleWrapper>}
              badge="2"
            />
          </List.Item>
          <List.Item
            title={<TitleWrapper>Integrated Delivery</TitleWrapper>}
          />
          <List.Item
            title={<TitleWrapper>Register Operation</TitleWrapper>}
          />
          <List.Item
            title={<TitleWrapper>Remove Operation</TitleWrapper>}
          />
          <List.Item
            title={<TitleWrapper>Maintainance</TitleWrapper>}
          />
          <List.Item title={<TitleWrapper>Setting</TitleWrapper>} />
        </List>
      </div>
    );
  }
}

export default withTheme(Nav);
