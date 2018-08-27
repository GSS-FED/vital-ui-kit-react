const TEST_REGEX =
  '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$';

module.exports = {
  testRegex: TEST_REGEX,
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.md?$': 'markdown-loader-jest',
  },
  testPathIgnorePatterns: [
    '<rootDir>/examples/',
    '<rootDir>/node_modules/',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'identity-obj-proxy',
  },
  globals: {
    'ts-jest': {
      useBabelrc: true,
      tsConfigFile: 'tsconfig.json',
    },
  },
};
