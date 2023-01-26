import { Config } from '@stencil/core';

import { sass } from '@stencil/sass';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

import {
  angularOutputTarget,
  ValueAccessorConfig,
} from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'core-components',
  taskQueue: 'async',
  sourceMap: true,

  extras: {
    experimentalImportInjection: true,
  },
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'dist-hydrate-script',
      dir: 'dist/hydrate',
    },
    {
      type: 'dist-custom-elements',
      autoDefineCustomElements: true,
      includeGlobalScripts: false,
    },

    angularOutputTarget({
      componentCorePackage: '@ssp-ui/core-components',
      directivesProxyFile:
        '../../../packages/core-components-angular/src/generated/directives/proxies.ts',
      directivesArrayFile:
        '../../../packages/core-components-angular/src/generated/directives/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
};
