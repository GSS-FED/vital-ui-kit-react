/* eslint-disable import/no-extraneous-dependencies */

import initStoryshots, {
  multiSnapshotWithOptions,
} from '@storybook/addon-storyshots';
import 'jest-styled-components'
import { Table, SimpleTable } from '../../table/src';

/**
 * Mock methods of addon-info so that "Show Info" button don't go into snapshots.
 * https://github.com/storybooks/storybook/issues/1011#issuecomment-322698049
 */
jest.mock('@storybook/addon-info', () => ({
  withInfo: () => storyFn => storyFn,
  setDefaults: () => {},
}));

initStoryshots({
  test: multiSnapshotWithOptions({
    createNodeMock: (element) => {
      if (element.type === Table || SimpleTable ) {
        return document.createElement('div')
      }
    },
  })
});
