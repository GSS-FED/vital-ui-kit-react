/* eslint-disable import/no-extraneous-dependencies */

import initStoryshots, {
  multiSnapshotWithOptions,
} from '@storybook/addon-storyshots';
import styleSheetSerializer from 'jest-styled-components/src/styleSheetSerializer';
import { addSerializer } from 'jest-specific-snapshot';

/**
 * Mock methods of addon-info so that "Show Info" button don't go into snapshots.
 * https://github.com/storybooks/storybook/issues/1011#issuecomment-322698049
 */
jest.mock('@storybook/addon-info', () => ({
  withInfo: () => storyFn => storyFn,
  setDefaults: () => {},
}));

/**
 * Add custom serializer in order to work with multiSnapShot
 * https://github.com/storybooks/storybook/issues/887#issuecomment-357073807
 */
addSerializer(styleSheetSerializer);

initStoryshots({
  test: multiSnapshotWithOptions({}),
});
