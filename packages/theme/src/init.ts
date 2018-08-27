import fs from 'fs-extra';
import path from 'path';

let themePath = 'theme';
process.argv.forEach(arg => {
  if (arg.includes('--ts')) {
    themePath = '../src/theme';
  }
});
fs.copySync(
  path.join(__dirname, themePath),
  path.join(process.cwd(), 'theme'),
);
