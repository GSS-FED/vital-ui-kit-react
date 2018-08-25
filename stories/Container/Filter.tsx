/* eslint-disable import/no-extraneous-dependencies */

import * as React from 'react';
import styled from 'styled-components';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { FieldInput, Input } from '../../packages/form/src';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

type P = {
  children: (value: string) => React.ReactNode;
};

type S = {
  filterValue: string;
  value: string;
};

class Filter extends React.PureComponent<P, S> {
  state = {
    filterValue: '',
    value: '',
  };

  onSearch$: Subject<string> = new Subject();

  componentDidMount() {
    this.onSearch$
      .asObservable()
      .pipe(
        distinctUntilChanged(),
        // debounceTime(500),
      )
      .subscribe(v => {
        this.setState({
          value: v,
        });
      });
  }

  onInputChange = (e: any) => {
    e.persist();
    const { value } = e.target;
    this.setState({ filterValue: value });
    this.onSearch$.next(value);
  };

  render() {
    return (
      <Wrapper>
        <FieldInput style={{ width: '60%' }}>
          <Input
            icon="search"
            value={this.state.filterValue}
            onChange={this.onInputChange}
          />
        </FieldInput>
        {this.props.children(this.state.value)}
      </Wrapper>
    );
  }
}

export default Filter;
