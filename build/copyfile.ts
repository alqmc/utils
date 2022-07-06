import { resolve } from 'path';
import { copyFile } from '@alqmc/build-utils';
import { buildOutPath, enterPath, rootPath } from './path';
export const copyFiles = async () => {
  Promise.all([
    copyFile(
      resolve(enterPath, 'package.json'),
      resolve(buildOutPath, 'package.json')
    ),
    copyFile(
      resolve(rootPath, 'README.md'),
      resolve(buildOutPath, 'README.md')
    ),
  ]);
};
