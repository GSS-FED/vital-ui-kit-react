import React from 'react';
import styled from 'styled-components';
import { ListGroup, ListItem } from '@gssfed/vital-ui-kit-react';

const TitleWrapper = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
`;

class Nav extends React.PureComponent {
  render() {
    return (
      <div style={{ background: '#1E3768', height: '100%' }}>
        <ListGroup themed="dark">
          <ListItem
            title={<TitleWrapper>Doc Inbox</TitleWrapper>}
            badge="99+"
            open
          >
            <ListItem title={<TitleWrapper>Appointments</TitleWrapper>} />
            <ListItem
              title={<TitleWrapper>Requisitions</TitleWrapper>}
              badge="10"
              open
            >
              <ListItem title={<TitleWrapper>Hardware</TitleWrapper>} />
              <ListItem title={<TitleWrapper>Software</TitleWrapper>} />
              <ListItem
                title={<TitleWrapper>Stationery</TitleWrapper>}
                badge="2"
              />
            </ListItem>
          </ListItem>
          <ListItem title={<TitleWrapper>Sending Operation</TitleWrapper>} />
          <ListItem title={<TitleWrapper>Form Operation</TitleWrapper>} />
          <ListItem title={<TitleWrapper>File Managment</TitleWrapper>}>
            <ListItem title={<TitleWrapper>Hardware</TitleWrapper>} />
            <ListItem title={<TitleWrapper>Software</TitleWrapper>} />
            <ListItem title={<TitleWrapper>Stationery</TitleWrapper>} badge="2" />
          </ListItem>
          <ListItem title={<TitleWrapper>Integrated Delivery</TitleWrapper>} />
          <ListItem title={<TitleWrapper>Register Operation</TitleWrapper>} />
          <ListItem title={<TitleWrapper>Remove Operation</TitleWrapper>} />
          <ListItem title={<TitleWrapper>Maintainance</TitleWrapper>} />
          <ListItem title={<TitleWrapper>Setting</TitleWrapper>} />
        </ListGroup>
      </div>
    );
  }
}

export default Nav;
