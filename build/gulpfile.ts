import path from 'path';
import { run, withTask } from '@alqmc/build-utils';
import { buildTypescriptLib } from '@alqmc/build-ts';
import { series } from 'gulp';
import { buildOutPath, enterPath, rootPath } from './path';
import { copyFiles } from './copyfile';

export default series(
  withTask('clear', () => run('pnpm run clear')),
  withTask('build', async () => {
    await buildTypescriptLib({
      baseOptions: {
        input: path.resolve(enterPath, 'index.ts'),
        outPutPath: buildOutPath,
        enterPath,
        pkgPath: path.resolve(rootPath, 'package.json'),
        tsConfigPath: path.resolve(rootPath, 'tsconfig.json'),
      },
    });
  }),
  copyFiles
);
